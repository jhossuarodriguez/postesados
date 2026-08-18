export interface FooterLink {
    label: string;
    href: string;
    ariaLabel: string;
    title: string;
}

export interface FooterColumn {
    label: string;
    links: FooterLink[];
}

export interface FooterContactLink extends FooterLink {
    className: string;
}

export interface FooterContact {
    heading: string;
    address: FooterContactLink & {
        rel: string;
        target: string;
    };
    phones: FooterContactLink[];
    email: FooterContactLink;
}

export interface FooterSocialLink extends FooterLink {
    platform: "instagram" | "linkedIn";
    rel: string;
    target: string;
}

export const footerContact: FooterContact = {
    heading: "Oficina",
    address: {
        label: "Santo Domingo, República Dominicana",
        href: "https://maps.app.goo.gl/hDjzE76zwmDkEnJVA",
        rel: "noopener noreferrer",
        target: "_blank",
        ariaLabel:
            "Ubicación de la Oficina de Postesados en Santo Domingo, República Dominicana",
        title: "Ver ubicación de la Oficina de Postesados en Google Maps",
        className:
            "inline-flex items-center leading-6 hover:text-white transition-colors underline decoration-white/30 underline-offset-4",
    },
    phones: [
        {
            label: "(809) 222-5652",
            href: "tel:8092225652",
            ariaLabel: "Llamar al (809) 222-5652",
            title: "Llamar al (809) 222-5652",
            className: "flex items-center leading-6 hover:text-white transition-colors",
        },
        {
            label: "(809) 518-9910",
            href: "tel:8095189910",
            ariaLabel: "Llamar al (809) 518-9910",
            title: "Llamar al (809) 518-9910",
            className: "flex items-center leading-6 hover:text-white transition-colors",
        },
    ],
    email: {
        label: "postesados@gmail.com",
        href: "mailto:postesados@gmail.com",
        ariaLabel: "Enviar correo a postesados@gmail.com",
        title: "Enviar correo a postesados@gmail.com",
        className:
            "inline-flex items-center leading-6 hover:text-white transition-colors underline decoration-white/30 underline-offset-4",
    },
};

export const footerSocialLinks: FooterSocialLink[] = [
    {
        platform: "instagram",
        label: "Instagram Oficial de Postesados",
        href: "https://www.instagram.com/postesadosjhp/",
        rel: "noopener noreferrer",
        target: "_blank",
        ariaLabel: "Instagram Oficial de Postesados",
        title: "Ir a Instagram Oficial de Postesados",
    },
    {
        platform: "linkedIn",
        label: "LinkedIn Oficial de Postesados",
        href: "https://www.linkedin.com/company/postesados-jhp/about/",
        rel: "noopener noreferrer",
        target: "_blank",
        ariaLabel: "LinkedIn Oficial de Postesados",
        title: "Ir a LinkedIn Oficial de Postesados",
    },
];

export const footerColumns: FooterColumn[] = [
    {
        label: "Nosotros",
        links: [
            {
                label: "Nuestra Historia",
                href: "/nosotros",
                ariaLabel: "Nuestra Historia",
                title: "Ir a Nuestra Historia",
            },
            {
                label: "Compromiso Técnico",
                href: "/nosotros#compromiso-tecnico",
                ariaLabel: "Compromiso Técnico",
                title: "Ir a Compromiso Técnico",
            },
            {
                label: "Grupo Empresarial",
                href: "/grupo-empresarial",
                ariaLabel: "Grupo Empresarial",
                title: "Ir al Grupo Empresarial",
            },
        ],
    },
    {
        label: "Qué Hacemos",
        links: [
            {
                label: "Postensado y Pretensado",
                href: "/servicios#postesado",
                ariaLabel: "Postensado y Pretensado",
                title: "Ir a Postensado y Pretensado",
            },
            {
                label: "Infraestructura Vial",
                href: "/servicios#infraestructura",
                ariaLabel: "Infraestructura Vial",
                title: "Ir a Infraestructura Vial",
            },
            {
                label: "Prefabricados",
                href: "/servicios#prefabricados",
                ariaLabel: "Prefabricados",
                title: "Ir a Prefabricados",
            },
            {
                label: "Suministro y Equipos",
                href: "/servicios#suministro",
                ariaLabel: "Suministro y Equipos",
                title: "Ir a Suministro y Equipos",
            },
        ],
    },
    {
        label: "Proyectos",
        links: [
            {
                label: "Todos los Proyectos",
                href: "/proyectos",
                ariaLabel: "Todos los Proyectos",
                title: "Ir a Todos los Proyectos",
            },
            {
                label: "Puentes y Viaductos",
                href: "/servicios#puentes",
                ariaLabel: "Puentes y Viaductos",
                title: "Ir a Puentes y Viaductos",
            },
            {
                label: "Puentes",
                href: "/servicios#puentes",
                ariaLabel: "Puentes",
                title: "Ir a Puentes",
            },
        ],
    },
    {
        label: "Legal",
        links: [
            {
                label: "Política de Privacidad",
                href: "/privacidad",
                ariaLabel: "Política de Privacidad",
                title: "Ir a Política de Privacidad",
            },
            {
                label: "Términos de Uso",
                href: "/terminos",
                ariaLabel: "Términos de Uso",
                title: "Ir a Términos de Uso",
            },
        ],
    },
];
