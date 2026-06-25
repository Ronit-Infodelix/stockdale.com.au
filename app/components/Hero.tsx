"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Container from "./ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Easing ────────────────────────────────────────────────────────────────────
const SPRING = [0.22, 1, 0.36, 1] as const;

// ── Variants ──────────────────────────────────────────────────────────────────

// Stagger wrapper for all content items
const contentStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.5 } },
};

// Generic fade + rise for badge, subheading, buttons
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: SPRING },
  },
};

// Curtain-reveal container (one per word in the headline)
const wordMask = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// Each word slides up from behind its mask
const wordReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.72, ease: SPRING } },
};

// Typewriter — container staggers each character
const twContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
// Each character snaps in instantly (no fade duration)
const twChar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0 } },
};

// Subheading text split into chars
const SUBHEADING = "Innovate  |  Create  |  Succeed";

// Button stagger
const btnRow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
};

const btnItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: SPRING } },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 900], [0, -110]);
  const bgScale = useTransform(scrollY, [0, 900], [1, 1.08]);
  const leftY = useTransform(scrollY, [0, 900], [0, -60]);
  const rightY = useTransform(scrollY, [0, 900], [0, -80]);
  const contentY = useTransform(scrollY, [60, 700], [0, -130]);
  const contentOpacity = useTransform(scrollY, [60, 480], [1, 0]);
  // Fades the entire visual layer (video, overlay, decoratives) to 0 so only
  // the base bg-[#050e1a] colour remains — prevents the Hero showing through
  // sticky sections that fade in later scroll stages.
  const bgOpacity = useTransform(scrollY, [300, 750], [1, 0]);

  const headline = "A Global Community of Scholars".split(" ");

  return (
    <section className="sticky top-0 z-0 w-full h-screen overflow-hidden bg-[#050e1a] pt-30">
      {/* ── All background visuals — fade out together as page scrolls ── */}
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        {/* Background entrance wrapper → parallax wrapper */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 will-change-transform"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: SPRING }}
            style={{ y: bgY, scale: bgScale }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/hero/banner.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_-8%] pointer-events-none"
              aria-hidden="true"
            />
            <video
              className="absolute inset-0 w-full h-full object-cover 2xl:object-[center_-20%] object-[center_-40%]"
              src="/videos/Enhancer-Ultra HD-final-5.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </motion.div>

        {/* Dark overlay — fades in on load, then breathes infinitely over 13 s */}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.7, 0.7, 0.7, 0.62] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />

        {/* ── Decorative corner images — slide in from sides ── */}
        <div className="h-1/3 absolute w-full bottom-0 grid grid-cols-3 pointer-events-none">
          <motion.div
            className="relative -left-1/2 top-1/3 will-change-transform"
            style={{ y: leftY }}
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: SPRING }}
          >
            <Image
              src="/images/home/hero/left.png"
              alt=""
              fill
              className="select-none object-cover overflow-visible"
              aria-hidden="true"
            />
          </motion.div>

          <div />

          <motion.div
            className="relative -right-1/2 top-1/2 will-change-transform"
            style={{ y: rightY }}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 1.2, ease: SPRING }}
          >
            <Image
              src="/images/home/hero/right.png"
              alt=""
              fill
              className="select-none object-cover overflow-visible"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ── Hero content ── */}
      <motion.div
        className="relative z-10 w-full py-16 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <Container className="flex flex-col items-center text-center">
          {/* Stagger container for all content */}
          <motion.div
            className="flex flex-col items-center"
            variants={contentStagger}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center px-3 py-1 rounded-full border border-[#f0c41a] mb-4"
              style={{ background: "rgba(234,196,88,0.2)" }}
            >
              <span
                className="font-sans text-[13px] font-medium uppercase tracking-wide"
                style={{
                  background:
                    "linear-gradient(90deg, #8b732f 14.6%, #eac458 43.5%, #8b732f 101.7%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                • Ranked #1 in Graduate outcome •
              </span>
            </motion.div>

            {/* Headline — word-by-word curtain reveal */}
            <motion.h1
              className="font-agatho text-[70px] leading-[1.05] text-white max-w-[936px] flex flex-wrap justify-center gap-x-[0.28em]"
              variants={wordMask}
            >
              {headline.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden leading-[1.1]"
                >
                  <motion.span className="inline-block" variants={wordReveal}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Subheading — typewriter, hollow outlined */}
            <motion.p
              variants={twContainer}
              className="font-sans text-[24px] uppercase mt-2 mb-8 tracking-[4px] text-white"
              // style={{ color: "transparent", WebkitTextStroke: "0.8px #fff" }}
            >
              {SUBHEADING.split("").map((char, i) => (
                <motion.span key={i} variants={twChar}>
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.p>

            {/* CTA buttons — staggered */}
            <motion.div className="flex items-center gap-4" variants={btnRow}>
              <motion.button
                variants={btnItem}
                className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white font-sans border border-white whitespace-nowrap"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-enquiry"))
                }
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.96 }}
              >
                Enquire
                <ChevronRight size={14} strokeWidth={2} />
              </motion.button>

              <motion.button
                variants={btnItem}
                className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white font-sans whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(176.49deg, #F0C41A 0.56%, #D6A929 36.4%, #a6860d 89.05%)",
                }}
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-apply"))
                }
                whileHover={{
                  scale: 1.05,
                  opacity: 0.92,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.96 }}
              >
                Apply Now
                <ChevronRight size={14} strokeWidth={2} />
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
