import type { ImageMetadata } from "astro";

import DropdownImage1 from "@/assets/images/dropdown1.avif";
import DropdownImage2 from "@/assets/images/dropdown2.avif";
import DropdownImage3 from "@/assets/images/dropdown3.avif";

export interface NavigationItem {
    label: string;
    href: string;
    hideOnDesktop?: boolean;
}

export interface DropdownLink {
    href: string;
    label: string;
    description: string;
}

export interface DropdownPanel {
    tab: string;
    links: DropdownLink[];
    twoColumns?: boolean;
    image: ImageMetadata;
    imageAlt: string;
    overviewLabel: string;
    ctaHref: string;
}

export const navItems: NavigationItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    // En escritorio, Proyectos está dentro del menú desplegable.
    { label: "Proyectos", href: "/proyectos", hideOnDesktop: true },
    { label: "Tecnología", href: "/tecnologia" },
];

export const dropdownPanels: DropdownPanel[] = [
    {
        tab: "Servicios",
        twoColumns: true,
        links: [
            { href: "/servicios/postesado", label: "Postensado", description: "Sistemas de postensado de alta calidad" },
            { href: "/servicios/inyeccion", label: "Inyección de Lechada", description: "Inyección especializada para estructuras" },
            { href: "/servicios/suministro", label: "Suministro de Materiales", description: "Componentes compatibles para su obra" },
            { href: "/servicios/prefabricados", label: "Prefabricados", description: "Elementos prefabricados a medida" },
            { href: "/servicios", label: "Ver todos los servicios", description: "Explora nuestra oferta completa" },
        ],
        image: DropdownImage1,
        imageAlt: "Ilustración de un puente",
        overviewLabel: "Servicios",
        ctaHref: "/servicios",
    },
    {
        tab: "Empresa",
        links: [
            { href: "/nosotros", label: "Nosotros", description: "Conoce nuestras capacidades técnicas" },
            { href: "/nosotros#compromiso-tecnico", label: "Compromiso técnico", description: "Calidad, precisión, seguridad y durabilidad" },
            { href: "/grupo-empresarial", label: "Grupo empresarial", description: "Conoce nuestras capacidades complementarias" },
        ],
        image: DropdownImage2,
        imageAlt: "Empresa Postesados",
        overviewLabel: "Empresa",
        ctaHref: "/grupo-empresarial",
    },
    {
        tab: "Proyectos",
        links: [
            { href: "/proyectos", label: "Proyectos", description: "Ver todos nuestros proyectos" },
        ],
        image: DropdownImage2,
        imageAlt: "",
        overviewLabel: "Proyectos",
        ctaHref: "/proyectos",
    },
    {
        tab: "Legal",
        links: [
            { href: "/privacidad", label: "Privacidad", description: "Política de protección" },
            { href: "/terminos", label: "Términos", description: "Condiciones de uso del sitio" },
        ],
        image: DropdownImage3,
        imageAlt: "Infraestructura legal",
        overviewLabel: "Información legal",
        ctaHref: "/privacidad",
    },
];
