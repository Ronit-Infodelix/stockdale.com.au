"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/Container";
import Section from "./ui/Section";

const SPRING  = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

export default function EmpoweringStudents() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 0 → section enters viewport bottom (curtain covers image)
  // 1 → section 60 % visible (curtain fully dropped)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "start 0.4"],
  });

  // Curtain drops downward — falls out of the bottom edge
  const curtainY = useTransform(scrollYProgress, [0, 1], ["0%", "102%"]);

  // Shadow on curtain's top edge as it drops — peaks at mid-fall
  const curtainShadow = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [
      "0  0px  0px rgba(0,0,0,0)",
      "0 -28px 60px rgba(0,0,0,0.4)",
      "0  0px  0px rgba(0,0,0,0)",
    ]
  );

  // Image breathes in gently as curtain rises
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={wrapperRef}>
      <Section className="flex flex-col justify-end h-screen w-full overflow-hidden !py-0">

        {/* ── Image layer ── */}
        <Container className="inset-0 flex-1 h-full absolute overflow-hidden">

          {/* Image */}
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

          {/* Fade — covers bottom half for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.75) 65%, rgb(255,255,255) 85%)",
            }}
          />

          {/* ── CURTAIN — black 30 % veil, drops with scroll ── */}
          <motion.div
            className="absolute inset-0 z-10 will-change-transform"
            style={{
              y: curtainY,
              boxShadow: curtainShadow,
              background: "rgba(0,0,0,0.30)",
            }}
          />
        </Container>

        {/* ── Text content ── */}
        <Container className="flex flex-col items-center text-center mt-auto relative pb-16 gap-4">

          <motion.h2
            className="font-agatho text-[63px] leading-tight text-[#013529]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: SPRING }}
          >
            Empowering Students for Global Success
          </motion.h2>

          <motion.p
            className="font-sans text-[16px] leading-[28px] text-[#767676] max-w-[834px]"
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
      </Section>
    </div>
  );
}
