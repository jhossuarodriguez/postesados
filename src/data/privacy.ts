export interface PrivacyItem {
    title: string;
    description: string;
}

export interface NumberedPrivacyItem extends PrivacyItem {
    number: string;
}

export const privacyPrinciples: NumberedPrivacyItem[] = [
    { number: "01", title: "Información que Recopilamos", description: "Recopilamos información personal que usted nos proporciona voluntariamente al contactarnos, como su nombre, correo electrónico, número de teléfono y detalles relacionados con su proyecto o consulta." },
    { number: "02", title: "Uso de la Información", description: "Utilizamos su información para responder a sus consultas, proporcionarle cotizaciones, mejorar nuestros servicios y comunicarnos con usted sobre proyectos y oportunidades relevantes." },
    { number: "03", title: "Protección de Datos", description: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción." },
    { number: "04", title: "Sus Derechos", description: "Usted tiene derecho a acceder, rectificar, eliminar o limitar el uso de sus datos personales. Puede ejercer estos derechos contactándonos directamente en cualquier momento." },
];

export const privacyDetails: PrivacyItem[] = [
    { title: "Cookies y Tecnologías de Rastreo", description: "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Usted puede configurar su navegador para rechazar cookies en cualquier momento." },
    { title: "Compartir con Terceros", description: "No vendemos, comercializamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos legales." },
    { title: "Retención de Datos", description: "Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada, o según lo requieran las obligaciones legales aplicables." },
    { title: "Protección de Menores", description: "Nuestros servicios no están dirigidos a menores de edad. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato." },
    { title: "Cambios en la Política", description: "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de la última actualización. Le recomendamos revisarla periódicamente." },
    { title: "Contacto sobre Privacidad", description: "Si tiene preguntas o inquietudes sobre nuestra política de privacidad o el manejo de sus datos personales, puede contactarnos a través de postesados@gmail.com o llamando al (809) 222-5652." },
];
