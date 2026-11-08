export interface Link {
    label: string;
    href: string;
}

export interface FooterColumn {
    label: string;
    links: Link[];
}

export interface SocialLink extends Link {
    platform: "instagram" | "linkedIn";
}

export const footerSocialLinks: SocialLink[] = [
    {
        platform: "instagram",
        label: "Instagram de Postesados",
        href: "https://www.instagram.com/postesadosjhp/",
    },
    {
        platform: "linkedIn",
        label: "LinkedIn de Postesados",
        href: "https://www.linkedin.com/company/postesados-jhp/about/",
    },
];

export const footerColumns: FooterColumn[] = [
    {
        label: "Nosotros",
        links: [
            { label: "Sobre Postesados JHP", href: "/nosotros" },
            { label: "Compromiso Técnico", href: "/nosotros#compromiso-tecnico" },
            { label: "Grupo Empresarial", href: "/grupo-empresarial" },
        ],
    },
    {
        label: "Qué Hacemos",
        links: [
            { label: "Postensado", href: "/servicios/postesado" },
            { label: "Pretensado", href: "/servicios/pretensado" },
            { label: "Infraestructura Vial", href: "/servicios/infraestructura" },
            { label: "Prefabricados", href: "/servicios/prefabricados" },
            { label: "Suministro y Equipos", href: "/servicios/suministro" },
        ],
    },
    {
        label: "Proyectos",
        links: [
            { label: "Todos los Proyectos", href: "/proyectos" },
            { label: "Puentes y Viaductos", href: "/servicios/puentes" },
        ],
    },
    {
        label: "Legal",
        links: [
            { label: "Política de Privacidad", href: "/privacidad" },
            { label: "Términos de Uso", href: "/terminos" },
        ],
    },
];
