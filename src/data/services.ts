import type { ImageMetadata } from "astro";

import imgEncofrado from "@/assets/images/service_section/puente-rio-cachon-encofrado-lateral.avif";
import imgMontaje from "@/assets/images/service_section/montaje-losas-prefabricadas-camion.avif";
import imgAcueducto from "@/assets/images/service_section/acueducto-vista-aerea-rio.avif";
import imgHormigonPostensado from "@/assets/images/projects/nuestros_servicios_hormigon_postensado_proyecto_2.avif";
import imgHormigonArmado from "@/assets/images/projects/nuestros_servicios_hormigon_armado_proyecto_3.avif";
import imgTetrapodos from "@/assets/images/projects/tetrapodos_rompeolas_san_pedro_macoris.avif";
import imgPretensado from "@/assets/images/projects/nuestros_servicios_hormigon_prestensado_1.avif";
import imgInyeccion from "@/assets/images/projects/inyeccion_de_lechada_de_cementicia.avif";
import imgTensado from "@/assets/images/projects/destacado_tensado_viga_postensada.avif";
import imgEquipos from "@/assets/images/projects/nuestros_servicios_gatos_hidraulicos_para_pretensar_3.avif";

export interface Service {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata;
    imageAlt: string;
    overview: string;
    applications: string[];
    considerations: string[];
    related: string[];
}

