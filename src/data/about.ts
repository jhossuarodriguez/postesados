export interface CompanyCard {
    title: string;
    description: string;
    number: string;
    class: string;
    titleClass: string;
    descriptionClass: string;
    numberClass: string;
}

export interface ImpactCard {
    title: string;
    description: string;
    image: ImageMetadata;
    imageAlt: string;
}

export const companies: CompanyCard[] = [
    {
        title: "Ingeniería",
        description: "Diseñamos elementos adaptados a las cargas, luces y condiciones particulares de cada proyecto.",
        number: "01",
        class: "bg-tertiary hover:bg-primary transition duration-300 text-white rounded-2xl p-8 flex flex-col justify-between min-h-52 group/card",
        titleClass: "text-xl font-bold mb-3 text-primary group-hover/card:text-white",
        descriptionClass: "text-gray-500 leading-relaxed font-general-sans group-hover/card:text-white",
        numberClass: "text-3xl font-bold text-primary mt-6 group-hover/card:text-white",
    },
    {
        title: "Fabricación",
        description: "Producimos elementos de hormigón armado y pretensado con uniformidad, resistencia y precisión dimensional.",
        number: "02",
        class: "bg-tertiary hover:bg-black transition duration-300 rounded-2xl p-8 flex flex-col justify-between min-h-64 group/card",
        titleClass: "text-xl font-bold mb-3 text-primary group-hover/card:text-yellow-400",
        descriptionClass: "text-gray-500 leading-relaxed font-general-sans group-hover/card:text-white",
        numberClass: "text-3xl font-bold text-primary mt-6 group-hover/card:text-yellow-400",
    },
    {
        title: "Ejecución",
        description: "Instalamos, tensamos e inyectamos sistemas de postensado con equipos especializados y control técnico.",
        number: "03",
        class: "bg-tertiary hover:bg-accent-orange transition duration-300 rounded-2xl p-8 flex flex-col justify-between min-h-64 group/card",
        titleClass: "text-xl font-bold mb-3 text-primary group-hover/card:text-white",
        descriptionClass: "text-gray-500 leading-relaxed font-general-sans group-hover/card:text-white",
        numberClass: "text-3xl font-bold text-primary mt-6 group-hover/card:text-white",
    },
    {
        title: "Suministro",
        description: "Proveemos torones, anclajes, cuñas, ductos y componentes compatibles para sistemas de presfuerzo.",
        number: "04",
        class: "bg-tertiary hover:bg-[#016ebe] transition duration-300 rounded-2xl p-8 flex flex-col justify-between min-h-64 group/card",
        titleClass: "text-xl font-bold mb-3 text-primary group-hover/card:text-white",
        descriptionClass: "text-gray-500 group-hover/card:text-white leading-relaxed font-general-sans",
        numberClass: "text-3xl font-bold text-primary group-hover/card:text-black/40 mt-6",
    },
];

export const impacts: ImpactCard[] = [
    { title: "Calidad controlada", description: "Controlamos materiales, dosificación, compactación, curado, resistencia y dimensiones para asegurar uniformidad y desempeño estructural.", image: imgPlantaTratamiento, imageAlt: "Control técnico de estructuras de hormigón" },
    { title: "Seguridad", description: "La instalación, el tensado y la inyección se ejecutan con procedimientos controlados, equipos calibrados y personal técnicamente capacitado.", image: imgTensadoViga, imageAlt: "Operación controlada de tensado estructural" },
    { title: "Durabilidad", description: "El presfuerzo controla deformaciones y fisuras, mientras que la protección de tendones y anclajes favorece una mayor vida útil.", image: imgHormigonPretensado, imageAlt: "Elemento durable de hormigón pretensado" },
    { title: "Eficiencia estructural", description: "Las soluciones pretensadas y postensadas permiten mayores luces, secciones esbeltas, menor peso propio y menos apoyos intermedios.", image: imgVigaBulbT, imageAlt: "Viga pretensada de alta eficiencia estructural" },
    { title: "Precisión industrial", description: "La fabricación en planta y los moldes modulares mejoran los acabados, la repetibilidad y la rapidez de montaje en obra.", image: imgNaveIndustrial, imageAlt: "Fabricación industrial de elementos prefabricados" },
    { title: "Soluciones a medida", description: "Adaptamos dimensiones, refuerzos, conexiones y procesos a las condiciones estructurales, geotécnicas y arquitectónicas del proyecto.", image: imgHormigonArmado, imageAlt: "Solución de hormigón adaptada a un proyecto" },
    { title: "Construcción sostenible", description: "Optimizamos el consumo de hormigón y acero, reducimos trabajos húmedos en obra y desarrollamos estructuras resistentes y duraderas.", image: imgHormigonPostensado, imageAlt: "Estructura eficiente de hormigón postensado" },
];
import type { ImageMetadata } from "astro";
import imgPlantaTratamiento from "@/assets/images/projects/planta_de_tratamiento_de_agua_potable.avif";
import imgTensadoViga from "@/assets/images/projects/destacado_tensado_viga_postensada.avif";
import imgHormigonPretensado from "@/assets/images/projects/nuestros_servicios_hormigon_prestensado_1.avif";
import imgVigaBulbT from "@/assets/images/projects/destacado_viga_pretensada_bulb_t_2.avif";
import imgNaveIndustrial from "@/assets/images/projects/nave_industrial_prefabricada.avif";
import imgHormigonArmado from "@/assets/images/projects/nuestros_servicios_hormigon_armado_proyecto_3.avif";
import imgHormigonPostensado from "@/assets/images/projects/nuestros_servicios_hormigon_postensado_proyecto_2.avif";
