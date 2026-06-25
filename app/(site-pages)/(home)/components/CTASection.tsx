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
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[438px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, delay: 0.2, ease: SPRING }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            facilisis rhoncus placerat. Suspendisse ac dui et.
          </motion.p>

          <motion.button
            className="self-start flex items-center justify-center gap-2 rounded-[8px] text-white text-[14px] font-sans"
            style={{
              width: 158,
              height: 50,
              background: "linear-gradient(177.19deg, #43a48e 0.56%, #014f3d 36.4%, #013529 89.05%)",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.32, ease: SPRING }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            Apply Now
            <ChevronRight size={13} strokeWidth={2} />
          </motion.button>
        </motion.div>

        {/* Centre — two CTA buttons */}
        <motion.div
          className="absolute flex flex-col gap-4 z-10"
          style={{ left: 510, top: "50%", transform: "translateY(-50%)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.25, ease: SPRING }}
        >
          <motion.button
            className="bg-white text-[#0b0b0b] text-[16px] font-sans rounded-[8px] flex items-center justify-center"
            style={{ width: 159, height: 50 }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            Find Your Degree
          </motion.button>
          <motion.button
            className="bg-[#0b0b0b] text-white text-[16px] font-sans rounded-[8px] flex items-center justify-center"
            style={{ width: 159, height: 50 }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            Enquire Now
          </motion.button>
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
          src="/images/home/graduate-girl.png"
          alt="Graduate student"
          fill
          className="object-cover object-top"
        />
      </motion.div>
    </section>
  );
}
