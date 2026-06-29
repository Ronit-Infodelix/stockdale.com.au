"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus, Minus } from "lucide-react";
import Container from "@/app/components/ui/Container";

/* ─── Tabs ───────────────────────────────────────────────────────────────── */
const TABS = [
  { id: "fees", label: "Fees" },
  { id: "refunds", label: "Refunds" },
  { id: "tia-default", label: "Stockdale Default" },
  { id: "payment-of-refunds", label: "Payment of Refunds" },
];

/* ─── Refunds content per tab ────────────────────────────────────────────── */
type RefundTab = "domestic" | "international";

const REFUND_CONTENT: Record<
  RefundTab,
  { heading: string; intro: string; items: (string | { text: string; sub?: string[] })[] }
> = {
  domestic: {
    heading: "Eligibility for Refunds:",
    intro:
      "Once a student becomes enrolled in a course at Stockdale, they are liable for tuition, student amenities, and service fees. Students who apply for a refund must follow the procedures detailed below.",
    items: [
      "Student contributions, tuition fees, and services fees must be paid on or before the due date for an enrolment period.",
      {
        text: "If applying for a refund, deferment, or withdrawal, all applications must be made on the Application for Refund Form or Application for Deferment of Withdrawal Form and emailed to admin@stockdale.edu.au",
      },
      "If a refund is sought because of a variation in enrolment, students must first seek advice from Student Administration, and any variations must comply with the Student Enrolment Variation Policy and Procedure.",
      {
        text: "A full refund of fees will be paid when one of the following occurs:",
        sub: [
          "A student withdraws from a unit or course before the applicable census date.",
          "An offer of enrolment is withdrawn by Stockdale (unless the offer was made based on incorrect or incomplete information being supplied by the applicant).",
          "Stockdale is unable to provide the course or unit in which the student is enrolled.",
        ],
      },
      "A fee refund is not automatic; applications must be made on the requisite form and submitted to Stockdale at the time of withdrawal.",
      "No refund is payable when a student withdraws after the Census Date for that course or unit of study.",
    ],
  },
  international: {
    heading: "Eligibility for Refunds:",
    intro:
      "Once a student becomes enrolled in a course at Stockdale, they are liable for tuition, student amenities, and service fees. Students who apply for a refund must follow the procedures detailed below. International students are also entitled to protections under the ESOS Act.",
    items: [
      "Student contributions, tuition fees, and services fees must be paid on or before the due date for an enrolment period.",
      {
        text: "If applying for a refund, deferment, or withdrawal, all applications must be made on the Application for Refund Form or Application for Deferment of Withdrawal Form and emailed to admin@stockdale.edu.au",
      },
      "If a refund is sought because of a variation in enrolment, students must first seek advice from Student Administration, and any variations must comply with the Student Enrolment Variation Policy and Procedure.",
      {
        text: "A full refund of fees will be paid when one of the following occurs:",
        sub: [
          "A student withdraws from a unit or course before the applicable census date.",
          "An offer of enrolment is withdrawn by Stockdale (unless the offer was made based on incorrect or incomplete information being supplied by the applicant).",
          "Stockdale is unable to provide the course or unit in which the student is enrolled.",
        ],
      },
      "A fee refund is not automatic; applications must be made on the requisite form and submitted to Stockdale at the time of withdrawal.",
      "No refund is payable when a student withdraws after the Census Date for that course or unit of study.",
    ],
  },
};

/* ─── Helper: green button ───────────────────────────────────────────────── */
function GreenBtn({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-sans font-medium uppercase tracking-[0.78px] hover:opacity-90 transition-opacity"
      style={{
        background:
          "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
      }}
    >
      {label}
      <ChevronRight size={12} strokeWidth={2} />
    </Link>
  );
}

function OutlinedBtn({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#013529] text-brand-green-darkest bg-white text-[14px] font-sans hover:bg-brand-green-darkest hover:text-white transition-colors"
    >
      {label}
      <ChevronRight size={12} strokeWidth={2} />
    </Link>
  );
}

