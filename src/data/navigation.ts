import type { ImageMetadata } from "astro";

import DropdownImage1 from "@/assets/images/dropdown1.avif";
import DropdownImage2 from "@/assets/images/dropdown2.avif";
import DropdownImage3 from "@/assets/images/dropdown3.avif";

export interface NavigationItem {
    label: string;
    href: string;
    class?: string;
}

export interface DropdownTab {
    id: string;
    panelId: string;
    label: string;
}

export interface DropdownLink {
    href: string;
    class: string;
    title: string;
    label: string;
    description: string;
}

export interface DropdownPanel {
    id: string;
    tabId: string;
    listClass: string;
    links: readonly DropdownLink[];
    image: ImageMetadata;
    imageAlt: string;
    overviewLabel: string;
    ctaHref: string;
    ctaTitle: string;
}

export const navItems: readonly NavigationItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos", class: "md:hidden lg:hidden" },
    { label: "Tecnología", href: "/tecnologia" },
    { label: "Contacto", href: "/contact", class: "md:hidden lg:hidden" },
];

export const dropdownTabs: readonly DropdownTab[] = [
    { id: "tab-0", panelId: "panel-0", label: "Servicios" },
    { id: "tab-1", panelId: "panel-1", label: "Empresa" },
    { id: "tab-4", panelId: "panel-4", label: "Proyectos" },
    { id: "tab-2", panelId: "panel-2", label: "Legal" },
];

const defaultLinkClass =
    "menu-dropdownn-link flex items-center justify-between py-4 px-3 border-b border-white/8 no-underline rounded-lg transition-colors duration-200 hover:bg-quaternary/50 text-white/80 hover:text-white group/section";

export const dropdownPanels: readonly DropdownPanel[] = [
    {
        id: "panel-0",
        tabId: "tab-0",
        listClass: "grid grid-cols-2 gap-x-12 content-start max-w-6xl",
        links: [
            {
                href: "/servicios#postesado",
                class: defaultLinkClass,
                title: "Servicio de postensado",
                label: "Postensado",
                description: "Sistemas de postensado de alta calidad",
            },
            {
                href: "/servicios#inyeccion",
                class: `${defaultLinkClass} gap-x-2`,
                title: "Servicio Inyección de Lechada",
                label: "Inyección de Lechada",
                description: "Inyección especializada para estructuras",
            },
            {
                href: "/servicios#suministro",
                class: defaultLinkClass,
                title: "Servicio Suministro de Materiales",
                label: "Suministro de Materiales",
                description: "Materiales certificados para su obra",
            },
            {
                href: "/servicios#prefabricados",
                class: defaultLinkClass,
                title: "Servicio Prefabricados",
                label: "Prefabricados",
                description: "Elementos prefabricados a medida",
            },
            {
                href: "/servicios",
                class: defaultLinkClass,
                title: "Ver todos los servicios",
                label: "Ver todos los servicios",
                description: "Explora nuestra oferta completa",
            },
        ],
        image: DropdownImage1,
        imageAlt: "Puente modo dibujo para servicios de postensado",
        overviewLabel: "Servicios Overview",
        ctaHref: "/servicios",
        ctaTitle: "Ver todos los servicios",
    },
    {
        id: "panel-1",
        tabId: "tab-1",
        listClass: "content-start",
        links: [
            {
                href: "/nosotros",
                class: `${defaultLinkClass} gap-x-10`,
                title: "Nosotros",
                label: "Nosotros",
                description: "Conoce nuestra historia y misión",
            },
            {
                href: "/nosotros#compromiso-tecnico",
                class: defaultLinkClass,
                title: "Compromiso técnico",
                label: "Compromiso técnico",
                description: "Calidad, precisión, seguridad y durabilidad",
            },
            {
                href: "/grupo-empresarial",
                class: defaultLinkClass,
                title: "Grupo empresarial",
                label: "Grupo empresarial",
                description: "Conoce nuestras capacidades complementarias",
            },
        ],
        image: DropdownImage2,
        imageAlt: "Empresa Postesados",
        overviewLabel: "Empresa Overview",
        ctaHref: "/grupo-empresarial",
        ctaTitle: "Conocer el grupo empresarial",
    },
    {
        id: "panel-4",
        tabId: "tab-4",
        listClass: "content-start",
        links: [
            {
                href: "/proyectos",
                class: `${defaultLinkClass} gap-x-10`,
                title: "Proyectos",
                label: "Proyectos",
                description: "Ver todos nuestros proyectos",
            },
        ],
        image: DropdownImage2,
        imageAlt: "Empresa Postesados",
        overviewLabel: "Empresa Overview",
        ctaHref: "/proyectos",
        ctaTitle: "Ver todos los proyectos",
    },
    {
        id: "panel-2",
        tabId: "tab-2",
        listClass: "content-start",
        links: [
            {
                href: "/privacidad",
                class: `${defaultLinkClass} gap-x-10`,
                title: "Privacidad",
                label: "Privacidad",
                description: "Política de protección",
            },
            {
                href: "/terminos",
                class: defaultLinkClass,
                title: "Términos",
                label: "Términos",
                description: "Condiciones de uso del sitio",
            },
        ],
        image: DropdownImage3,
        imageAlt: "Infraestructura legal",
        overviewLabel: "Legal Overview",
        ctaHref: "/servicios",
        ctaTitle: "Ver todos los servicios",
    },
];
