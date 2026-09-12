import { z } from "zod/mini";

const personName = (required: boolean) =>
    z.string().check(
        ...(required ? [z.minLength(2, "Escribe al menos 2 caracteres.")] : []),
        z.maxLength(60, "No puede superar 60 caracteres."),
        z.regex(/^[\p{L}\p{M}' -]*$/u, "Utiliza únicamente letras, espacios, apóstrofes o guiones."),
    );

export const CONTACT_TOPICS = ["postensado", "pretensado", "prefabricados", "suministros", "otro"] as const;

export const contactTopicLabels: Record<(typeof CONTACT_TOPICS)[number], string> = {
    postensado: "Postensado",
    pretensado: "Pretensado",
    prefabricados: "Prefabricados",
    suministros: "Suministro de materiales",
    otro: "Otra consulta",
};

export const contactSchema = z.object({
    nombre: personName(true),
    apellido: personName(false),
    correo: z.email("Introduce un correo electrónico válido.").check(z.maxLength(254, "El correo es demasiado largo.")),
    tema: z.enum(CONTACT_TOPICS, "Selecciona un tema."),
    telefono: z.string().check(
        z.maxLength(25, "El teléfono es demasiado largo."),
        z.regex(/^(?:\+?[\d\s().-]{7,25})?$/, "Introduce un teléfono válido."),
    ),
    mensaje: z.string().check(
        z.minLength(10, "El mensaje debe tener al menos 10 caracteres."),
        z.maxLength(2000, "El mensaje no puede superar 2,000 caracteres."),
    ),
    privacidad: z.literal("accepted", "Debes aceptar el tratamiento de datos para continuar."),
    "cf-turnstile-response": z.string().check(z.minLength(1, "Completa la verificación de seguridad.")),
});

export type ContactInput = z.infer<typeof contactSchema>;