/* ─── Accordion section ──────────────────────────────────────────────────── */
function PolicySection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <section id={id} className="scroll-mt-20">
      <div className="border-t border-gray-200 mb-8" />
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 text-left group mb-0"
      >
        <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] max-w-[640px]">
          {heading}
        </h2>
        <span className="mt-2 shrink-0 text-brand-gray group-hover:text-brand-green-darkest transition-colors">
          {open ? <Minus size={22} /> : <Plus size={22} />}
        </span>
      </button>
      {open && <div className="mt-6">{children}</div>}
    </section>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function FeesContent() {
  const [activeTab, setActiveTab] = useState("fees");
  const [refundTab, setRefundTab] = useState<RefundTab>("domestic");

  /* Scroll-spy */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveTab(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  const refundData = REFUND_CONTENT[refundTab];

  return (
    <>
      {/* ── Sticky tab bar ── */}
      <div className="sticky top-18 z-40 bg-brand-green-darkest overflow-x-auto">
        <Container>
          <div className="flex items-stretch">
            {TABS.map(({ id, label }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`px-6 py-5 shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.96px] transition-colors whitespace-nowrap ${
                    active
                      ? "bg-brand-green-light text-brand-green-darkest"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── Breadcrumb / action bar ── */}
      <div className="bg-[#fafafa] border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            <nav className="flex items-center gap-1 font-sans text-[14px]">
              <Link href="/" className="text-black hover:underline">Home</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <Link href="/how-to-apply" className="text-black hover:underline">Admission</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-brand-gray">Fees, Refunds and Charges</span>
            </nav>
            <div className="flex items-center gap-3">
              <GreenBtn label="Apply Now" href="/how-to-apply" />
              <OutlinedBtn label="How to Apply" href="/how-to-apply" />
            </div>
          </div>
        </Container>
      </div>

      {/* ── Section 1: Fees ── */}
      <section id="fees" className="bg-[#f8f5eb] py-14 scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: fee info */}
            <div>
              <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-3">
                Fees
              </h2>
              <p className="font-sans text-[16px] leading-[28px] text-brand-gray mb-6">
                Course: Bachelor of Information Technology
              </p>

              {/* Domestic fee box */}
              <div className="bg-brand-green-darkest rounded-xl px-8 py-7 mb-4">
                <p className="font-sans text-[16px] leading-[28px] text-white mb-1">
                  Total course fees for Domestic Students:
                </p>
                <p className="font-sans text-[16px] leading-[28px] text-[#d6a929]">
                  AUD 43,200 (AUD 1,800 per unit and AUD 7,200 per semester)
                </p>
              </div>

              {/* International fee box */}
              <div className="bg-brand-green-darkest rounded-xl px-8 py-7">
                <p className="font-sans text-[16px] leading-[28px] text-white mb-1">
                  Total course fees for International Students:
                </p>
                <p className="font-sans text-[16px] leading-[28px] text-[#d6a929]">
                  AUD 50,400 (AUD 2,100 per unit and AUD 8,400 per semester)
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/fee/section.webp"
                alt="Students studying at Stockdale"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Non-Tuition Fees (continuation of Fees section) ── */}
      <section className="bg-white py-14">
        <Container>
          <div className="max-w-[780px]">
            <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-6">
              Non-Tuition Fees
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-[35px] text-brand-gray">
              <p className="text-[#0a0a0a]">
                The institute charges both tuition and non-tuition fees. Non-tuition fees may
                include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>application fees</li>
                <li>materials fees</li>
                <li>student services and amenities fees</li>
                <li>late payment or re-enrolment fees</li>
                <li>graduation or replacement document fees</li>
                <li>
                  administrative fees associated with deferrals, reassessments or special
                  considerations.
                </li>
              </ul>
              <p>
                All tuition and non-tuition fees are subject to annual indexation, applied at the
                commencement of each academic year.
              </p>
              <p>
                The rate of indexation is determined by the Board of Directors based on increases
                in operational costs or the Consumer Price Index (CPI), whichever is higher and
                must be approved prior to publication of the annual Fee Schedule.
              </p>
              <p>
                Students are provided at least 30 business days&apos; written notice of any
                indexed increase prior to the start of the relevant study period.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Accordion sections ── */}
      <div className="bg-white pb-16">
        <Container>
          <div className="max-w-[780px] space-y-10">

            {/* Refunds */}
            <PolicySection id="refunds" heading="Refunds">
              {/* Domestic / International sub-tabs */}
              <div className="flex items-center border-b border-black mb-6">
                {(
                  [
                    { key: "domestic", label: "Domestic Students" },
                    { key: "international", label: "International Students" },
                  ] as { key: RefundTab; label: string }[]
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setRefundTab(key)}
                    className="relative px-3 py-2 font-sans text-[13px] font-medium uppercase tracking-wide mr-4"
                  >
                    <span className={refundTab === key ? "text-[#d6a929]" : "text-black"}>
                      {label}
                    </span>
                    {refundTab === key && (
                      <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#e5bd1b]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-4 font-sans text-[16px] leading-[35px] text-brand-gray">
                <p className="font-bold text-[#0a0a0a]">{refundData.heading}</p>
                <p>{refundData.intro}</p>
                <ol className="list-decimal pl-6 space-y-3">
                  {refundData.items.map((item, i) => {
                    if (typeof item === "string") {
                      return <li key={i}>{item}</li>;
                    }
                    return (
                      <li key={i}>
                        {item.text}
                        {item.sub && (
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            {item.sub.map((s, j) => (
                              <li key={j}>{s}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </PolicySection>

            {/* Stockdale Default */}
            <PolicySection id="tia-default" heading="Stockdale Default">
              <div className="space-y-4 font-sans text-[16px] leading-[35px] text-brand-gray">
                <p>
                  The Australian Government&apos;s Tuition Protection Service (TPS) ensures that
                  international students either receive a refund of their unspent tuition fees or
                  complete their studies in another course or with another education provider if
                  Stockdale is unable to fully deliver the course of study.
                </p>
                <p>
                  Stockdale may be considered in default if the course does not start on the agreed
                  starting date; the course ceases to be provided at any time after it commenced
                  but before its conclusion; the course is not provided because of a condition
                  imposed by TEQSA or CRICOS, or the registration has been suspended or
                  cancelled, or Stockdale withdraws the offer of enrolment.
                </p>
              </div>
            </PolicySection>

            {/* Payment of Refunds */}
            <PolicySection id="payment-of-refunds" heading="Payment of Refunds">
              <ol className="list-decimal pl-6 space-y-3 font-sans text-[16px] leading-[35px] text-brand-gray">
                <li>
                  When a decision is made to refund paid tuition fees, the refund must be paid
                  into the same bank account that was used to pay the tuition fees or deposit.
                </li>
                <li>
                  Refunds paid to overseas bank accounts will have the Australian dollar amount
                  converted into the currency of the country where the bank account is held.
                </li>
                <li>
                  Fees by overseas banking institutions will be deducted from the refund payment
                  and are beyond Stockdale&apos;s control. Stockdale is not responsible for any amounts
                  deducted or exchange rate differences that have occurred during foreign currency
                  exchange.
                </li>
                <li>
                  In accordance with the ESOS Act Section 28 (3), refunds will be made within 4
                  weeks of receiving the written application.
                </li>
                <li>
                  Education providers must report students who do not comply with their
                  visa&apos;s attendance or course progress requirements through the Provider
                  Registration and International Student Management System (PRISMS) system. For
                  advice contact the PRISMS Help Line at 02 6240 7647 or email{" "}
                  <a
                    href="mailto:prisms@education.gov.au"
                    className="underline text-brand-green-darkest hover:opacity-75"
                  >
                    prisms@education.gov.au
                  </a>
                </li>
                <li>
                  Students must be informed in writing of the intention to report and have access
                  to a complaints and appeals process under the National Code of Practice of
                  Providers of Education and Training for Overseas Students.
                </li>
              </ol>
            </PolicySection>

          </div>
        </Container>
      </div>
    </>
  );
}
