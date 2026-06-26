"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../../../components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-10px" } as const;

export default function EmpoweringStudents() {
  const sectionRef = useRef<HTMLElement>(null);

  // 0 → 10 % of section visible  |  1 → 70 % visible (= "60 % through reveal")
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.2", "start 0"],
  });

  // Clip grows from the top — grayscale disappears top-first, colour revealed beneath
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"],
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-end h-[calc(100vh-72px)] w-full overflow-hidden"
    >
      {/* ── Image layer ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 — full colour (always underneath) */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale: imageScale }}
        >
          <Image
            src="/images/home/students-empowering.png"
            alt="Students talking near college building"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Layer 2 — grayscale, clipped from top as scroll progresses */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath, scale: imageScale }}
        >
          <Image
            src="/images/home/students-empowering.png"
            alt=""
            fill
            className="object-cover object-top grayscale"
            aria-hidden="true"
          />
        </motion.div>

        {/* Gradient fade — bottom half for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 38%, rgba(255,255,255,0.82) 64%, #ffffff 84%)",
          }}
        />
      </div>

      {/* ── Text content — z-30 stays above curtain ── */}
      <Container className="relative z-30 flex flex-col items-center text-center mt-auto pb-16 gap-4">
        <motion.h2
          className="font-agatho text-[63px] leading-tight text-brand-green-darkest"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: SPRING }}
        >
          Empowering Students for Global Success
        </motion.h2>

        <motion.p
          className="font-sans text-[16px] leading-[28px] text-brand-gray max-w-[834px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.14, ease: SPRING }}
        >
          We provide high-quality education focused on practical skills, career
          outcomes, and student growth. Our supportive learning environment
          helps students gain confidence, knowledge, and real-world experience.
        </motion.p>

        <motion.button
          className="mt-2 flex items-center gap-2 px-6 py-[13px] rounded-[8px] text-white text-[14px] font-sans"
          style={{
            background:
              "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.28, ease: SPRING }}
          whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
        >
          Know more
          <ChevronRight size={14} strokeWidth={2} />
        </motion.button>
      </Container>
    </section>
  );
}
