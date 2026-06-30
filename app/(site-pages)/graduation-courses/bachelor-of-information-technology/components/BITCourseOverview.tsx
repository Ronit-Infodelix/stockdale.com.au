"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/app/components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;

const OVERVIEW_PANELS = [
  {
    title: "IT Core Units",
    body: "A set of mandatory units that cover the fundamental competencies for an emerging IT professional. This covers the technical such as database management, networking and information security, web & cloud systems, programming and systems analysis and design. It also covers a series of units that scaffold the development of professional skills including project management. The ultimate IT Core unit is the Capstone Project that draws together technical and professional skills in a project involving the analysis of and solution synthesis for a complex industry-relevant problem.",
  },
  {
    title: "Data Analytics Specialisation",
    body: "Students will develop expertise in data visualisation and communication as well as data analytics techniques including data mining, machine learning, predictive modeling, and statistical analysis. These skills are vital for extracting valuable insights from large datasets and making data-driven decisions.",
  },
  {
    title: "IT Electives",
    body: "Second year electives include eCommerce and digital business models, and digital marketing and analytics, fostering a holistic understanding of contemporary digital trends. Third year electives in human-computer interaction and artificial intelligence in business ensure that graduates are not only proficient in technical skills but also prepared for leadership roles in various technological domains.",
  },
];

function OverviewPanel({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-[#cdeae2]/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-sans text-[20px] text-[#0a0a0a]">{title}:</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: SPRING }}
          className="shrink-0"
        >
          {open ? (
            <Minus size={18} className="text-brand-gray" />
          ) : (
            <Plus size={18} className="text-brand-gray" />
          )}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: SPRING }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-5">
              <p className="font-sans text-[14px] leading-6 text-brand-gray">{body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BITCourseOverview() {
  return (
    <section id="course-overview" className="bg-white py-14 scroll-mt-20">
      <Container>
        <h2 className="font-agatho text-[40px] leading-[44px] text-[#0a0a0a] mb-4">
          Course Overview
        </h2>
        <div className="max-w-200 space-y-3 font-sans text-[14px] leading-5 text-brand-gray mb-10">
          <p>
            The Bachelor of Information Technology (BIT) with a specialisation in Data Analytics addresses the growing need for professionals who can harness the power of data to drive business innovation and decision-making.
          </p>
          <p>
            The course structure is designed to provide a robust foundation in Information Technology while allowing students to specialise and tailor their education to their professional objectives. Ethics and soft skills are established in the IT Professional unit and are further developed and exercised throughout the units across the course.
          </p>
          <p>The BIT structure includes:</p>
        </div>
        <div className="max-w-[900px] space-y-4">
          {OVERVIEW_PANELS.map((panel) => (
            <OverviewPanel key={panel.title} title={panel.title} body={panel.body} />
          ))}
        </div>
      </Container>
    </section>
  );
}
