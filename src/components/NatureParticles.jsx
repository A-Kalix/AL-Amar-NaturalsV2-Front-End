import { useEffect, useState, useMemo } from "react";

const NatureParticles = ({ count = 12 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -30,
      duration: 20 + Math.random() * 15,
      size: 40 + Math.random() * 80, // Much larger for editorial feel
      rotation: Math.random() * 360,
      sway: 30 + Math.random() * 60,
      blur: Math.random() * 4,
      type: i % 2 === 0 ? "leaf" : "mote",
    }));
  }, [count]);

  return (
    <div
      className="nature-particles-container"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="nature-particle particle-${p.type"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: `blur(${p.blur}px)`,
            "--sway-amount": `${p.sway}px`,
            "--start-rotation": `${p.rotation}deg`,
          }}
        >
          {p.type === "leaf" ? (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21,11C21,11 12.8,11 10,13.2C7.2,15.4 6.1,21.4 6.1,21.4L8,22L9,20C10,20.2 11,20.4 12,20.4C16,20.4 21,11 21,11M16,2C16,2 14,3 12,5C10,7 9,10 9,10C9,10 7,13 6,15C5,17 7,19 7,19C7,19 9.5,17 11,16C12.5,15 13,13 13,13C13,13 15,10 16,8C17,6 16,2 16,2Z" />
            </svg>
          ) : (
            <div className="nature-mote" />
          )}
        </div>
      ))}
    </div>
  );
};

export default NatureParticles;
