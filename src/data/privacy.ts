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
    { title: "Formulario y Servicios Externos", description: "El formulario valida la información en su navegador y prepara un mensaje en su aplicación de correo; el sitio no recibe ni almacena esos datos directamente. El envío se completa mediante su proveedor de correo electrónico. Al abrir enlaces a Google Maps, redes sociales u otros sitios, se aplican las políticas de esos servicios." },
    { title: "Compartir con Terceros", description: "No vendemos, comercializamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos legales." },
    { title: "Retención de Datos", description: "Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada, o según lo requieran las obligaciones legales aplicables." },
    { title: "Protección de Menores", description: "Nuestros servicios no están dirigidos a menores de edad. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato." },
    { title: "Cambios en la Política", description: "Las actualizaciones de esta política se publicarán en esta página. Le recomendamos revisarla periódicamente y contactarnos si necesita aclaraciones sobre el tratamiento de sus datos." },
    { title: "Contacto sobre Privacidad", description: "Si tiene preguntas o inquietudes sobre nuestra política de privacidad o el manejo de sus datos personales, puede contactarnos a través de postesados@gmail.com o llamando al (809) 222-5652." },
];
