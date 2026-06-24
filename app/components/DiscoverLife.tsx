"use client";

import { useRef, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue, useTransform, useAnimationFrame,
} from "framer-motion";
import Container from "./ui/Container";

const SPRING   = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const GALLERY1 = [
  "/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png",
  "/images/home/gallery/Mask group-1.png",
  "/images/home/gallery/Mask group-2.png",
  "/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png",
  "/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png",
  "/images/home/gallery/Mask group-1.png",
  "/images/home/gallery/Mask group-2.png",
  "/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png",
];

const GALLERY2 = [
  "/images/home/gallery/Mask group.png",
  "/images/home/gallery/Rectangle 79.png",
  "/images/home/gallery/Rectangle 80.png",
  "/images/home/gallery/Rectangle 81.png",
  "/images/home/gallery/Mask group.png",
  "/images/home/gallery/Rectangle 79.png",
  "/images/home/gallery/Rectangle 80.png",
  "/images/home/gallery/Rectangle 81.png",
];

const ROW_1 = GALLERY1;
const ROW_2 = GALLERY2;

// ── Looping row: auto-ticker + grab-to-drag + hover-to-pause ─────────────────
type RowProps = {
  srcs: string[];
  speed?: number;
  direction?: 1 | -1;
};

function GalleryRow({ srcs, speed = 48, direction = -1 }: RowProps) {
  const autoX    = useMotionValue(0);
  const dragX    = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfW    = useRef(0);
  const dragging = useRef(false);
  const hovered  = useRef(false);
  const lastPX   = useRef(0);
  const momentum = useRef(0);
  const rafId    = useRef(0);

  // Measure half-width after mount (content is duplicated once = 2 sets)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) halfW.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto-ticker — pauses on hover or drag
  useAnimationFrame((_, delta) => {
    if (dragging.current || hovered.current) return;
    let nx = autoX.get() + direction * speed * (delta / 1000);

    // Seamless wrap
    const hw = halfW.current;
    if (hw > 0) {
      if (direction === -1 && nx < -hw) nx += hw;
      if (direction ===  1 && nx >  0)  nx -= hw;
    }
    autoX.set(nx);
  });

  // Combined x = looping ticker + drag offset
  const x = useTransform(
    [autoX, dragX],
    ([a, d]) => (a as number) + (d as number)
  );

  // Momentum decay on pointer release
  const decayMomentum = useCallback(() => {
    if (Math.abs(momentum.current) < 0.5) { momentum.current = 0; return; }
    momentum.current *= 0.91;
    dragX.set(dragX.get() + momentum.current);
    rafId.current = requestAnimationFrame(decayMomentum);
  }, [dragX]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafId.current);
    dragging.current = true;
    lastPX.current   = e.clientX;
    momentum.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const delta      = e.clientX - lastPX.current;
    momentum.current = delta;
    lastPX.current   = e.clientX;
    dragX.set(dragX.get() + delta);
  }, [dragX]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    rafId.current = requestAnimationFrame(decayMomentum);
  }, [decayMomentum]);

  const cards = srcs.map((src, i) => (
    <div
      key={i}
      className="flex-shrink-0 rounded-[14px] overflow-hidden bg-[#e8e8e8]"
      style={{ width: 340, height: 240 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="w-full h-full object-cover pointer-events-none" />
    </div>
  ));

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Two copies → half-width wraps seamlessly */}
      <motion.div
        ref={trackRef}
        className="flex gap-3 will-change-transform"
        style={{ x }}
      >
        {cards}{cards}
      </motion.div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function DiscoverLife() {

  return (
    <section className="relative w-full bg-white pt-20 pb-10 overflow-hidden">

      {/* Header */}
      <Container className="flex flex-col items-center text-center mb-14">
        <motion.div
          className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] mb-5"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: SPRING }}
        >
          Gallery
        </motion.div>

        <motion.h2
          className="font-agatho text-[50px] leading-tight text-black"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.1, ease: SPRING }}
        >
          Discover Life at Our University
        </motion.h2>

        <motion.p
          className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[516px] mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.2, ease: SPRING }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          facilisis rhoncus placerat. Suspendisse ac dui et.
        </motion.p>
      </Container>

      {/* Two looping rows — opposite directions */}
      <div className="flex flex-col gap-3">
        <GalleryRow srcs={ROW_1} speed={44} direction={-1} />
        <GalleryRow srcs={ROW_2} speed={36} direction={1}  />
      </div>

    </section>
  );
}
