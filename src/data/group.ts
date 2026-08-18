export interface GroupCompany {
    name: string;
    eyebrow: string;
    description: string;
    services: string[];
    website: string;
    websiteLabel: string;
    image: string;
    imageAlt: string;
    accent: "blue" | "orange" | "red";
}

export const groupCompanies: GroupCompany[] = [
    {
        name: "Postesados JHP",
        eyebrow: "Hormigón presforzado y prefabricados",
        description:
            "Diseña, fabrica y suministra elementos de hormigón armado y pretensado, además de ejecutar sistemas de postensado para infraestructura, edificación y construcción industrial.",
        services: [
            "Pretensado y postensado",
            "Elementos prefabricados",
            "Tensado e inyección",
            "Suministro de sistemas",
        ],
        website: "/servicios",
        websiteLabel: "Conocer Postesados JHP",
        image: "/new/destacado_viga_pretensada_bulb_t_2.avif",
        imageAlt: "Viga pretensada Bulb-T de Postesados JHP",
        accent: "blue",
    },
    {
        name: "DR Drilling",
        eyebrow: "Ingeniería geotécnica",
        description:
            "Desarrolla soluciones para cimentaciones profundas, mejoramiento del terreno, sistemas de contención y estabilización de taludes, adaptadas a las condiciones geológicas y estructurales de cada proyecto.",
        services: [
            "Pilotes y micropilotes",
            "Anclajes estructurales",
            "Soil nailing y shotcrete",
            "Muros y sistemas de contención",
        ],
        website: "https://drdrilling.com.do/",
        websiteLabel: "Visitar DR Drilling",
        image: "https://drdrilling.com.do/storage/2026/08/grua_sobre_nosotros.avif",
        imageAlt: "Equipo especializado de ingeniería geotécnica de DR Drilling",
        accent: "red",
    },
    {
        name: "Tenax Construction",
        eyebrow: "Construcción y obras civiles",
        description:
            "Constructora dominicana dedicada a la administración, construcción, diseño y supervisión de obras civiles, con equipos especializados para ejecutar proyectos con eficiencia y precisión.",
        services: [
            "Estructuras de hormigón armado",
            "Estructuras metálicas",
            "Excavación y movimiento de tierras",
            "Naves y proyectos industriales",
        ],
        website: "https://tenaxconstruction.com.do/",
        websiteLabel: "Visitar Tenax Construction",
        image: "https://tenaxconstruction.com.do/images/banner3.webp",
        imageAlt: "Proyecto de construcción ejecutado por Tenax Construction",
        accent: "orange",
    },
];

export const integratedCapabilities = [
    {
        number: "01",
        title: "Terreno y cimentación",
        description:
            "Evaluación de las condiciones del terreno, excavación, estabilización y ejecución de cimentaciones superficiales o profundas.",
    },
    {
        number: "02",
        title: "Estructura",
        description:
            "Soluciones de hormigón armado, pretensado y postensado, estructuras metálicas y sistemas combinados para distintas escalas de proyecto.",
    },
    {
        number: "03",
        title: "Fabricación y montaje",
        description:
            "Producción controlada de elementos prefabricados, suministro de componentes especializados y montaje eficiente en obra.",
    },
];
