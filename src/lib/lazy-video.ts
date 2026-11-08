/**
 * Videos decorativos de fondo (`data-lazy-video`) que no deben competir con el contenido principal.
 * En el HTML van sin autoplay y con preload="none"; aquí se reproducen cuando la página ya terminó
 * de cargar y el video está en pantalla. Con reduced motion no se descargan.
 */

let observer: IntersectionObserver | null = null;

export const destroyLazyVideos = () => {
    observer?.disconnect();
    observer = null;
};

const observeVideos = () => {
    const current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target as HTMLVideoElement;
            // Si el navegador bloquea la reproducción (p. ej. ahorro de batería) se queda la imagen de fondo.
            if (entry.isIntersecting) video.play().catch(() => {});
            else video.pause();
        });
    });
    observer = current;

    document
        .querySelectorAll<HTMLVideoElement>("video[data-lazy-video]")
        .forEach((video) => current.observe(video));
};

export const initializeLazyVideos = () => {
    destroyLazyVideos();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Esperar al evento load deja que imágenes, fuentes y JS del primer pintado se descarguen primero.
    if (document.readyState === "complete") observeVideos();
    else window.addEventListener("load", observeVideos, { once: true });
};
