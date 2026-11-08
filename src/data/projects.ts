import type { ImageMetadata } from "astro";

import imgEncofrado from "@/assets/images/service_section/puente-rio-cachon-encofrado-lateral.avif";
import imgAcueducto from "@/assets/images/service_section/acueducto-vista-aerea-rio.avif";
import imgMontaje from "@/assets/images/service_section/montaje-losas-prefabricadas-camion.avif";
import imgMixer from "@/assets/images/service_section/mixer-vaciado-valvulas-azules.avif";
import imgGrua from "@/assets/images/service_section/planta-tratamiento-ingenieros-gran-angular.avif";
import imgPuenteAerea from "@/assets/images/service_section/puente-rio-cachon-vista-aerea-lateral.avif";
import imgConstruccionPuente from "@/assets/images/hero/construccion-puente.avif";
import imgPlanta from "@/assets/images/hero/planta-de-tratamiento-de-agua.avif";
import imgTuberia from "@/assets/images/hero/instalacion-tuberia-rio.avif";

export interface Project {
    image: ImageMetadata;
    category: string;
    title: string;
}

export interface FeaturedProject extends Project {
    description: string;
}

export const featuredProjects: FeaturedProject[] = [
    {
        image: imgEncofrado,
        category: "Puentes",
        title: "Puente Río Cachón — Armado Estructural",
        description: "Diseño y ejecución del armado estructural con sistema de postensado de alta resistencia."
    },
    {
        image: imgPlanta,
        category: "Infraestructura",
        title: "Planta de Tratamiento de Agua — Santo Domingo",
        description: "Construcción integral de planta de tratamiento con elementos prefabricados y postensados."
    }
];

export const projects: Project[] = [
    {
        image: imgEncofrado,
        category: "Puentes",
        title: "Puente Río Cachón — Encofrado Lateral"
    },
    {
        image: imgConstruccionPuente,
        category: "Puentes",
        title: "Construcción de Puente — Vista General"
    },
    {
        image: imgAcueducto,
        category: "Cimentación",
        title: "Pilares con Tablestacas de Acero"
    },
    {
        image: imgMixer,
        category: "Puentes",
        title: "Vaciado Nocturno — Puente Río Cachón"
    },
    {
        image: imgMixer,
        category: "Suministro",
        title: "Vaciado con Mixer — Válvulas Industriales"
    },
    {
        image: imgMontaje,
        category: "Cimentación",
        title: "Soldadura de Pilotes de Acero"
    },
    {
        image: imgMontaje,
        category: "Prefabricados",
        title: "Montaje de Losas Prefabricadas"
    },
    {
        image: imgGrua,
        category: "Prefabricados",
        title: "Colocación de Cabezal con Grúa"
    },
    {
        image: imgTuberia,
        category: "Infraestructura",
        title: "Cruce Aéreo de Tubería sobre Río"
    },
    {
        image: imgAcueducto,
        category: "Infraestructura",
        title: "Acueducto — Vista Aérea"
    },
    {
        image: imgPuenteAerea,
        category: "Puentes",
        title: "Puente Río Cachón — Vista Aérea"
    },
];
