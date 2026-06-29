"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const SPRING   = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

export default function CTASection() {
  return (
    <section
      className="relative overflow-visible"
      style={{
        minHeight: 513,
        background: "linear-gradient(160.14deg, #fff4c9 21.93%, #f0c41a 78.07%)",
      }}
    >
      <Container className="relative flex items-center" style={{ minHeight: 513 }}>

        {/* Left — heading + description + Apply Now */}
        <motion.div
          className="flex flex-col gap-6 max-w-[450px] py-20 z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: SPRING }}
        >
          <motion.h2
            className="font-agatho text-[60px] leading-[1.1] text-black max-w-[508px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.1, ease: SPRING }}
          >
            Your Higher Education Starts Here
          </motion.h2>

          <motion.p
            className="font-sans text-[16px] leading-[24px] text-brand-gray max-w-[438px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, delay: 0.2, ease: SPRING }}
          >
            Join a global community of scholars. Applications are now open for our Bachelor of Information Technology program.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.32, ease: SPRING }}
          >
            <motion.button
              className="flex items-center justify-center gap-2 rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap"
              style={{
                height: 50,
                padding: "0 20px",
                background: "linear-gradient(177.19deg, #43a48e 0.56%, #014f3d 36.4%, #013529 89.05%)",
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
            >
              Apply Now — 2026 Intake
              <ChevronRight size={13} strokeWidth={2} />
            </motion.button>
            <motion.button
              className="bg-[#0b0b0b] text-white text-[14px] font-sans rounded-[8px] flex items-center justify-center whitespace-nowrap"
              style={{ height: 50, padding: "0 20px" }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
            >
              Speak to an Advisor
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Graduate girl — slides up from below */}
      <motion.div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ width: 560, height: 741 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, delay: 0.1, ease: SPRING }}
      >
        <Image
          src="/images/home/graduate-girl.webp"
          alt="Graduate student"
          fill
          className="object-cover object-top"
        />
      </motion.div>
    </section>
  );
}
