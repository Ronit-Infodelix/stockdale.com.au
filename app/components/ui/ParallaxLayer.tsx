"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

// Full class names kept as string literals so Tailwind's scanner picks them up.
const TOP: Record<string, string> = {
  "0": "top-0",
  "18": "top-18",
};

interface StickyProps {
  /** Tailwind top-* offset (must be a key of the TOP map). */
  top?: "0" | "18";
  /**
   * Fade the section out as the following overlay scrolls over it.
   * Uses scrollYProgress of the container: [0.2 → 0.85] maps to opacity [1 → 0].
   * Default: true.
   */
  fade?: boolean;
  children: ReactNode;
  className?: string;
}

interface OverlayProps {
  /** Round the top corners (default: true). */
  rounded?: boolean;
  /** Clip overflowing children (default: true). */
  overflow?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Pins a section in place while subsequent OverlayLayers scroll over it.
 * Optionally fades the content out as it gets covered.
 *
 * We track window scrollY directly instead of useScroll({ target }) because
 * getBoundingClientRect on a sticky element always returns its pinned visual
 * position — so scrollYProgress would never advance. Instead we capture the
 * element's absolute document position at mount (before sticky kicks in) and
 * map raw scrollY to opacity via a transformer function.
 */
export function ParallaxSticky({ top = "0", fade = true, children, className }: StickyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const docTopRef = useRef(0);
  const heightRef = useRef(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (!ref.current) return;
    // At this point sticky may not have fired yet, so rect.top + scrollY
    // gives the true layout position in the document.
    docTopRef.current = ref.current.getBoundingClientRect().top + window.scrollY;
    heightRef.current = ref.current.offsetHeight;
  }, []);

  const blurFilter = useTransform(scrollY, (y) => {
    if (!fade) return "blur(0px)";
    const start = docTopRef.current + heightRef.current * 0.2;
    const end = docTopRef.current + heightRef.current * 0.85;
    if (y <= start) return "blur(0px)";
    if (y >= end) return "blur(3px)";
    const t = (y - start) / (end - start);
    return `blur(${(t * 3).toFixed(2)}px)`;
  });

  const scale = useTransform(scrollY, (y) => {
    if (!fade) return 1;
    const start = docTopRef.current + heightRef.current * 0.2;
    const end = docTopRef.current + heightRef.current * 0.85;
    if (y <= start) return 1;
    if (y >= end) return 0.92;
    return 1 - ((y - start) / (end - start)) * 0.08;
  });

  return (
    <div ref={ref} className={cn("sticky z-0", TOP[top], className)}>
      <motion.div style={{ filter: blurFilter, scale }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Wraps a section that slides up over a ParallaxSticky sibling.
 * Sits at z-10 so it paints above the pinned layer.
 */
export function ParallaxOverlay({
rounded = false,
  overflow = true,
  children,
  className,
}: OverlayProps) {
  return (
    <div
      className={cn(
        "relative z-10",
        rounded && "rounded-t-[28px]",
        overflow && "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
