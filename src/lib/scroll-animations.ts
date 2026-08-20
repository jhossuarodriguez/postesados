import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let animationFrame: number | null = null;
let animationContext: gsap.Context | null = null;

const getRevealOffset = (element: HTMLElement) => {
    switch (element.dataset.reveal) {
        case "left":
            return { x: -32, y: 0 };
        case "right":
            return { x: 32, y: 0 };
        case "down":
            return { x: 0, y: -28 };
        default:
            return { x: 0, y: 28 };
    }
};

const revealDirections = [
    { x: -40, y: 0 },
    { x: 40, y: 0 },
    { x: 0, y: -32 },
    { x: 0, y: 32 },
];

export const initializeScrollAnimations = () => {
    destroyScrollAnimations();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({
        duration: 2,
        smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
        lenis?.raf(time);
        animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);

    animationContext = gsap.context(() => {
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.fromTo(
                element,
                { autoAlpha: 0, ...getRevealOffset(element) },
                {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: { trigger: element, start: "top 86%", once: true },
                },
            );
        });

        document
            .querySelectorAll<HTMLElement>("[data-reveal-children]")
            .forEach((container, index) => {
                const children = Array.from(container.children);
                if (children.length === 0) return;
                const isGrid = container.classList.contains("grid");
                const offset = isGrid
                    ? { x: 0, y: 32 }
                    : revealDirections[index % revealDirections.length];

                gsap.fromTo(
                    children,
                    { autoAlpha: 0, ...offset },
                    {
                        autoAlpha: 1,
                        x: 0,
                        y: 0,
                        duration: isGrid ? 1.1 : 0.35,
                        ease: isGrid
                            ? "cubic-bezier(0.22, 1, 0.36, 1)"
                            : "power3.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 88%",
                            once: true,
                        },
                    },
                );
            });
    });

    ScrollTrigger.refresh();
};

export const destroyScrollAnimations = () => {
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lenis?.destroy();
    lenis = null;
    animationContext?.revert();
    animationContext = null;
};
