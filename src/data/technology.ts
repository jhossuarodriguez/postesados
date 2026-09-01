export interface Technology {
    title: string;
    description: string;
    image: ImageMetadata;
    imageAlt: string;
}

export const technologies: Technology[] = [
    { title: "Pretensado industrial", description: "Los torones se tensan antes del vaciado y transfieren su fuerza por adherencia cuando el hormigón alcanza la resistencia requerida.", image: imgHormigonPretensado, imageAlt: "Fabricación de un elemento de hormigón pretensado" },
    { title: "Postensado adherente", description: "Los tendones se alojan en ductos, se tensan después del endurecimiento y se integran a la sección mediante lechada cementicia.", image: imgTensadoViga, imageAlt: "Tensado de tendones en un sistema adherente" },
    { title: "Postensado sin adherencia", description: "Tendones individuales protegidos con grasa y funda plástica transmiten el presfuerzo a la losa mediante anclajes en sus extremos.", image: imgHormigonPostensado, imageAlt: "Tendones para una losa postensada sin adherencia" },
    { title: "Moldes industriales", description: "Moldes modulares resistentes al uso continuo permiten reducir tiempos de producción y obtener dimensiones uniformes y excelentes acabados.", image: imgNaveIndustrial, imageAlt: "Producción industrial de elementos prefabricados" },
    { title: "Tensado controlado", description: "Gatos hidráulicos y manómetros calibrados permiten controlar la fuerza aplicada y comprobar los alargamientos reales de cada tendón.", image: imgGatosHidraulicos, imageAlt: "Gato hidráulico utilizado para tensar torones" },
    { title: "Inyección especializada", description: "Equipos de mezcla e inyección aseguran continuidad, presión controlada y llenado completo de los ductos sin vacíos ni segregación.", image: imgInyeccion, imageAlt: "Equipo para inyección de lechada de postensado" },
    { title: "Control de producción", description: "La dosificación, compactación, curado, resistencia, trazabilidad y precisión dimensional se verifican durante la fabricación y ejecución.", image: imgPlantaTratamiento, imageAlt: "Supervisión técnica de elementos de hormigón" },
];
import type { ImageMetadata } from "astro";
import imgHormigonPretensado from "@/assets/images/projects/nuestros_servicios_hormigon_prestensado_1.avif";
import imgTensadoViga from "@/assets/images/projects/destacado_tensado_viga_postensada.avif";
import imgHormigonPostensado from "@/assets/images/projects/nuestros_servicios_hormigon_postensado_proyecto_2.avif";
import imgNaveIndustrial from "@/assets/images/projects/nave_industrial_prefabricada.avif";
import imgGatosHidraulicos from "@/assets/images/projects/nuestros_servicios_gatos_hidraulicos_para_pretensar_3.avif";
import imgInyeccion from "@/assets/images/projects/inyeccion_de_lechada_de_cementicia.avif";
import imgPlantaTratamiento from "@/assets/images/projects/planta_de_tratamiento_de_agua_potable.avif";
