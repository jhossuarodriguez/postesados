export interface CompanyStat {
    value: string;
    label: string;
}

// Única fuente de los datos de contacto: footer, página de contacto, SEO y textos legales.
export const companyContact = {
    heading: "Oficina",
    address: {
        label: "Santo Domingo, República Dominicana",
        href: "https://maps.app.goo.gl/hDjzE76zwmDkEnJVA",
    },
    phones: [
        { label: "(809) 222-5652", href: "tel:+18092225652" },
        { label: "(809) 518-9910", href: "tel:+18095189910" },
    ],
    email: { label: "postesados@gmail.com", href: "mailto:postesados@gmail.com" },
};

export const companyStats: CompanyStat[] = [
    { value: "35–70", label: "MPa en hormigones de alta resistencia" },
    { value: "3", label: "Sistemas: pretensado, postensado y armado" },
    { value: "2", label: "Modalidades de postensado" },
    { value: "360°", label: "Diseño, suministro, instalación y control" },
];
