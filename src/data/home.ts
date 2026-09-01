import type { ImageMetadata } from "astro";
import imgTuberia from "@/assets/images/hero/instalacion-tuberia-rio.avif";
import imgBackgroundCompany from "@/assets/images/service_section/planta-tratamiento-ingenieros-gran-angular.avif";
import imgTetrapodos from "@/assets/images/tetrapodos-rompeolas-san-pedro-macoris.avif";
import imgPlantaTratamiento from "@/assets/images/projects/planta_de_tratamiento_de_agua_potable.avif";
import imgVigaBulbT from "@/assets/images/projects/destacado_viga_pretensada_bulb_t_2.avif";
import imgTensadoViga from "@/assets/images/projects/destacado_tensado_viga_postensada.avif";
import imgPilaPuentes from "@/assets/images/projects/pila_de_puentes.avif";
import imgHormigonArmado from "@/assets/images/projects/nuestros_servicios_hormigon_armado_proyecto_3.avif";
import imgHormigonPostensado from "@/assets/images/projects/nuestros_servicios_hormigon_postensado_proyecto_2.avif";
import imgHormigonPretensado from "@/assets/images/projects/nuestros_servicios_hormigon_prestensado_1.avif";
import imgGatosHidraulicos from "@/assets/images/projects/nuestros_servicios_gatos_hidraulicos_para_pretensar_3.avif";

export interface HomeSlide {
    src: ImageMetadata;
    alt: string;
    category: string;
    title?: string;
}

export interface Innovation {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata;
    alt: string;
}

export interface CompanyLink {
    href: string;
    label: string;
    title: string;
    color: "accent-orange" | "accent-red" | "primary";
}

export const heroSlides: HomeSlide[] = [
    {
        src: imgPlantaTratamiento,
        alt: "Ingenieros supervisando tanques de concreto en una planta de tratamiento hídrico.",
        category: "Prefabricado de hormigon armado",
        title: "Planta de tratamiento de agua potable (PTAP)",
    },
    {
        src: imgTuberia,
        alt: "Vista aérea de la instalación de una gran tubería verde sobre una estructura metálica que cruza un río, con maquinaria de construcción y trabajadores",
        category: "Prefabricados",
        title: "Puente sobre rio cachon",
    },
    {
        src: imgVigaBulbT,
        alt: "Viga pretensada Bulb T en un proyecto de infraestructura.",
        category: "Hormigón pretensado",
        title: "Viga pretensada Bulb T",
    },
    {
        src: imgTensadoViga,
        alt: "Proceso de tensado de una viga postensada.",
        category: "Hormigón postensado",
        title: "Tensado de viga postensada",
    },
];

export const serviceSlides: HomeSlide[] = [
    {
        src: imgPilaPuentes,
        alt: "Pila de hormigón para la estructura de un puente.",
        category: "Pila de Puente",
    },
    {
        src: imgTetrapodos,
        alt: "Línea de tetrápodos rompeolas.",
        category: "Tetrápodos",
    },
    {
        src: imgHormigonArmado,
        alt: "Proyecto estructural ejecutado en hormigón armado.",
        category: "Hormigón Armado",
    },
    {
        src: imgHormigonPostensado,
        alt: "Proyecto estructural ejecutado en hormigón postensado.",
        category: "Hormigón Postensado",
    },
    {
        src: imgHormigonPretensado,
        alt: "Elementos estructurales de hormigón pretensado.",
        category: "Hormigón Pretensado",
    },
];

export const innovations: Innovation[] = [
    {
        id: "01",
        title: "Hormigón pretensado",
        description: "El hormigón pretensado es un material excelente que combina cables de acero de alta resistencia y concreto con resistencias que oscilan de 35.0 MPa a 70.0 MPa, en el que los torones de acero se tensan con gatos hidráulicos antes del vaciado del concreto.",
        image: imgHormigonPretensado,
        alt: "Vista aérea de puente con viga pretensada sobre río Cachón",
    },
    {
        id: "02",
        title: "Hormigón postensado",
        description: "El hormigón postensado es una técnica de presfuerzo en la que los cables de acero se colocan dentro de ductos embebidos en la estructura y se tensan después de que el hormigón ha alcanzado la resistencia de diseño requerida.",
        image: imgHormigonPostensado,
        alt: "Vista aérea de construcción de acueducto sobre río",
    },
    {
        id: "03",
        title: "Hormigón armado",
        description: "El hormigón armado es un sistema constructivo que combina la resistencia a compresión del concreto con la capacidad del acero de refuerzo para resistir esfuerzos de tracción.",
        image: imgHormigonArmado,
        alt: "Montaje de panel prefabricado con grúa en obra",
    },
    {
        id: "04",
        title: "Suministro de Tecnología y Equipos",
        description: "Importadores especializados de cables (torones) de acero, cable de acero recubierto HDPE, anclajes y ductos. Proveemos soporte técnico y servicios de tensado y inyección para proyectos de ingeniería.",
        image: imgGatosHidraulicos,
        alt: "Vista aérea de patio de suministro con equipos y elementos prefabricados",
    },
];

export const specialtiesImage = imgTuberia;
export const companyImage = imgBackgroundCompany;

export const specialties = [
    "Hormigón pretensado",
    "Hormigon postensado",
    "Hormigon armado",
    "Tecnología de tensado",
];

export const companyLinks: CompanyLink[] = [
    { href: "https://tenaxconstruction.com.do/", label: "Tenax Construction", title: "Ir a Tenax Construction", color: "accent-orange" },
    { href: "https://drdrilling.com.do/", label: "Dr. Drilling", title: "Ir a Dr. Drilling", color: "accent-red" },
    { href: "/grupo-empresarial", label: "Conocer más", title: "Ir a Conocer más", color: "primary" },
];
