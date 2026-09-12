let cleanupVideos: (() => void) | null = null;
const manuallyPaused = new Set<string>();

export const destroyViewportVideos = () => {
    cleanupVideos?.();
    cleanupVideos = null;
};

export const initializeViewportVideos = () => {
    destroyViewportVideos();

    const players = Array.from(
        document.querySelectorAll<HTMLElement>("[data-video-container]"),
    ).flatMap((container) => {
        const video = container.querySelector<HTMLVideoElement>("[data-viewport-video]");
        const button = container.querySelector<HTMLButtonElement>("[data-video-toggle]");
        const poster = container.querySelector<HTMLImageElement>("[data-video-fallback]");
        const src = video?.dataset.videoSrc;

        if (!video || !button || !poster || !src) return [];
        return [{ container, video, button, poster, src, inViewport: false }];
    });

    if (players.length === 0) return;

    const staticMedia = window.matchMedia(
        "(prefers-reduced-motion: reduce), (max-width: 1023px), (hover: none), (pointer: coarse)",
    );
    const connection = (navigator as Navigator & {
        connection?: EventTarget & { saveData?: boolean };
    }).connection;
    const controller = new AbortController();
    const { signal } = controller;

    const updatePlayback = () => {
        if (document.readyState !== "complete") return;
        const allowed = !staticMedia.matches && !connection?.saveData;
        const activePlayer = allowed && !document.hidden
            ? players.find((player) => player.inViewport && !manuallyPaused.has(player.src))
            : undefined;

        players.forEach((player) => {
            const { video, button, poster, src } = player;
            button.hidden = !allowed;

            if (player !== activePlayer) video.pause();
            if (!allowed) {
                video.hidden = true;
                if (video.hasAttribute("src")) {
                    video.removeAttribute("src");
                    video.removeAttribute("poster");
                    video.load();
                }
                return;
            }
            if (player !== activePlayer) return;

            // Keep media URLs out of the loading path until playback is appropriate.
            if (!video.hasAttribute("src")) {
                video.poster = poster.currentSrc || poster.src;
                video.src = src;
            }
            video.hidden = false;
            if (video.paused) {
                void video.play().catch(() => {
                    button.textContent = "Reproducir video";
                });
            }
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const player = players.find((item) => item.container === entry.target);
                if (player) player.inViewport = entry.isIntersecting && entry.intersectionRatio >= 0.15;
            });
            updatePlayback();
        },
        { threshold: 0.15 },
    );

    players.forEach(({ container, video, button, src }) => {
        const updateButton = () => {
            button.textContent = video.paused ? "Reproducir video" : "Pausar video";
        };
        button.addEventListener("click", () => {
            if (video.paused) manuallyPaused.delete(src);
            else manuallyPaused.add(src);
            updatePlayback();
        }, { signal });
        video.addEventListener("play", updateButton, { signal });
        video.addEventListener("pause", updateButton, { signal });
        updateButton();
        observer.observe(container);
    });

    staticMedia.addEventListener("change", updatePlayback, { signal });
    connection?.addEventListener("change", updatePlayback, { signal });
    document.addEventListener("visibilitychange", updatePlayback, { signal });
    window.addEventListener("load", updatePlayback, { once: true, signal });
    updatePlayback();

    cleanupVideos = () => {
        observer.disconnect();
        controller.abort();
        players.forEach(({ video }) => {
            video.pause();
            video.hidden = true;
            if (video.hasAttribute("src")) {
                video.removeAttribute("src");
                video.removeAttribute("poster");
                video.load();
            }
        });
    };
};
