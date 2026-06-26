"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronRight, User, Mail, Phone, BookOpen, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SPRING = [0.22, 1, 0.36, 1] as const;

const courses = [
  "Bachelor of Business",
  "Bachelor of Information Technology",
  "Bachelor of Commerce",
  "Master of Business Administration",
  "Master of Information Technology",
  "Diploma of Business",
  "Other / Not sure yet",
];

const fieldStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const fieldItem = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: SPRING } },
};

// ── Field component ────────────────────────────────────────────────────────────
function Field({
  label, type = "text", placeholder, icon: Icon, as: Tag = "input", options,
}: {
  label: string; type?: string; placeholder: string;
  icon: React.ElementType; as?: "input" | "select" | "textarea";
  options?: string[];
}) {
  return (
    <motion.div variants={fieldItem} className="flex flex-col gap-1.5">
      <label className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-brand-gray">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#d6a929]">
          <Icon size={14} strokeWidth={2} />
        </div>
        {Tag === "select" ? (
          <select
            className="w-full pl-9 pr-4 py-2.5 bg-[#f8f8f8] border border-[#e8e8e8] rounded-[8px] font-sans text-[13px] text-[#333] focus:outline-none focus:border-[#013529] transition-colors appearance-none"
          >
            <option disabled defaultChecked>{placeholder}</option>
            {options?.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : Tag === "textarea" ? (
          <textarea
            rows={3}
            placeholder={placeholder}
            className="w-full pl-9 pr-4 py-2.5 bg-[#f8f8f8] border border-[#e8e8e8] rounded-[8px] font-sans text-[13px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#013529] transition-colors resize-none"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full pl-9 pr-4 py-2.5 bg-[#f8f8f8] border border-[#e8e8e8] rounded-[8px] font-sans text-[13px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#013529] transition-colors"
          />
        )}
      </div>
    </motion.div>
  );
}

// ── Modal ──────────────────────────────────────────────────────────────────────
export default function EnquiryModal() {
  const [open, setOpen]     = useState(false);
  const [intent, setIntent] = useState<"enquire" | "apply">("enquire");

  useEffect(() => {
    const onEnquire = () => { setIntent("enquire"); setOpen(true); };
    const onApply   = () => { setIntent("apply");   setOpen(true); };
    window.addEventListener("open-enquiry", onEnquire);
    window.addEventListener("open-apply",   onApply);
    return () => {
      window.removeEventListener("open-enquiry", onEnquire);
      window.removeEventListener("open-apply",   onApply);
    };
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/65"
            style={{ backdropFilter: "blur(6px)" }}
            onClick={() => setOpen(false)}
          />

          {/* Card */}
          <motion.div
            className="relative z-10 w-full max-w-[880px] rounded-[24px] overflow-hidden flex shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
            initial={{ scale: 0.9, opacity: 0, y: 24 }}
            animate={{ scale: 1,   opacity: 1, y: 0  }}
            exit={{    scale: 0.9, opacity: 0, y: 24 }}
            transition={{ duration: 0.42, ease: SPRING }}
          >
            {/* ── Left panel ── */}
            <div className="w-[300px] flex-shrink-0 relative flex flex-col justify-between p-9 overflow-hidden">
              {/* bg image — different per intent */}
              <div className="absolute inset-0">
                <Image
                  src={
                    intent === "apply"
                      ? "/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png"
                      : "/images/home/gallery/Mask group.png"
                  }
                  alt=""
                  fill
                  className="object-cover object-center"
                  aria-hidden
                />
              </div>

              {/* gradient overlay — green for Apply, gold for Enquire */}
              <div
                className="absolute inset-0"
                style={{
                  background: intent === "apply"
                    ? "linear-gradient(160deg, rgba(1,53,41,0.80) 0%, rgba(1,53,41,0.97) 100%)"
                    : "linear-gradient(160deg, rgba(166,134,13,0.82) 0%, rgba(100,75,0,0.97) 100%)",
                }}
              />

              {/* Decorative circles */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute -bottom-8  -right-8  w-40 h-40 rounded-full border border-white/10" />

              {/* Logo */}
              <div className="relative z-10">
                <Image src="/images/logo/secondary.svg" alt="Stockdale" width={110} height={82} className="object-contain" />
              </div>

              {/* Bottom text */}
              <div className="relative z-10">
                <div
                  className="inline-flex items-center px-2.5 py-1 rounded-full border mb-4"
                  style={{
                    borderColor: intent === "apply" ? "rgba(240,196,26,0.4)" : "rgba(255,255,255,0.35)",
                    background:  intent === "apply" ? "rgba(240,196,26,0.12)" : "rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="font-sans text-[11px] font-medium uppercase tracking-wider"
                    style={{ color: intent === "apply" ? "#f0c41a" : "#fff" }}
                  >
                    {intent === "apply" ? "Apply Now" : "Enquire"}
                  </span>
                </div>

                <h3 className="font-agatho text-[32px] leading-[1.1] text-white mb-3">
                  {intent === "apply"
                    ? "Start Your Academic Journey"
                    : "We'd Love to Hear From You"}
                </h3>
                <p className="font-sans text-[13px] leading-[1.6] text-white/60">
                  {intent === "apply"
                    ? "Fill in the form and our admissions team will be in touch within 24 hours."
                    : "Have a question? Our team is here to help you find the right path."}
                </p>
              </div>
            </div>

            {/* ── Right panel (form) ── */}
            <div className="flex-1 bg-white overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-[#f0f0f0]">
                <div>
                  <h2
                    className="font-agatho text-[26px] leading-tight"
                    style={{ color: intent === "apply" ? "#013529" : "#7a5c00" }}
                  >
                    {intent === "apply" ? "Application Form" : "Enquiry Form"}
                  </h2>
                  <p className="font-sans text-[13px] text-brand-gray mt-1">
                    All fields are required
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="w-9 h-9 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#eee] transition-colors"
                >
                  <X size={16} strokeWidth={2} className="text-[#333]" />
                </button>
              </div>

              {/* Form */}
              <motion.form
                className="px-8 py-6 flex flex-col gap-4"
                variants={fieldStagger}
                initial="hidden"
                animate="show"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" placeholder="John"     icon={User} />
                  <Field label="Last Name"  placeholder="Smith"    icon={User} />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Email Address" type="email" placeholder="john@email.com" icon={Mail} />
                  <Field label="Phone Number"  type="tel"   placeholder="+61 400 000 000" icon={Phone} />
                </div>

                {/* Course */}
                <Field
                  label="Course of Interest"
                  placeholder="Select a course…"
                  icon={BookOpen}
                  as="select"
                  options={courses}
                />

                {/* Message */}
                <Field
                  label="Your Message"
                  placeholder="Tell us a bit about yourself and any questions you have…"
                  icon={MessageSquare}
                  as="textarea"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-[10px] text-[14px] font-sans font-medium"
                  style={{
                    color: intent === "apply" ? "#fff" : "#1a0f00",
                    background: intent === "apply"
                      ? "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)"
                      : "linear-gradient(176.49deg, #F0C41A 0.56%, #D6A929 36.4%, #a6860d 89.05%)",
                  }}
                  variants={fieldItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  {intent === "apply" ? "Submit Application" : "Send Enquiry"}
                  <ChevronRight size={15} strokeWidth={2} />
                </motion.button>

                <motion.p
                  variants={fieldItem}
                  className="text-center font-sans text-[11px] text-[#aaa]"
                >
                  By submitting you agree to our{" "}
                  <a href="#" className="underline hover:text-brand-green-darkest transition-colors">Privacy Policy</a>
                </motion.p>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
