"use client";

import { motion } from "framer-motion";
import Container from "@/app/components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

const credentials = [
  { label: "TEQSA Provider ID", value: "PRV14409" },
  { label: "CRICOS Provider", value: "TBA" },
  { label: "ABN", value: "30 657 190 193" },
  { label: "Established", value: "2026" },
  { label: "Tagline", value: "A Global Community of Scholars" },
];

export default function CredentialsSection() {
  return (
    <section className="bg-[#f8f5eb] py-20">
      <Container>
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: SPRING }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[2.5px] text-[#a6860d] font-medium">
            Accreditation
          </span>
          <h2 className="font-agatho text-[50px] leading-tight text-black mt-1">
            Our <span className="text-brand-gold-dark">Credentials</span>
          </h2>
        </motion.div>

        {/* Rows */}
        <div className="border-t border-[#d4cdb4]">
          {credentials.map(({ label, value }, i) => (
            <motion.div
              key={label}
              className="flex items-center justify-between py-6 border-b border-[#d4cdb4] group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: i * 0.08, ease: SPRING }}
            >
              <p className="font-sans text-[14px] uppercase tracking-[1.5px] text-[#6b6b4f]">
                {label}
              </p>
              <p className="font-agatho text-[28px] leading-none text-black group-hover:text-brand-green-dark transition-colors duration-300">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
