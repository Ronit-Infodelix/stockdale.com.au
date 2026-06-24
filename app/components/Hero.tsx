"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Container from "./ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Background + video: drifts up slowly — gives "left behind" depth
  const bgY     = useTransform(scrollY, [0, 900], [0, -110]);
  const bgScale = useTransform(scrollY, [0, 900], [1, 1.08]);

  // Decorative corner images at slightly different rates for parallax depth
  const leftY  = useTransform(scrollY, [0, 900], [0, -60]);
  const rightY = useTransform(scrollY, [0, 900], [0, -80]);

  // Hero text content: starts moving after 60 px of scroll
  const contentY       = useTransform(scrollY, [60, 700], [0, -130]);
  const contentOpacity = useTransform(scrollY, [60, 480],  [1, 0]);

  return (
    /*
      sticky + top-0 + z-0:
      The section pins to the top of the viewport. Sections that follow
      (z-10, in normal document flow) slide up over it as the user scrolls.
    */
    <section className="sticky top-0 z-0 w-full h-screen overflow-hidden bg-[#050e1a] pt-35">

      {/* ── Background layer (slow parallax) ── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Decorative corner images (independent parallax) ── */}
      <div className="h-1/3 absolute w-full bottom-0 grid grid-cols-3 pointer-events-none">
        <motion.div
          className="relative -left-1/2 top-1/3 will-change-transform"
          style={{ y: leftY }}
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

      {/* ── Hero content (fades + drifts up as sections take over) ── */}
      <motion.div
        className="relative z-10 w-full py-16 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <Container className="flex flex-col items-center text-center">
          {/* Gold pill badge */}
          <div
            className="flex items-center px-3 py-1 rounded-full border border-[#f0c41a] mb-8"
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
          </div>

          {/* Headline */}
          <h1 className="font-agatho text-[70px] leading-5 text-white max-w-[936px]">
            A Global Community of Scholars
          </h1>

          {/* Subheading */}
          <p className="font-sans text-[24px] text-white uppercase mt-10 mb-8 tracking-[4px]">
            Innovate &nbsp;|&nbsp; Create &nbsp;|&nbsp; Succeed
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans border border-white whitespace-nowrap">
              Enquire
              <ChevronRight size={14} strokeWidth={2} />
            </button>

            <button
              className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(176.49deg, #F0C41A 0.56%, #D6A929 36.4%, #a6860d 89.05%)",
              }}
            >
              Apply Now
              <ChevronRight size={14} strokeWidth={2} />
            </button>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
