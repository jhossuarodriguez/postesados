export interface TermsItem {
    title: string;
    description: string;
}

export interface NumberedTermsItem extends TermsItem {
    number: string;
}

export const termsPrinciples: NumberedTermsItem[] = [
    { number: "01", title: "Aceptación de los Términos", description: "Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestro sitio." },
    { number: "02", title: "Uso del Sitio Web", description: "Este sitio web es para uso informativo y de contacto comercial. Usted se compromete a utilizarlo de manera lícita, sin interferir con su funcionamiento ni intentar acceder a áreas restringidas sin autorización." },
    { number: "03", title: "Propiedad Intelectual", description: "Todo el contenido de este sitio, incluyendo textos, imágenes, logotipos, diseños y material gráfico, es propiedad de Postesados JHP, S.R.L. y está protegido por las leyes de propiedad intelectual." },
    { number: "04", title: "Limitación de Responsabilidad", description: "La información proporcionada en este sitio es de carácter general. Postesados JHP no garantiza la exactitud completa del contenido y no será responsable por daños derivados del uso de esta información." },
];

export const termsDetails: TermsItem[] = [
    { title: "Enlaces Externos", description: "Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad ni prácticas de estos sitios externos. Le recomendamos revisar sus términos antes de utilizarlos." },
    { title: "Servicios y Cotizaciones", description: "Las descripciones de servicios en este sitio son informativas. Las cotizaciones y acuerdos formales se establecen mediante contratos específicos entre Postesados JHP y el cliente, sujetos a condiciones particulares de cada proyecto." },
    { title: "Legislación Aplicable", description: "Estos términos se rigen por las leyes de la República Dominicana. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Santo Domingo, República Dominicana." },
    { title: "Indemnización", description: "Usted acepta indemnizar y mantener libre de responsabilidad a Postesados JHP, sus directivos y empleados, frente a cualquier reclamación derivada del uso indebido de este sitio web o la violación de estos términos." },
    { title: "Modificaciones de los Términos", description: "Postesados JHP se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al ser publicados en esta página. El uso continuado del sitio implica la aceptación de las modificaciones." },
    { title: "Contacto Legal", description: "Para cualquier consulta relacionada con estos términos de uso, puede comunicarse con nosotros a través de postesados@gmail.com o llamando al (809) 222-5652. Estaremos encantados de asistirle." },
];
