import type { ImageMetadata } from "astro";

import imgArmadoPuente from "@/assets/images/SERVICE_SECTION/puente-rio-cachon-encofrado-lateral.avif";
import imgPilar from "@/assets/images/SERVICE_SECTION/acueducto-vista-aerea-rio.avif";
import imgSoldadura from "@/assets/images/SERVICE_SECTION/montaje-losas-prefabricadas-camion.avif";
import imgConstruccionPuente from "@/assets/images/HERO/construccion-puente.avif";
import imgPlanta from "@/assets/images/HERO/planta-de-tratamiento-de-agua.avif";
import imgTuberia from "@/assets/images/HERO/instalacion-tuberia-rio.avif";
import imgEncofrado from "@/assets/images/SERVICE_SECTION/puente-rio-cachon-encofrado-lateral.avif";
import imgVaciado from "@/assets/images/SERVICE_SECTION/mixer-vaciado-valvulas-azules.avif";
import imgMixer from "@/assets/images/SERVICE_SECTION/mixer-vaciado-valvulas-azules.avif";
import imgMontaje from "@/assets/images/SERVICE_SECTION/montaje-losas-prefabricadas-camion.avif";
import imgGrua from "@/assets/images/SERVICE_SECTION/planta-tratamiento-ingenieros-gran-angular.avif";
import imgAcueducto from "@/assets/images/SERVICE_SECTION/acueducto-vista-aerea-rio.avif";
import imgPuenteAerea from "@/assets/images/SERVICE_SECTION/puente-rio-cachon-vista-aerea-lateral.avif";

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
        image: imgArmadoPuente,
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
        image: imgPilar,
        category: "Cimentación",
        title: "Pilares con Tablestacas de Acero"
    },
    {
        image: imgVaciado,
        category: "Puentes",
        title: "Vaciado Nocturno — Puente Río Cachón"
    },
    {
        image: imgMixer,
        category: "Suministro",
        title: "Vaciado con Mixer — Válvulas Industriales"
    },
    {
        image: imgSoldadura,
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

export { imgPuenteAerea };
