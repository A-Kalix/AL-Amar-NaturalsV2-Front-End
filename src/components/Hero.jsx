import { HERO_COPY, HERO_ASSETS } from "@/constants";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const primaryVideoRef = useRef(null);
  const secondaryVideoRef = useRef(null);
  const activeVideoRef = useRef("primary");
  const transitionTimerRef = useRef(null);
  const isCrossfadingRef = useRef(false);
  const [activeVideo, setActiveVideo] = useState("primary");

  useEffect(() => {
    const primaryVideo = primaryVideoRef.current;
    const secondaryVideo = secondaryVideoRef.current;
    if (!primaryVideo || !secondaryVideo) return;

    let animationFrame;
    const crossfadeDuration = 1150;

    const setNormalPlayback = (video) => {
      video.playbackRate = 1;
      video.muted = true;
    };

    const playVideo = (video) => {
      setNormalPlayback(video);
      const promise = video.play();
      if (promise) {
        promise.catch(() => {});
      }
    };

    const crossfadeToFreshStart = () => {
      if (isCrossfadingRef.current) return;

      const nextActiveVideo =
        activeVideoRef.current === "primary" ? "secondary" : "primary";
      const currentVideo =
        activeVideoRef.current === "primary" ? primaryVideo : secondaryVideo;
      const nextVideo =
        nextActiveVideo === "primary" ? primaryVideo : secondaryVideo;

      isCrossfadingRef.current = true;
      nextVideo.currentTime = 0;
      playVideo(nextVideo);
      setActiveVideo(nextActiveVideo);

      transitionTimerRef.current = window.setTimeout(() => {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        activeVideoRef.current = nextActiveVideo;
        isCrossfadingRef.current = false;
      }, crossfadeDuration);
    };

    const monitorLoopPoint = () => {
      const video =
        activeVideoRef.current === "primary" ? primaryVideo : secondaryVideo;
      const hasDuration = Number.isFinite(video.duration) && video.duration > 0;

      if (hasDuration && video.duration - video.currentTime < 1.15) {
        crossfadeToFreshStart();
      }

      animationFrame = window.requestAnimationFrame(monitorLoopPoint);
    };

    setNormalPlayback(primaryVideo);
    setNormalPlayback(secondaryVideo);
    playVideo(primaryVideo);
    animationFrame = window.requestAnimationFrame(monitorLoopPoint);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  return (
    <section
      className="hero-section"
      id="home"
    >
      <div className="hero-media">
        <video
          ref={primaryVideoRef}
          className={
            activeVideo === "primary"
              ? "hero-video hero-video-active"
              : "hero-video"
          }
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source
            src={HERO_ASSETS.video}
            type="video/mp4"
          />
        </video>
        <video
          ref={secondaryVideoRef}
          className={
            activeVideo === "secondary"
              ? "hero-video hero-video-active"
              : "hero-video"
          }
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src={HERO_ASSETS.video}
            type="video/mp4"
          />
        </video>
        <div className="hero-veil" />
      </div>

      <div className="hero-copy">
        <span className="hero-kicker">Organic + Natural</span>
        <h1 className="hero-title">{HERO_COPY.headline}</h1>
        <p className="hero-subtitle">{HERO_COPY.subheadline}</p>
        <a
          href="#products"
          className="hero-action"
        >
          {HERO_COPY.ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
