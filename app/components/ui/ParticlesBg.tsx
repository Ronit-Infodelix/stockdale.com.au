"use client";

import { useEffect, useCallback, useId, useRef, type ReactNode } from "react";

interface ParticlesBgProps {
  children?: ReactNode;
  /** Classes applied to the outer wrapper (size, padding, etc.) */
  className?: string;
  /** Background — any valid CSS value: hex, rgb, hsl, gradient, or a Tailwind class string.
   *  Pass a CSS value to `bg` or use `className` with Tailwind bg utilities.
   *  @example bg="#f9f9f9"  or  bg="linear-gradient(135deg,#014f3d,#013529)"
   */
  bg?: string;
  /** Particle dot colour */
  particleColor?: string;
  /** Connecting line colour */
  lineColor?: string;
  /** Stroke / accent colour on each dot */
  accentColor?: string;
  /** Number of particles (default 140) */
  count?: number;
  /** Particle speed (default 2) */
  speed?: number;
  /** Connection distance in px (default 160) */
  distance?: number;
}

declare global {
  interface Window {
    particlesJS: (id: string, config: object) => void;
    pJSDom?: { pJS: { fn: { vendors: { destroypJS: () => void } } } }[];
  }
}

function loadParticlesScript(): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById("particles-js-sdk")) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = "particles-js-sdk";
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export default function ParticlesBg({
  children,
  className,
  bg,
  particleColor = "#0277bd",
  lineColor = "#0288d1",
  accentColor = "#039be5",
  count = 140,
  speed = 2,
  distance = 160,
}: ParticlesBgProps) {
  const uid = useId().replace(/:/g, "");
  const containerId = `particles-${uid}`;
  const observerRef = useRef<MutationObserver | null>(null);

  const initParticles = useCallback(() => {
    if (typeof window === "undefined" || !window.particlesJS) return;

    window.particlesJS(containerId, {
      particles: {
        number: { value: count, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },
        shape: { type: "circle", stroke: { width: 0.5, color: accentColor } },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance,
          color: lineColor,
          opacity: 0.4,
          width: 1.2,
        },
        move: { enable: true, speed, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, [containerId, particleColor, lineColor, accentColor, count, speed, distance]);

  useEffect(() => {
    loadParticlesScript().then(() => {
      initParticles();
    });

    return () => {
      observerRef.current?.disconnect();
      // destroy this instance's canvas
      const canvas = document.querySelector(`#${containerId} canvas`);
      if (canvas) canvas.remove();
    };
  }, [initParticles, containerId]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Particles canvas layer */}
      <div
        id={containerId}
        className="absolute inset-0"
        style={bg ? { background: bg } : undefined}
      />
      {/* Children sit above the canvas */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
