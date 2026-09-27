import { z } from "astro/zod";

const personName = z.string("Escribe un nombre válido.")
    .trim()
    .max(60, "No puede superar 60 caracteres.")
    .regex(/^[\p{L}\p{M}' -]*$/u, "Utiliza únicamente letras, espacios, apóstrofes o guiones.");

export const CONTACT_TOPICS = ["postensado", "pretensado", "prefabricados", "suministros", "otro"] as const;

export const contactTopicLabels: Record<(typeof CONTACT_TOPICS)[number], string> = {
    postensado: "Postensado",
    pretensado: "Pretensado",
    prefabricados: "Prefabricados",
    suministros: "Suministro de materiales",
    otro: "Otra consulta",
};

export const contactSchema = z.object({
    nombre: personName.min(2, "Escribe al menos 2 caracteres."),
    apellido: personName.optional(),
    correo: z.string("Introduce un correo electrónico válido.")
        .trim()
        .pipe(z.email("Introduce un correo electrónico válido.").max(254, "El correo es demasiado largo.")),
    tema: z.enum(CONTACT_TOPICS, "Selecciona un tema."),
    telefono: z.string("Introduce un teléfono válido.")
        .trim()
        .min(1, "Introduce un teléfono.")
        .max(25, "El teléfono es demasiado largo.")
        .regex(/^\+?[\d\s().-]*$/, "Utiliza solo números, espacios, +, paréntesis o guiones.")
        .refine((v) => /^\d{7,15}$/.test(v.replace(/\D/g, "")), "El teléfono debe tener entre 7 y 15 dígitos."),
    mensaje: z.string("Escribe un mensaje de al menos 10 caracteres.")
        .trim()
        .min(10, "El mensaje debe tener al menos 10 caracteres.")
        .max(2000, "El mensaje no puede superar 2,000 caracteres."),
    privacidad: z.literal("accepted", "Debes aceptar el tratamiento de datos para continuar."),
    // Anti-spam: campo trampa oculto (debe llegar vacío) y marca de tiempo de carga del formulario.
    sitio_web: z.string().optional(),
    form_ts: z.string().optional(),
    "cf-turnstile-response": z.string("Completa la verificación de seguridad.")
        .trim()
        .min(1, "Completa la verificación de seguridad."),
});

export type ContactInput = z.infer<typeof contactSchema>;
