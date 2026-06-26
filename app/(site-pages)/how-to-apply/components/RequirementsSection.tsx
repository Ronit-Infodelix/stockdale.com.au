import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

const REQUIREMENTS = [
  "Certified academic transcripts & certificates",
  "Proof of English proficiency (IELTS / PTE / equivalent)",
  "Valid passport or government-issued photo ID",
  "Personal statement (graduate programs)",
  "Two academic or professional references",
  "CV / résumé (graduate & professional programs)",
];

function GoldBullet({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-[18px] min-h-[38px]">
      <span className="w-2 h-2 rounded-[4px] bg-[#e6b820] shrink-0" />
      <span className="font-sans text-[14px] leading-[22px] text-[#2d2d2d]">{text}</span>
    </li>
  );
}

export default function RequirementsSection() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="relative aspect-[590/496] rounded-xl overflow-hidden">
            <Image
              src="/images/how-to-apply/Requirements.webp"
              alt="Student requirements"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: text */}
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-[#d8eee6] text-[#0a3e30] text-[12px] font-sans font-medium w-fit">
              Requirements
            </span>
            <h2 className="font-agatho text-[36px] leading-[42px] text-[#0a0a0a] tracking-tight">
              What You&apos;ll Need
            </h2>
            <p className="font-sans text-[16px] leading-[29px] text-[#6b7280]">
              Entry requirements vary by course and level, but most applications will need the
              following documents. Our admissions team can guide you on anything you&apos;re unsure
              about.
            </p>

            <ul className="flex flex-col mt-1">
              {REQUIREMENTS.map((item) => (
                <GoldBullet key={item} text={item} />
              ))}
            </ul>

            <div className="pt-1">
              <Link
                href="/graduation-courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[14px] font-sans font-medium uppercase tracking-[0.84px] hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Browse Courses
                <ChevronRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
