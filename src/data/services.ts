import type { ImageMetadata } from "astro";

import imgEncofrado from "@/assets/images/SERVICE_SECTION/puente-rio-cachon-encofrado-lateral.avif";
import imgVaciado from "@/assets/images/SERVICE_SECTION/mixer-vaciado-valvulas-azules.avif";
import imgMixer from "@/assets/images/SERVICE_SECTION/mixer-vaciado-valvulas-azules.avif";
import imgMontaje from "@/assets/images/SERVICE_SECTION/montaje-losas-prefabricadas-camion.avif";
import imgGrua from "@/assets/images/SERVICE_SECTION/planta-tratamiento-ingenieros-gran-angular.avif";
import imgPlanta from "@/assets/images/SERVICE_SECTION/planta-tratamiento-ingenieros-gran-angular.avif";
import imgAcueducto from "@/assets/images/SERVICE_SECTION/acueducto-vista-aerea-rio.avif";

export interface Service {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata | string;
    imageAlt: string;
}

export const services: Service[] = [
    { id: "postesado", title: "Postensado estructural", description: "Diseño, instalación y tensado de sistemas adherentes y sin adherencia para losas, vigas, puentes, viaductos y estructuras de grandes luces.", image: imgEncofrado, imageAlt: "Instalación de un sistema de postensado" },
    { id: "inyeccion", title: "Inyección de lechada", description: "Llenado controlado de ductos para crear adherencia, transferir esfuerzos y proteger los torones frente a la humedad y la corrosión.", image: imgVaciado, imageAlt: "Proceso de inyección de lechada cementicia" },
    { id: "suministro", title: "Suministro de sistemas", description: "Torones de alta resistencia, cuñas, placas de anclaje, ductos y equipos hidráulicos técnicamente compatibles para pretensado y postensado.", image: imgMixer, imageAlt: "Materiales y equipos para sistemas de presfuerzo" },
    { id: "prefabricados", title: "Elementos prefabricados", description: "Fabricación de pilotes, vigas AASHTO y Bulb-T, vigas doble T, losas alveolares, gradas y elementos especiales a la medida del proyecto.", image: imgMontaje, imageAlt: "Montaje de elementos prefabricados de hormigón" },
    { id: "tensado", title: "Tensado hidráulico", description: "Aplicación y control de la fuerza de presfuerzo con gatos hidráulicos, equipos calibrados y verificación de presión y alargamientos.", image: imgGrua, imageAlt: "Operación de tensado hidráulico" },
    { id: "hormigon-armado", title: "Hormigón armado", description: "Elementos estructurales y prefabricados que combinan la resistencia a compresión del concreto con la capacidad a tracción del acero de refuerzo.", image: imgPlanta, imageAlt: "Elementos estructurales de hormigón armado" },
    { id: "puentes", title: "Puentes y viaductos", description: "Soluciones pretensadas y postensadas para mayores luces, menos apoyos intermedios y construcción eficiente en cauces o zonas de difícil acceso.", image: imgAcueducto, imageAlt: "Puente ejecutado con soluciones de hormigón presforzado" },
    { id: "losas", title: "Losas de grandes luces", description: "Losas postensadas para hoteles, villas, torres, estacionamientos y espacios que requieren flexibilidad arquitectónica y secciones esbeltas.", image: "/new/nuestros_servicios_hormigon_postensado_proyecto_2.avif", imageAlt: "Losa estructural postensada" },
    { id: "infraestructura", title: "Infraestructura prefabricada", description: "Box culverts, barreras New Jersey y muros de contención tipo L fabricados bajo condiciones controladas para agilizar su instalación en obra.", image: "/new/nuestros_servicios_hormigon_armado_proyecto_3.avif", imageAlt: "Elementos prefabricados para infraestructura" },
    { id: "proteccion-costera", title: "Protección costera", description: "Tetrápodos de hormigón dimensionados según el oleaje, la profundidad, la pendiente y las condiciones particulares de cada proyecto marítimo.", image: "/new/tetrapodos_rompeolas_san_pedro_macoris.avif", imageAlt: "Tetrápodos de hormigón para protección costera" },
    { id: "anclajes-activos", title: "Anclajes activos", description: "Sistemas para estabilizar taludes, excavaciones y muros mediante tendones tensionados que transmiten las cargas a estratos resistentes.", image: imgEncofrado, imageAlt: "Sistema estructural de anclajes activos" },
    { id: "estructuras-combinadas", title: "Estructuras combinadas", description: "Integración de hormigón pretensado, hormigón armado, elementos prefabricados y estructuras metálicas para optimizar materiales y montaje.", image: imgMontaje, imageAlt: "Estructura combinada de hormigón y acero" },
];
