"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/app/components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;

const FEES = [
  {
    type: "Domestic Students",
    total: "$43,200",
    perYear: "$14,400 per year",
    note: "Citizens & permanent residents",
  },
  {
    type: "International Students",
    total: "$50,400",
    perYear: "$16,800 per year",
    note: "Visa holders & overseas students",
  },
];

export default function BITFees() {
  const [open, setOpen] = useState(true);

  return (
    <section id="fees" className="bg-white py-14 scroll-mt-20">
      <Container>
        <div className="max-w-200">
          <div className="border-t border-gray-200 pt-8 mb-6">
            <button
              onClick={() => setOpen((o) => !o)}
              className="w-full flex items-start justify-between gap-4 text-left group"
            >
              <div>
                <h2 className="font-agatho text-[40px] leading-11 text-[#0a0a0a]">Fees &amp; Costs</h2>
                <p className="font-sans text-[14px] text-brand-gray mt-1">
                  All fees are quoted in Australian Dollars (AUD) for the full course duration.
                </p>
              </div>
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
                key="fees-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.38, ease: SPRING }}
                style={{ overflow: "hidden" }}
              >
                <div className="divide-y divide-gray-100 border-t border-gray-100 mb-6">
                  {FEES.map(({ type, total, perYear, note }) => (
                    <div key={type} className="flex items-center justify-between py-5 gap-6">
                      <div>
                        <p className="font-sans text-[13px] font-medium text-[#0a0a0a]">{type}</p>
                        <p className="font-sans text-[12px] text-brand-gray mt-0.5">{note}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-agatho text-[28px] leading-none text-brand-green-darkest">{total}</p>
                        <p className="font-sans text-[12px] text-brand-gray mt-1">{perYear}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
