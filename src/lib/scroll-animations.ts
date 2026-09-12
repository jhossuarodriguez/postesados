import type Lenis from "lenis";
import { inView, scroll, type AnimationPlaybackControls } from "motion";
import { animate } from "motion/mini";

let lenis: Lenis | null = null;
let animationFrame: number | null = null;
let scheduleFrame: number | null = null;
let startTimeout: number | null = null;
let idleCallback: number | null = null;
let loadHandler: (() => void) | null = null;
let initializationId = 0;
let animationCleanups: VoidFunction[] = [];
let motionAnimations: AnimationPlaybackControls[] = [];
let animatedElements = new Map<HTMLElement, { opacity: string; transform: string }>();

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

const toTransform = ({ x, y }: { x: number; y: number }) =>
    `translate3d(${x}px, ${y}px, 0)`;

const prepareElements = (
    elements: HTMLElement[],
    offset: { x: number; y: number },
) => {
    const transform = toTransform(offset);
    elements.forEach((element) => {
        if (!animatedElements.has(element)) {
            animatedElements.set(element, { opacity: element.style.opacity, transform: element.style.transform });
        }
        element.style.opacity = "0";
        element.style.transform = transform;
    });
};

const revealElements = (
    elements: HTMLElement[],
    offset: { x: number; y: number },
    duration: number,
) => {
    const animation = animate(
        elements,
        {
            opacity: [0, 1],
            transform: [toTransform(offset), "translate3d(0, 0, 0)"],
        },
        { duration, ease: "easeOut" },
    );
    motionAnimations.push(animation);
};

const startLenis = async (id: number) => {
    if (id !== initializationId) return;
    const module = await import("lenis").catch(() => null);
    if (!module) return;
    const { default: Lenis } = module;
    if (id !== initializationId) return;

    lenis = new Lenis({ duration: 1.8, smoothWheel: true, anchors: true });

    const update = (time: number) => {
        lenis?.raf(time);
        animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
};

const scheduleLenis = (id: number) => {
    const scheduleStart = () => {
        startTimeout = window.setTimeout(() => {
            if (typeof requestIdleCallback === "function") {
                idleCallback = requestIdleCallback(() => void startLenis(id), {
                    timeout: 2000,
                });
            } else {
                void startLenis(id);
            }
        }, 200);
    };

    if (document.readyState === "complete") {
        scheduleFrame = requestAnimationFrame(scheduleStart);
        return;
    }

    loadHandler = scheduleStart;
    window.addEventListener("load", loadHandler, { once: true });
};

export const initializeScrollAnimations = () => {
    destroyScrollAnimations();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.addEventListener("change", initializeScrollAnimations);
    animationCleanups.push(() => reducedMotion.removeEventListener("change", initializeScrollAnimations));
    if (reducedMotion.matches || !("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    // Keyboard users must never focus a link whose reveal is still waiting for scroll.
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Tab") destroyScrollAnimations();
    };
    document.addEventListener("keydown", onKeyDown);
    animationCleanups.push(() => document.removeEventListener("keydown", onKeyDown));

    const id = initializationId;
    const wantsSmoothScroll = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
    ).matches;
    if (wantsSmoothScroll) scheduleLenis(id);

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        // Do not hide initial-viewport content (LCP), restored scroll positions or anchor targets.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        const offset = getRevealOffset(element);
        prepareElements([element], offset);
        animationCleanups.push(
            inView(
                element,
                () => revealElements([element], offset, 0.7),
                { margin: `0px 0px ${-Math.round(window.innerHeight * 0.14)}px 0px` },
            ),
        );
    });

    document
        .querySelectorAll<HTMLElement>("[data-reveal-children]")
        .forEach((container, index) => {
            if (container.getBoundingClientRect().top < window.innerHeight) return;
            const children = Array.from(container.children).filter(
                (child): child is HTMLElement => child instanceof HTMLElement,
            );
            if (children.length === 0) return;

            const isGrid = container.classList.contains("grid");
            const offset = isGrid
                ? { x: 0, y: 20 }
                : revealDirections[index % revealDirections.length];
            prepareElements(children, offset);

            if (isGrid) {
                const animation = animate(
                    children,
                    {
                        opacity: [0, 1],
                        transform: [
                            toTransform(offset),
                            "translate3d(0, 0, 0)",
                        ],
                    },
                    { duration: 1, ease: "linear", autoplay: false },
                );
                motionAnimations.push(animation);
                let stopScroll: VoidFunction = () => {};
                stopScroll = scroll((progress: number) => {
                    animation.time = progress;
                    // Preserve the original one-shot scrub: never hide a completed grid again.
                    if (progress >= 1) queueMicrotask(() => stopScroll());
                }, {
                        target: container,
                        offset: ["start 98%", "start 78%"],
                });
                animationCleanups.push(stopScroll);
                return;
            }

            animationCleanups.push(
                inView(
                    container,
                    () => revealElements(children, offset, 0.35),
                    { margin: `0px 0px ${-Math.round(window.innerHeight * 0.12)}px 0px` },
                ),
            );
        });
};

export const destroyScrollAnimations = () => {
    initializationId += 1;

    if (loadHandler) window.removeEventListener("load", loadHandler);
    loadHandler = null;

    if (scheduleFrame !== null) cancelAnimationFrame(scheduleFrame);
    scheduleFrame = null;

    if (startTimeout !== null) window.clearTimeout(startTimeout);
    startTimeout = null;

    if (idleCallback !== null && typeof cancelIdleCallback === "function") {
        cancelIdleCallback(idleCallback);
    }
    idleCallback = null;

    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lenis?.destroy();
    lenis = null;

    animationCleanups.forEach((cleanup) => cleanup());
    animationCleanups = [];
    motionAnimations.forEach((animation) => animation.cancel());
    motionAnimations = [];
    animatedElements.forEach((styles, element) => {
        element.style.opacity = styles.opacity;
        element.style.transform = styles.transform;
    });
    animatedElements.clear();
};
