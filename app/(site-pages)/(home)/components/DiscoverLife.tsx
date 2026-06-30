"use client";

import { useRef, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import Container from "../../../components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const GALLERY1 = [
  "/images/home/gallery/students-group.webp",
  "/images/home/gallery/gallery-1.webp",
  "/images/home/gallery/gallery-2.webp",
  "/images/home/gallery/students-celebrating.webp",
  "/images/home/gallery/students-group.webp",
  "/images/home/gallery/gallery-1.webp",
  "/images/home/gallery/gallery-2.webp",
  "/images/home/gallery/students-celebrating.webp",
];

const GALLERY2 = [
  "/images/home/gallery/gallery.webp",
  "/images/home/gallery/gallery-3.webp",
  "/images/home/gallery/gallery-4.webp",
  "/images/home/gallery/gallery-5.webp",
  "/images/home/gallery/gallery.webp",
  "/images/home/gallery/gallery-3.webp",
  "/images/home/gallery/gallery-4.webp",
  "/images/home/gallery/gallery-5.webp",
];

// ── Looping row ───────────────────────────────────────────────────────────────
type RowProps = {
  srcs: string[];
  speed?: number;
  direction?: 1 | -1;
  className?: string;
};

function GalleryRow({ srcs, speed = 48, direction = -1, className = "" }: RowProps) {
  const autoX = useMotionValue(0);
  const dragX = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfW = useRef(0);
  const dragging = useRef(false);
  const hovered = useRef(false);
  const lastPX = useRef(0);
  const momentum = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) halfW.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (dragging.current || hovered.current) return;
    let nx = autoX.get() + direction * speed * (delta / 1000);
    const hw = halfW.current;
    if (hw > 0) {
      if (direction === -1 && nx < -hw) nx += hw;
      if (direction === 1 && nx > 0) nx -= hw;
    }
    autoX.set(nx);
  });

  const x = useTransform(
    [autoX, dragX],
    ([a, d]) => (a as number) + (d as number),
  );

  const decayMomentum = useCallback(() => {
    if (Math.abs(momentum.current) < 0.5) { momentum.current = 0; return; }
    momentum.current *= 0.91;
    dragX.set(dragX.get() + momentum.current);
    rafId.current = requestAnimationFrame(decayMomentum);
  }, [dragX]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafId.current);
    dragging.current = true;
    lastPX.current = e.clientX;
    momentum.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const delta = e.clientX - lastPX.current;
    momentum.current = delta;
    lastPX.current = e.clientX;
    dragX.set(dragX.get() + delta);
  }, [dragX]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    rafId.current = requestAnimationFrame(decayMomentum);
  }, [decayMomentum]);

  const cards = srcs.map((src, i) => (
    <div
      key={i}
      /* Card width shrinks on mobile; height fills the row via h-full */
      className="shrink-0 rounded-[14px] overflow-hidden bg-[#e8e8e8] w-[220px] md:w-[340px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="w-full h-full object-cover pointer-events-none" />
    </div>
  ));

  return (
    <div
      className={`overflow-hidden cursor-grab active:cursor-grabbing select-none ${className}`}
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-3 will-change-transform h-full"
        style={{ x }}
      >
        {cards}
        {cards}
      </motion.div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function DiscoverLife() {
  return (
    /* min-h-screen + flex-col lets the gallery rows grow to fill remaining space */
    <section className="relative w-full bg-white overflow-hidden flex flex-col min-h-screen pt-10">

      {/* Header */}
      <Container className="flex flex-col items-center text-center mb-8 md:mb-14 shrink-0">
        <motion.div
          className="bg-brand-green-light text-black text-[10px] font-sans px-3 py-0.5 rounded-sm mb-5"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: SPRING }}
        >
          Gallery
        </motion.div>

        <motion.h2
          className="font-agatho text-[30px] sm:text-[38px] md:text-[50px] leading-tight text-black"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.1, ease: SPRING }}
        >
          Discover Life at Stockdale
        </motion.h2>

        <motion.p
          className="font-sans text-[14px] md:text-[16px] leading-6 text-brand-gray max-w-[517px] mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.2, ease: SPRING }}
        >
          Stockdale Higher Education Institute - where academic tradition meets
          forward-thinking innovation. Located in the heart of West Melbourne,
          designed to prepare graduates to lead in a complex world.
        </motion.p>
      </Container>

      {/*
        Gallery rows — flex-1 fills whatever height is left after the header.
        min-h-0 is required so flex children can shrink below their content size.
        Each row gets flex-1 so both rows split the space equally.
        min-h-[120px] / md:min-h-[180px] prevents rows collapsing on very small screens.
      */}
      <div className="flex flex-col gap-1 flex-1 min-h-0 pb-10">
        <GalleryRow srcs={GALLERY1} speed={44} direction={-1} className="flex-1 min-h-[120px] md:min-h-[180px]" />
        <GalleryRow srcs={GALLERY2} speed={36} direction={1}  className="flex-1 min-h-[120px] md:min-h-[180px]" />
      </div>

    </section>
  );
}
