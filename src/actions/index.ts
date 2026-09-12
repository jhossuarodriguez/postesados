import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { contactSchema, contactTopicLabels } from "@/lib/contact-schema";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const FROM_EMAIL = "Postesados <no-reply@postesados.com>";
const NOTIFICATION_EMAIL = "postesados@gmail.com";
const GENERIC_ERROR = "No pudimos enviar tu consulta. Inténtalo de nuevo más tarde.";

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

export const server = {
    send: defineAction({
        accept: "form",
        input: contactSchema,
        handler: async (input, context) => {
            const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
            if (!import.meta.env.RESEND_API_KEY || !turnstileSecret) {
                throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
            }

            const verifyBody = new URLSearchParams({
                secret: turnstileSecret,
                response: input["cf-turnstile-response"],
            });
            try {
                verifyBody.set("remoteip", context.clientAddress);
            } catch {
                // clientAddress no disponible en este runtime; siteverify funciona sin ella
            }

            const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
                method: "POST",
                body: verifyBody,
            });
            const verifyResult = (await verifyResponse.json()) as { success: boolean };
            if (!verifyResult.success) {
                throw new ActionError({ code: "BAD_REQUEST", message: "No pudimos verificar que eres humano. Inténtalo de nuevo." });
            }

            const fullName = [input.nombre, input.apellido].filter(Boolean).join(" ");
            const topic = contactTopicLabels[input.tema];
            const safeName = escapeHtml(fullName);
            const safeEmail = escapeHtml(input.correo);
            const safePhone = escapeHtml(input.telefono || "No indicado");
            const safeTopic = escapeHtml(topic);
            const safeMessage = escapeHtml(input.mensaje);

            const notificationHtml = `
                <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 40px 20px; color: #111827;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
                        <div style="height: 6px; background: #002d80;"></div>
                        <div style="padding: 32px;">
                            <h2 style="margin: 0 0 16px; font-size: 20px; color: #002d80;">Nueva consulta web</h2>
                            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 30%;">Nombre:</td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">${safeName}</td></tr>
                                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Correo:</td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${safeEmail}" style="color: #002d80;">${safeEmail}</a></td></tr>
                                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Teléfono:</td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${safePhone}</td></tr>
                                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Tema:</td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${safeTopic}</td></tr>
                            </table>
                            <div>
                                <span style="display: block; color: #6b7280; font-size: 12px; margin-bottom: 4px;">Mensaje:</span>
                                <div style="background: #f3f4f6; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${safeMessage}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const confirmationHtml = `
                <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 40px 20px; color: #111827;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
                        <div style="height: 6px; background: #002d80;"></div>
                        <div style="padding: 32px;">
                            <h2 style="margin: 0 0 16px; font-size: 20px; color: #002d80;">¡Hemos recibido tu consulta!</h2>
                            <p style="font-size: 14px; line-height: 1.6; color: #374151; margin: 0;">
                                Gracias por contactarnos sobre "${safeTopic}". Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo lo antes posible.
                            </p>
                        </div>
                    </div>
                </div>
            `;

            try {
                const [notification, confirmation] = await Promise.all([
                    resend.emails.send({
                        from: FROM_EMAIL,
                        to: NOTIFICATION_EMAIL,
                        replyTo: input.correo,
                        subject: `Nueva consulta web: ${topic}`,
                        html: notificationHtml,
                    }),
                    resend.emails.send({
                        from: FROM_EMAIL,
                        to: input.correo,
                        subject: "Hemos recibido tu consulta",
                        html: confirmationHtml,
                    }),
                ]);

                if (notification.error || confirmation.error) {
                    throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
                }

                return {
                    success: true,
                    message: "Consulta enviada correctamente. Nos pondremos en contacto pronto.",
                };
            } catch (error) {
                if (error instanceof ActionError) throw error;
                console.error("Error enviando el formulario de contacto:", error);
                throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
            }
        },
    }),
};
