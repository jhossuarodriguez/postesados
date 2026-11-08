import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { contactSchema, contactTopicLabels, type ContactInput } from "@/lib/contact-schema";

const FROM_EMAIL = "Postesados <no-reply@postesados.com>";
const NOTIFICATION_EMAIL = "postesados@gmail.com";
const GENERIC_ERROR = "No pudimos enviar tu consulta. Inténtalo de nuevo más tarde.";
const SUCCESS_MESSAGE = "Consulta enviada correctamente. Nos pondremos en contacto pronto.";
const MIN_FILL_MS = 3_000;
const MAX_FILL_MS = 24 * 60 * 60 * 1000;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Un humano no rellena el campo oculto ni envía el formulario en menos de unos segundos;
// los bots que hacen POST directo tampoco traen la marca de tiempo que pone el JS del cliente.
const looksLikeBot = (honeypot: string | undefined, formTs: string | undefined) => {
    if (honeypot?.trim()) return true;
    const elapsed = Date.now() - Number(formTs);
    return !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS;
};

// Texto aleatorio tipo "nROhzlnyKnlYLPmwQXYnz": muchas transiciones minúscula→mayúscula dentro de una palabra.
// Nombres reales como "McDonald" o "DeLaCruz" tienen como mucho dos.
const isGibberish = (text: string | undefined) =>
    (text ?? "").split(/\s+/).some((word) => (word.match(/\p{Ll}\p{Lu}/gu)?.length ?? 0) >= 3);

// Gmail ignora los puntos; los bots los intercalan ("sa.m.pan.m.o.ei.noi@gmail.com") para esquivar filtros.
const isDottedGmail = (email: string) => {
    const [local, domain] = email.toLowerCase().split("@");
    return (domain === "gmail.com" || domain === "googlemail.com") && (local.match(/\./g)?.length ?? 0) >= 3;
};

const isSpam = (input: ContactInput) =>
    looksLikeBot(input.sitio_web, input.form_ts) ||
    isDottedGmail(input.correo) ||
    [input.nombre, input.apellido, input.mensaje].some(isGibberish);

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

async function isHumanAccordingToTurnstile(token: string, secret: string, clientIp: string | undefined) {
    const body = new URLSearchParams({ secret, response: token });
    if (clientIp) body.set("remoteip", clientIp);

    try {
        const response = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
        const result = (await response.json()) as { success: boolean };
        return result.success;
    } catch (error) {
        console.error("No se pudo contactar con Cloudflare Turnstile:", error);
        throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
    }
}

function getClientIp(context: { clientAddress: string }) {
    try {
        return context.clientAddress;
    } catch {
        // clientAddress no está disponible en todos los runtimes; Turnstile funciona sin ella.
        return undefined;
    }
}

function buildNotificationHtml(input: ContactInput) {
    const fullName = [input.nombre, input.apellido].filter(Boolean).join(" ");
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(input.correo);
    const safePhone = escapeHtml(input.telefono);
    const safeTopic = escapeHtml(contactTopicLabels[input.tema]);
    const safeMessage = escapeHtml(input.mensaje);

    return `
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
}

export const server = {
    sendContactMessage: defineAction({
        accept: "form",
        input: contactSchema,
        handler: async (input, context) => {
            const resendApiKey = import.meta.env.RESEND_API_KEY;
            const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
            if (!resendApiKey || !turnstileSecret) {
                console.error("Faltan RESEND_API_KEY o TURNSTILE_SECRET_KEY en las variables de entorno.");
                throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
            }

            if (isSpam(input)) {
                // Respuesta de éxito falsa para no darle pistas al bot; `success: false` evita contar la conversión.
                return { success: false, message: SUCCESS_MESSAGE };
            }

            const isHuman = await isHumanAccordingToTurnstile(
                input["cf-turnstile-response"],
                turnstileSecret,
                getClientIp(context),
            );
            if (!isHuman) {
                throw new ActionError({ code: "BAD_REQUEST", message: "No pudimos verificar que eres humano. Inténtalo de nuevo." });
            }

            try {
                // Sin correo de confirmación al remitente: los bots lo usaban para enviar correo a terceros.
                const resend = new Resend(resendApiKey);
                const notification = await resend.emails.send({
                    from: FROM_EMAIL,
                    to: NOTIFICATION_EMAIL,
                    replyTo: input.correo,
                    subject: `Nueva consulta web: ${contactTopicLabels[input.tema]}`,
                    html: buildNotificationHtml(input),
                });

                if (notification.error) {
                    console.error("Resend rechazó el correo de notificación:", notification.error);
                    throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
                }

                return { success: true, message: SUCCESS_MESSAGE };
            } catch (error) {
                if (error instanceof ActionError) throw error;
                console.error("Error enviando el formulario de contacto:", error);
                throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: GENERIC_ERROR });
            }
        },
    }),
};
