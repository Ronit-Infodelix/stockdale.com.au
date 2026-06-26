"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/app/components/ui/Container";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: "Main Campus",
    lines: ["Level 1, 120 Miller Street,", "West Melbourne, VIC 3003, Australia"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["1800 902 480 — Mon to Fri, 9am – 5pm AEST"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@stockdaleinstitute.edu.au", "admissions@stockdaleinstitute.edu.au"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Friday: 9:00 AM – 5:00 PM", "Weekends: By appointment"],
  },
];

const INTEREST_OPTIONS = [
  "Bachelor of Information Technology",
  "Master of Business Analytics",
  "General Enquiry",
  "Admission Information",
  "Scholarships",
  "Other",
];

export default function ContactContent() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* ── Left: contact info ── */}
          <div className="flex flex-col gap-5 py-8">
            {/* Badge */}
            <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-[#d8eee6] text-[#0a3e30] text-[12px] font-sans font-medium w-fit">
              Get in touch
            </span>

            {/* Heading */}
            <h2 className="font-agatho text-[38px] leading-[44px] text-[#0a0a0a] tracking-tight">
              We&apos;d Love to Hear From You
            </h2>

            {/* Body */}
            <p className="font-sans text-[16px] leading-[27px] text-[#6b7280]">
              Whether you&apos;re ready to apply, curious about a specific course, or just want
              to chat with one of our advisors — we&apos;re here to help. Reach us by phone,
              email, or use the form and we&apos;ll get back to you within 1 business day.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-6 pt-5">
              {CONTACT_ITEMS.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex gap-[18px] items-start">
                  <div className="bg-[#0d4a3a] flex items-center justify-center rounded-[10px] shrink-0 w-12 h-12">
                    <Icon size={20} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-sans font-bold text-[15px] leading-6 text-[#0a0a0a]">
                      {title}
                    </p>
                    {lines.map((line) => (
                      <p key={line} className="font-sans text-[14px] leading-[21px] text-[#6b7280]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div className="bg-[#f2f2f2] rounded-[16px] px-10 py-10">
            <h3 className="font-agatho text-[24px] leading-[27px] text-[#0a0a0a] tracking-tight mb-1">
              Send Us a Message
            </h3>
            <p className="font-sans text-[14px] leading-[22px] text-[#6b7280] mb-5">
              Fill in the form below and our team will get back to you within one business day.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Full Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Full Name *">
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-4 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#0d4a3a]"
                  />
                </FormField>
                <FormField label="Email Address *">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-4 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#0d4a3a]"
                  />
                </FormField>
              </div>

              {/* Row 2: Phone + I'm interested in */}
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Phone Number">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+61 4XX XXX XXX"
                    className="w-full bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-4 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#0d4a3a]"
                  />
                </FormField>
                <FormField label="I'm interested in">
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-4 font-sans text-[14px] text-[#0a0a0a] outline-none focus:ring-1 focus:ring-[#0d4a3a] appearance-none"
                  >
                    <option value="" disabled>Please select</option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </FormField>
              </div>

              {/* Subject */}
              <FormField label="Subject">
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this enquiry about?"
                  className="w-full bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-4 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#0d4a3a]"
                />
              </FormField>

              {/* Message */}
              <FormField label="Message *">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  rows={5}
                  className="w-full bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-4 font-sans text-[14px] text-[#0a0a0a] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#0d4a3a] resize-none"
                />
              </FormField>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-white font-sans font-semibold text-[14px] uppercase tracking-[1.12px] hover:opacity-90 transition-opacity drop-shadow-[0px_4px_7px_rgba(13,74,58,0.3)]"
                style={{
                  background: "linear-gradient(134.19deg, #0d4a3a 0%, #11604a 100%)",
                }}
              >
                Send Message <span className="text-[18px] leading-none">›</span>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-sans font-medium text-[13px] text-[#2d2d2d] leading-5">{label}</label>
      {children}
    </div>
  );
}
