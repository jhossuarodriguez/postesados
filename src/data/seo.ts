import { footerContact, footerSocialLinks } from "@/data/footer";
import type { ImageMetadata } from "astro";
import aboutImage from "@/assets/images/bgBackground.avif";
import serviceImage from "@/assets/images/projects/nuestros_servicios_hormigon_postensado_proyecto_2.avif";
import projectImage from "@/assets/images/projects/destacado_puente_sobre_rio_cachon.avif";
import technologyImage from "@/assets/images/projects/nuestros_servicios_gatos_hidraulicos_para_pretensar_3.avif";
import groupImage from "@/assets/images/projects/nave_industrial_prefabricada.avif";

export const SITE_URL = new URL(import.meta.env.SITE).origin;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const pageDetails: Record<string, { label: string; type?: string; image?: ImageMetadata; imageAlt?: string }> = {
    "/nosotros": { label: "Nosotros", type: "AboutPage", image: aboutImage, imageAlt: "Postesados JHP, soluciones de ingeniería estructural" },
    "/servicios": { label: "Servicios", type: "CollectionPage", image: serviceImage, imageAlt: "Estructura de hormigón postensado" },
    "/proyectos": { label: "Proyectos", type: "CollectionPage", image: projectImage, imageAlt: "Puente sobre el río Cachón" },
    "/tecnologia": { label: "Tecnología", image: technologyImage, imageAlt: "Equipos hidráulicos para tensado" },
    "/grupo-empresarial": { label: "Grupo empresarial", image: groupImage, imageAlt: "Nave industrial prefabricada" },
    "/contact": { label: "Contacto", type: "ContactPage" },
    "/privacidad": { label: "Política de privacidad" },
    "/terminos": { label: "Términos de uso" },
};

export interface Breadcrumb {
    name: string;
    path: string;
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Postesados JHP, S.R.L.",
    alternateName: "Postesados JHP",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-postesados.webp`,
    image: `${SITE_URL}/images/og-postesados.jpg`,
    email: footerContact.email.label,
    telephone: "+1-809-222-5652",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Santo Domingo",
        addressCountry: "DO",
    },
    areaServed: {
        "@type": "Country",
        name: "República Dominicana",
    },
    knowsAbout: [
        "Hormigón pretensado",
        "Hormigón postensado",
        "Hormigón armado",
        "Elementos prefabricados",
        "Puentes y viaductos",
        "Tensado estructural",
        "Inyección de lechada",
    ],
    sameAs: footerSocialLinks.map((link) => link.href),
};
