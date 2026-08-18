let videoObserver: IntersectionObserver | null = null;

export const initializeViewportVideos = () => {
    videoObserver?.disconnect();

    const videos = Array.from(
        document.querySelectorAll<HTMLVideoElement>("[data-viewport-video]"),
    );

    if (videos.length === 0) return;

    videos.forEach((video) => video.pause());

    videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target as HTMLVideoElement;

                if (!entry.isIntersecting) {
                    video.pause();
                    return;
                }

                videos.forEach((otherVideo) => {
                    if (otherVideo !== video) otherVideo.pause();
                });
                void video.play().catch(() => undefined);
            });
        },
        { threshold: 0.15 },
    );

    videos.forEach((video) => videoObserver?.observe(video));
};

export const destroyViewportVideos = () => {
    videoObserver?.disconnect();
    videoObserver = null;
};
