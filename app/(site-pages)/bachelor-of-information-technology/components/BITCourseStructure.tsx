"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/app/components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;

function AccordionSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="border-t border-gray-200 pt-8 mb-6">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start justify-between gap-4 text-left group"
        >
          <h2 className="font-agatho text-[40px] leading-11 text-[#0a0a0a]">{heading}</h2>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: SPRING }}
            className="mt-1 shrink-0 text-brand-gray group-hover:text-brand-green-darkest transition-colors"
          >
            <Plus size={20} />
          </motion.span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: SPRING }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BITCourseStructure() {
  return (
    <section id="course-structure" className="bg-white scroll-mt-20">
      <Container>
        <div className="max-w-200">
          <AccordionSection heading="Course Structure">
            <div className="font-sans text-[14px] leading-5 text-brand-gray space-y-3 mb-6">
              <p>
                To qualify for award of the Bachelor of Information Technology the student shall accrue an aggregate of 240 credit points. The Bachelor of IT consists of 23 units, including 11 core units, 8 data analytics specialisation units and 4 elective units.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0a0a0a]">11 Core Units</strong>{" "}
                  (10 core units = 10 credit points each, Capstone Project = 20 credit points)
                </li>
                <li>
                  <strong className="text-[#0a0a0a]">8 Data Analytics Specialisation Units</strong> (10 credit points each)
                </li>
                <li>
                  <strong className="text-[#0a0a0a]">4 Elective Units</strong> (10 credit points each)
                </li>
                <li>
                  Total: <strong className="text-[#0a0a0a]">23 units</strong> (240 credit points)
                </li>
              </ul>
            </div>
          </AccordionSection>
        </div>
      </Container>
    </section>
  );
}
