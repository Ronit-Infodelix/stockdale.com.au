"use client";

import { useState, type PointerEvent, type ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/app/lib/utils";

const ASPECT_RATIO = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
} as const;

const POINTER_SPRING = {
  stiffness: 220,
  damping: 24,
  mass: 0.9,
} as const;

const MAX_TILT = 14;
const MAX_IMAGE_SHIFT = 18;

export interface ThreeDImageCardProps {
  src: ImageProps["src"];
  alt: string;
  title: string;
  description?: string;
  eyebrow?: string;
  cta?: string;
  aspectRatio?: keyof typeof ASPECT_RATIO;
  sizes?: ImageProps["sizes"];
  preload?: boolean;
  quality?: ImageProps["quality"];
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  children?: ReactNode;
}

export default function ThreeDImageCard({
  src,
  alt,
  title,
  description,
  eyebrow,
  cta,
  aspectRatio = "portrait",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  preload = false,
  quality,
  className,
  imageClassName,
  contentClassName,
  children,
}: ThreeDImageCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const hoverProgress = useSpring(0, POINTER_SPRING);

  const rotateX = useSpring(
    useTransform(pointerY, [-1, 1], [MAX_TILT, -MAX_TILT]),
    POINTER_SPRING
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-1, 1], [-MAX_TILT, MAX_TILT]),
    POINTER_SPRING
  );

  const scale = useTransform(hoverProgress, [0, 1], [1, 1.018]);
  const imageScale = useTransform(hoverProgress, [0, 1], [1.04, 1.12]);
  const contentLift = useTransform(hoverProgress, [0, 1], [0, -10]);
  const glareOpacity = useTransform(hoverProgress, [0, 1], [0.12, 0.42]);
  const borderOpacity = useTransform(hoverProgress, [0, 1], [0.18, 0.38]);

  const imageX = useSpring(
    useTransform(pointerX, [-1, 1], [-MAX_IMAGE_SHIFT, MAX_IMAGE_SHIFT]),
    POINTER_SPRING
  );
  const imageY = useSpring(
    useTransform(pointerY, [-1, 1], [-MAX_IMAGE_SHIFT, MAX_IMAGE_SHIFT]),
    POINTER_SPRING
  );
  const contentX = useSpring(useTransform(pointerX, [-1, 1], [-8, 8]), POINTER_SPRING);

  const shadowX = useTransform(pointerX, [-1, 1], [-18, 18]);
  const shadowY = useTransform(pointerY, [-1, 1], [16, 30]);
  const shadowBlur = useTransform(hoverProgress, [0, 1], [40, 68]);
  const shadowSpread = useTransform(hoverProgress, [0, 1], [-8, -18]);
  const shadowOpacity = useTransform(hoverProgress, [0, 1], [0.18, 0.32]);

  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(1, 53, 41, ${shadowOpacity})`;

  const glareX = useTransform(pointerX, [-1, 1], [28, 72]);
  const glareY = useTransform(pointerY, [-1, 1], [24, 66]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.28) 18%, transparent 54%)`;

  const canTrackPointer = (pointerType: string) =>
    !prefersReducedMotion && (pointerType === "mouse" || pointerType === "pen");

  const resetCard = () => {
    setIsHovering(false);
    hoverProgress.set(0);
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (!canTrackPointer(event.pointerType)) return;
    setIsHovering(true);
    hoverProgress.set(1);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!canTrackPointer(event.pointerType)) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    // Normalise cursor position to a -1..1 range so every layer can derive depth from it.
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

    pointerX.set(x);
    pointerY.set(y);
  };

  return (
    <div className={cn("relative isolate w-full", className)} style={{ perspective: "1600px" }}>
      <motion.article
        className={cn(
          "relative overflow-hidden rounded-[28px] bg-brand-green-darkest text-white",
          ASPECT_RATIO[aspectRatio]
        )}
        style={
          prefersReducedMotion
            ? {
                boxShadow: "0 24px 60px -18px rgba(1, 53, 41, 0.24)",
                transformStyle: "preserve-3d",
              }
            : {
                rotateX,
                rotateY,
                scale,
                boxShadow,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }
        }
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetCard}
        onPointerCancel={resetCard}
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          <div
            className="absolute inset-0 overflow-hidden rounded-[inherit]"
            style={{ transform: "translateZ(6px)" }}
          >
            <motion.div
              className="absolute -inset-4"
              style={
                prefersReducedMotion
                  ? { scale: 1.06 }
                  : { x: imageX, y: imageY, scale: imageScale }
              }
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                preload={preload}
                quality={quality}
                className={cn("object-cover", imageClassName)}
              />
            </motion.div>
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1, 53, 41, 0.06) 0%, rgba(1, 53, 41, 0.3) 38%, rgba(1, 16, 12, 0.9) 100%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255, 255, 255, 0.18) 0%, transparent 36%)",
            }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 mix-blend-screen"
            style={
              prefersReducedMotion
                ? { opacity: 0.16 }
                : { backgroundImage: glareBackground, opacity: glareOpacity }
            }
          />

          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20"
            style={prefersReducedMotion ? undefined : { opacity: borderOpacity }}
          />
        </div>

        <div
          className="relative flex h-full flex-col justify-end p-5 sm:p-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ transform: "translateZ(54px)" }}>
            <motion.div
              className={cn(
                "max-w-[min(92%,30rem)] rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-6",
                isHovering && "bg-white/15",
                contentClassName
              )}
              style={prefersReducedMotion ? undefined : { x: contentX, y: contentLift }}
            >
              {eyebrow ? (
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/80">
                  {eyebrow}
                </span>
              ) : null}

              <h3 className="mt-4 font-agatho text-[34px] leading-[0.95] tracking-[-0.03em] text-white sm:text-[42px]">
                {title}
              </h3>

              {description ? (
                <p className="mt-3 max-w-[34ch] text-[14px] leading-6 text-white/80 sm:text-[15px]">
                  {description}
                </p>
              ) : null}

              {children ? <div className="mt-4">{children}</div> : null}

              {cta ? (
                <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-brand-gold">
                  <span>{cta}</span>
                  <span className="h-px w-8 bg-brand-gold/80" />
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