export const services: Service[] = [
    {
        id: "postesado", title: "Postensado estructural",
        description: "Diseño, instalación y tensado de sistemas adherentes y sin adherencia para losas, vigas, puentes y estructuras de grandes luces.",
        image: imgHormigonPostensado, imageAlt: "Estructura de hormigón postensado",
        overview: "En el postensado, los tendones de acero se tensan después de que el hormigón alcanza la resistencia requerida. El presfuerzo introduce compresión en el elemento para controlar deformaciones y fisuras. Los sistemas adherentes incorporan ductos e inyección de lechada; los sistemas sin adherencia utilizan tendones protegidos que transmiten la fuerza mediante anclajes en sus extremos.",
        applications: ["Losas y vigas de grandes luces", "Puentes y viaductos", "Edificaciones con espacios amplios y menos apoyos"],
        considerations: ["Selección del sistema según el comportamiento estructural previsto.", "Coordinación del trazado de tendones, anclajes y secuencia de tensado.", "Verificación de la resistencia del hormigón, presión y alargamientos antes de completar la operación."],
        related: ["tensado", "inyeccion", "losas"],
    },
    {
        id: "pretensado", title: "Hormigón pretensado",
        description: "Elementos de hormigón pretensado con torones tensados antes del vaciado para vigas, losas y soluciones prefabricadas de infraestructura.",
        image: imgPretensado, imageAlt: "Elementos estructurales de hormigón pretensado",
        overview: "El pretensado se realiza tensando los torones antes del vaciado del hormigón. Cuando el material alcanza la resistencia necesaria, la fuerza se transfiere al elemento por adherencia. A diferencia del postensado, esta secuencia está ligada a la fabricación del elemento y permite producir piezas con geometría y condiciones de curado controladas.",
        applications: ["Vigas AASHTO y Bulb-T", "Vigas doble T y losas alveolares", "Elementos prefabricados para infraestructura y edificación"],
        considerations: ["Definición de luces, cargas y sección del elemento.", "Control de dosificación, compactación, curado y resistencia de transferencia.", "Previsión de las condiciones de transporte, izaje y montaje desde el diseño."],
        related: ["prefabricados", "puentes", "estructuras-combinadas"],
    },
    {
        id: "inyeccion", title: "Inyección de lechada",
        description: "Llenado controlado de ductos de postensado para crear adherencia, transferir esfuerzos y proteger los torones frente a la humedad y la corrosión.",
        image: imgInyeccion, imageAlt: "Inyección de lechada cementicia en un sistema de postensado",
        overview: "La inyección de lechada forma parte de los sistemas de postensado adherente. Tras el tensado, el llenado de los ductos integra los tendones a la sección y contribuye a su protección. El proceso requiere continuidad de la mezcla y control del llenado para evitar vacíos que comprometan la adherencia o la durabilidad del sistema.",
        applications: ["Ductos de sistemas de postensado adherente", "Vigas postensadas", "Estructuras de puentes con tendones adherentes"],
        considerations: ["Compatibilidad de la lechada con los ductos y componentes del sistema.", "Control de mezcla, presión y continuidad de la inyección.", "Revisión de los puntos de entrada y salida para comprobar el llenado previsto."],
        related: ["postesado", "tensado", "suministro"],
    },
    {
        id: "suministro", title: "Suministro de sistemas",
        description: "Torones, cuñas, placas de anclaje, ductos y equipos hidráulicos técnicamente compatibles para sistemas de pretensado y postensado.",
        image: imgEquipos, imageAlt: "Equipos hidráulicos para sistemas de presfuerzo",
        overview: "Un sistema de presfuerzo depende de la compatibilidad entre acero, anclajes, ductos y equipos. El suministro comprende torones de alta resistencia, cables recubiertos HDPE y componentes de anclaje, junto con soporte técnico para las operaciones de tensado e inyección. La selección debe responder al sistema estructural y a la configuración requerida, no solo a la dimensión de una pieza.",
        applications: ["Sistemas de pretensado y postensado", "Anclajes con configuraciones de tres y siete torones", "Equipos para tensado e inyección"],
        considerations: ["Identificación del tipo de tendón y protección requerida.", "Compatibilidad entre cabezal, cuñas, placa y refuerzo de confinamiento.", "Selección del equipo hidráulico conforme a la fuerza y operación previstas."],
        related: ["postesado", "pretensado", "tensado"],
    },
    {
        id: "prefabricados", title: "Elementos prefabricados",
        description: "Fabricación de pilotes, vigas AASHTO y Bulb-T, vigas doble T, losas alveolares, gradas y elementos especiales a la medida del proyecto.",
        image: imgMontaje, imageAlt: "Montaje de losas prefabricadas de hormigón",
        overview: "La prefabricación permite producir elementos de hormigón bajo condiciones controladas y trasladarlos a obra para su montaje. Los moldes industriales favorecen dimensiones uniformes y repetibilidad. El diseño de la pieza debe considerar tanto su función en la estructura terminada como las etapas de manipulación, transporte y colocación.",
        applications: ["Pilotes y vigas para infraestructura", "Losas alveolares, vigas doble T y gradas", "Elementos especiales ajustados al proyecto"],
        considerations: ["Definición de dimensiones, refuerzos y conexiones.", "Control de resistencia, curado y precisión dimensional durante la producción.", "Coordinación de accesos, transporte e izaje antes del montaje."],
        related: ["pretensado", "infraestructura", "estructuras-combinadas"],
    },
    {
        id: "tensado", title: "Tensado hidráulico",
        description: "Aplicación y control de la fuerza de presfuerzo con gatos hidráulicos, equipos calibrados y verificación de presión y alargamientos.",
        image: imgTensado, imageAlt: "Tensado hidráulico de una viga postensada",
        overview: "El tensado aplica al acero la fuerza de presfuerzo definida para el elemento. La presión registrada por el equipo y el alargamiento del tendón son controles complementarios: ambos permiten evaluar la operación frente a lo previsto en el diseño. La secuencia de trabajo cambia según se trate de pretensado o postensado.",
        applications: ["Torones de elementos pretensados", "Tendones de vigas y losas postensadas", "Sistemas de anclaje activo"],
        considerations: ["Uso de gatos hidráulicos y manómetros calibrados.", "Verificación de las condiciones necesarias del elemento antes de tensar.", "Registro y comparación de presión y alargamientos con los valores del proyecto."],
        related: ["postesado", "pretensado", "anclajes-activos"],
    },
    {
        id: "hormigon-armado", title: "Hormigón armado",
        description: "Elementos estructurales y prefabricados que combinan la resistencia a compresión del concreto con la capacidad a tracción del acero de refuerzo.",
        image: imgHormigonArmado, imageAlt: "Proyecto estructural de hormigón armado",
        overview: "El hormigón armado combina materiales con comportamientos complementarios: el concreto resiste principalmente compresión y el acero de refuerzo contribuye a resistir tracción. Puede emplearse en piezas prefabricadas y en soluciones integradas con elementos presforzados. La disposición del refuerzo y las conexiones responden a las cargas y condiciones particulares de la estructura.",
        applications: ["Elementos estructurales de edificación", "Piezas prefabricadas para infraestructura", "Estructuras que combinan hormigón armado y presforzado"],
        considerations: ["Diseño del refuerzo y de las conexiones según las cargas.", "Control de compactación, curado y resistencia del hormigón.", "Revisión de dimensiones y protección del acero para favorecer la durabilidad."],
        related: ["prefabricados", "infraestructura", "estructuras-combinadas"],
    },
    {
        id: "puentes", title: "Puentes y viaductos",
        description: "Soluciones pretensadas y postensadas para puentes y viaductos con mayores luces y menos apoyos intermedios en República Dominicana.",
        image: imgAcueducto, imageAlt: "Vista aérea de infraestructura de acueducto sobre un río",
        overview: "El hormigón presforzado permite abordar luces amplias y limitar apoyos intermedios, una consideración importante al cruzar cauces o zonas de difícil acceso. Las vigas pretensadas y los sistemas postensados ofrecen alternativas cuya elección depende de la geometría, las cargas y la estrategia constructiva. La prefabricación también permite organizar parte de la producción fuera del área de montaje.",
        applications: ["Puentes y viaductos", "Cruces de cauces e infraestructura de acueductos", "Vigas prefabricadas AASHTO y Bulb-T"],
        considerations: ["Evaluación de luces, apoyos y condiciones de acceso.", "Coordinación del transporte y montaje de vigas.", "Integración del tensado y las conexiones con la secuencia constructiva."],
        related: ["pretensado", "postesado", "prefabricados"],
    },
    {
        id: "losas", title: "Losas de grandes luces",
        description: "Losas postensadas para hoteles, villas, torres y estacionamientos que requieren flexibilidad arquitectónica y secciones esbeltas.",
        image: imgHormigonPostensado, imageAlt: "Losa estructural de hormigón postensado",
        overview: "Las losas postensadas permiten distribuir los apoyos para responder a espacios que necesitan amplitud y flexibilidad de uso. El presfuerzo ayuda a controlar deformaciones y fisuración sin depender únicamente del aumento de espesor. La solución requiere coordinar arquitectura, estructura y trazado de tendones desde las etapas de diseño.",
        applications: ["Hoteles y villas", "Torres y estacionamientos", "Espacios con menos apoyos intermedios"],
        considerations: ["Definición de luces, cargas y límites de deformación.", "Coordinación de aberturas e instalaciones con los tendones y anclajes.", "Selección del sistema adherente o sin adherencia según el proyecto."],
        related: ["postesado", "tensado", "suministro"],
    },
    {
        id: "infraestructura", title: "Infraestructura prefabricada",
        description: "Box culverts, barreras New Jersey y muros de contención tipo L fabricados bajo condiciones controladas para agilizar su instalación en obra.",
        image: imgHormigonArmado, imageAlt: "Elementos de hormigón para infraestructura",
        overview: "Los elementos prefabricados de infraestructura permiten organizar la producción de piezas repetitivas y reducir trabajos húmedos en obra. Las soluciones incluyen elementos de drenaje, separación vial y contención. Cada familia cumple una función distinta, por lo que las dimensiones, cargas y conexiones deben definirse conforme a las condiciones de instalación.",
        applications: ["Box culverts para obras de drenaje", "Barreras New Jersey", "Muros de contención tipo L"],
        considerations: ["Revisión de dimensiones, cargas y condiciones de apoyo.", "Coordinación de juntas, conexiones y disposición de las piezas.", "Planificación de transporte y colocación para mantener la continuidad de la obra."],
        related: ["prefabricados", "hormigon-armado", "puentes"],
    },
    {
        id: "proteccion-costera", title: "Protección costera",
        description: "Tetrápodos de hormigón para protección costera, dimensionados según el oleaje, la profundidad y las condiciones de cada proyecto marítimo.",
        image: imgTetrapodos, imageAlt: "Tetrápodos rompeolas en San Pedro de Macorís",
        overview: "Los tetrápodos son elementos de hormigón utilizados en obras de protección costera. Su geometría y disposición contribuyen a disipar la energía del oleaje. No existe un tamaño único aplicable a cualquier costa: el dimensionamiento y la colocación dependen del análisis de las condiciones marítimas y de la configuración de la obra.",
        applications: ["Obras de protección costera", "Rompeolas con elementos de hormigón", "Infraestructura marítima expuesta al oleaje"],
        considerations: ["Evaluación del oleaje, profundidad y pendiente de la obra.", "Definición del tamaño y disposición de los elementos a partir del proyecto marítimo.", "Control de fabricación y planificación de manipulación y colocación."],
        related: ["prefabricados", "hormigon-armado", "infraestructura"],
    },
    {
        id: "anclajes-activos", title: "Anclajes activos",
        description: "Sistemas para estabilizar taludes, excavaciones y muros mediante tendones tensionados que transmiten cargas a estratos resistentes.",
        image: imgEncofrado, imageAlt: "Trabajos estructurales junto al puente del río Cachón",
        overview: "Los anclajes activos introducen una fuerza mediante tendones tensionados y la transfieren a una zona resistente del terreno. Su función es contribuir a la estabilidad de la estructura o masa que se necesita contener. La solución exige considerar conjuntamente la respuesta del terreno, la geometría del anclaje y la fuerza aplicada.",
        applications: ["Estabilización de taludes", "Contención de excavaciones", "Muros que requieren anclajes tensionados"],
        considerations: ["Evaluación de las condiciones geotécnicas y del estrato de anclaje.", "Definición de cargas, geometría y protección del tendón.", "Control de la operación de tensado conforme al diseño del sistema."],
        related: ["tensado", "suministro", "hormigon-armado"],
    },
    {
        id: "estructuras-combinadas", title: "Estructuras combinadas",
        description: "Integración de hormigón pretensado, hormigón armado, elementos prefabricados y estructuras metálicas para optimizar materiales y montaje.",
        image: imgMontaje, imageAlt: "Montaje de elementos prefabricados en una estructura",
        overview: "Una estructura combinada aprovecha distintos sistemas en un mismo proyecto, asignando a cada material una función acorde con su comportamiento. La integración de piezas prefabricadas, hormigón armado, elementos pretensados y acero requiere resolver sus conexiones y la forma en que transfieren cargas. La coordinación del montaje es tan importante como el diseño de las piezas individuales.",
        applications: ["Edificaciones con sistemas mixtos", "Naves y estructuras con componentes prefabricados", "Proyectos que integran hormigón y acero estructural"],
        considerations: ["Definición de la función estructural de cada sistema.", "Compatibilidad de conexiones, tolerancias y transferencia de cargas.", "Coordinación de fabricación, transporte y secuencia de montaje."],
        related: ["prefabricados", "pretensado", "hormigon-armado"],
    },
];
