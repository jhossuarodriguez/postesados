/**
 * Reveal al hacer scroll: los elementos aparecen (fade + subida) al entrar en pantalla.
 * - `data-reveal` anima el propio elemento.
 * - `data-reveal-children` anima cada hijo directo (grillas, listas de tarjetas).
 * Los que entran a la vez se escalonan en orden. Los estilos están en global.css.
 */

const STAGGER_MS = 60;
const MAX_STAGGER_STEPS = 4;

let observer: IntersectionObserver | null = null;

export const destroyReveal = () => {
    observer?.disconnect();
    observer = null;
};

export const initializeReveal = () => {
    destroyReveal();

    // Sin la clase (JS no ejecutado o reduced motion) todo se muestra sin animación.
    if (!document.documentElement.classList.contains("js-reveal")) return;

    const current = new IntersectionObserver(
        (entries) => {
            entries
                .filter((entry) => entry.isIntersecting)
                .forEach((entry, i) => {
                    const el = entry.target as HTMLElement;
                    const delay = Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS;
                    current.unobserve(el);
                    // animation-delay no se hereda: solo recalcula el estilo de este elemento.
                    if (delay) el.style.animationDelay = `${delay}ms`;
                    el.dataset.revealed = "";
                });
        },
        // Se activa un poco antes de entrar en pantalla: al llegar, el elemento ya está apareciendo.
        { rootMargin: "0px 0px 10% 0px" },
    );
    observer = current;

    document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-children] > *")
        .forEach((el) => current.observe(el));
};
