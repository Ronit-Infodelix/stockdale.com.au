"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/app/components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;

type EntryTab = "domestic" | "international";

const ENTRY: Record<EntryTab, { requirement: string; bullets: string[] }> = {
  domestic: {
    requirement:
      "In accordance with Stockdale's Admissions Policy and Procedure, the following minimum entry thresholds have been assigned for entry to this course. These thresholds ensure that students enrolling have the necessary qualifications and skills to succeed in their studies.",
    bullets: [
      "Must be above 18 years of age",
      "Completion of Year 12 in Australia",
      "Successful completion of Year 10 Mathematics subject (or equivalent)",
      "School leavers should have successfully completed VCE (or equivalent)",
      "Access to a laptop device during studies",
    ],
  },
  international: {
    requirement:
      "In accordance with Stockdale's Admissions Policy and Procedure, the following minimum entry thresholds have been assigned for entry to this course. International students must also meet English language requirements in addition to the academic entry requirements listed for domestic students.",
    bullets: [
      "Must be above 18 years of age",
      "Completion of Year 12 or equivalent",
      "Successful completion of Year 10 Mathematics subject (or equivalent)",
      "IELTS Academic 6.5 (no band less than 6.0); or",
      "TOEFL iBT 79 (writing no less than 21); or",
      "PTE 58 (no section less than 50); or",
      "Cambridge English Advanced (CAE) 176 (no band less than 169)",
      "Access to a laptop device during studies",
    ],
  },
};

const ENTRY_TABS: { key: EntryTab; label: string }[] = [
  { key: "domestic", label: "Domestic Students" },
  { key: "international", label: "International Students" },
];

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

export default function BITEntryRequirements({
  defaultTab = "domestic",
}: {
  defaultTab?: EntryTab;
}) {
  const [entryTab, setEntryTab] = useState<EntryTab>(defaultTab);

  return (
    <section id="entry-requirements" className="bg-white scroll-mt-20">
      <Container>
        <div className="max-w-200">
          <AccordionSection heading="Entry Requirement & Admissions Criteria">
            <p className="font-sans text-[14px] leading-5 text-brand-gray mb-6">
              In accordance with Stockdale&apos;s Admissions Policy and Procedure, the following minimum entry thresholds have been assigned for entry to this course. These thresholds ensure that students enrolling have the necessary qualifications and skills to succeed in their studies.
            </p>
            <div className="flex items-center border-b border-black mb-6">
              {ENTRY_TABS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setEntryTab(key)}
                  className="relative px-3 py-2 font-sans text-[13px] font-medium uppercase tracking-wide mr-4"
                >
                  {label}
                  {entryTab === key && (
                    <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#e5bd1b]" />
                  )}
                </button>
              ))}
            </div>
            <h3 className="font-agatho text-[24px] text-[#014f3d] mb-4">Entry Requirements</h3>
            <p className="font-sans text-[14px] leading-5 text-brand-gray mb-4">
              {ENTRY[entryTab].requirement}
            </p>
            <ul className="list-disc pl-5 space-y-2 font-sans text-[14px] leading-7 text-brand-gray">
              {ENTRY[entryTab].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </AccordionSection>
        </div>
      </Container>
    </section>
  );
}
