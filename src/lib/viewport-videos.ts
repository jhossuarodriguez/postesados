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
        const sources = Array.from(
            video?.querySelectorAll<HTMLSourceElement>("source[data-video-src]") ?? [],
        );
        const src = sources[0]?.dataset.videoSrc;

        if (!video || !button || !poster || !src) return [];
        return [{ container, video, button, sources, src, inViewport: false }];
    });

    if (players.length === 0) return;

    const staticMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
        connection?: EventTarget & { saveData?: boolean };
    }).connection;
    const controller = new AbortController();
    const { signal } = controller;

    const updatePlayback = () => {
        const allowed = !staticMedia.matches && !connection?.saveData;
        const activePlayer = allowed && !document.hidden
            ? players.find((player) => player.inViewport && !manuallyPaused.has(player.src))
            : undefined;

        players.forEach((player) => {
            const { video, button, sources } = player;
            button.hidden = !allowed;

            if (player !== activePlayer) video.pause();
            if (!allowed) {
                video.hidden = true;
                if (sources.some((source) => source.hasAttribute("src"))) {
                    sources.forEach((source) => source.removeAttribute("src"));
                    video.load();
                }
                return;
            }
            if (player !== activePlayer) return;

            // Let the browser select a supported format, only when in view.
            if (!sources[0].hasAttribute("src")) {
                sources.forEach((source) => {
                    source.src = source.dataset.videoSrc!;
                });
                video.muted = true;
                video.load();
            }
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
        // Keep the cover image visible until playback actually starts, including
        // when a mobile browser blocks autoplay. Both layers use object-cover.
        video.addEventListener("playing", () => {
            video.hidden = false;
        }, { signal });
        video.addEventListener("error", () => {
            video.hidden = true;
            updateButton();
        }, { signal });
        updateButton();
        observer.observe(container);
    });

    staticMedia.addEventListener("change", updatePlayback, { signal });
    connection?.addEventListener("change", updatePlayback, { signal });
    document.addEventListener("visibilitychange", updatePlayback, { signal });
    updatePlayback();

    cleanupVideos = () => {
        observer.disconnect();
        controller.abort();
        players.forEach(({ video, sources }) => {
            video.pause();
            video.hidden = true;
            if (sources.some((source) => source.hasAttribute("src"))) {
                sources.forEach((source) => source.removeAttribute("src"));
                video.load();
            }
        });
    };
};
