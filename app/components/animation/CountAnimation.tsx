"use client";

import { cn } from "@/app/lib/utils";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function CountAnimation({
  number,
  className,
  duration = 2,
  suffix = "",
}: {
  number: number;
  className: string;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString() + suffix);

  useEffect(() => {
    if (!isInView) return;
    const animation = animate(count, number, {
      duration,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    });
    return animation.stop;
  }, [isInView, number, duration, count, suffix]);

  return (
    <motion.span ref={ref} className={cn(className)}>
      {rounded}
    </motion.span>
  );
}

export { CountAnimation };
