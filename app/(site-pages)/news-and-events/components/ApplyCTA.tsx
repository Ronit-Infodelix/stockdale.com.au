"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import { motion } from "framer-motion";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function ApplyCTA() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[500px] lg:h-[661px] overflow-hidden">
      {/* ── Photo — slides in from left ── */}
      <motion.div
        className="relative w-full lg:w-[58%] min-h-[300px] lg:min-h-0 shrink-0"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.85, ease: SPRING }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/cta.png"
          alt="Students on campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Dark green panel — slides in from right ── */}
      <motion.div
        className="flex-1 bg-brand-green-darkest"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.85, ease: SPRING, delay: 0.1 }}
      >
        <Container className="h-full flex flex-col justify-center py-14 lg:py-0">
          {/* Badge */}
          <motion.span
            className="inline-flex self-start items-center px-3 py-1 rounded-sm bg-brand-green-light text-[10px] font-sans text-black mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: SPRING, delay: 0.25 }}
          >
            Explore
          </motion.span>

          {/* Title */}
          <motion.h2
            className="font-agatho text-[50px] leading-tight text-white mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: SPRING, delay: 0.35 }}
          >
            Ready to Apply?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-sans text-[16px] leading-6 text-white mb-8 max-w-[305px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: SPRING, delay: 0.45 }}
          >
            Discover the key steps and requirements to apply for your chosen program.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: SPRING, delay: 0.55 }}
          >
            <Link
              href="/admission/how-to-apply"
              className="inline-flex items-center gap-2 bg-white text-black text-[14px] font-sans px-[17px] py-[10px] rounded-lg hover:bg-white/90 transition-colors"
            >
              How to Apply
              <ChevronRight size={14} strokeWidth={2} />
            </Link>

            <Link
              href="/admission/eligibility"
              className="inline-flex items-center gap-2 border border-white text-white text-[14px] font-sans px-[17px] py-[10px] rounded-lg hover:bg-white/10 transition-colors"
            >
              Eligibility Calculator
              <ChevronRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
