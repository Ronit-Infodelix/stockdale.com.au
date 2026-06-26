import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

export default function InternationalStudentsCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-darkest">
      {/* Image — bleeds to the right edge */}
      <div className="absolute inset-y-0 right-0 w-[35%] lg:w-[38%] hidden lg:block">
        <Image
          src="/images/admission/section-2.webp"
          alt="International students"
          fill
          className="object-cover object-center"
        />
        {/* Fade from green on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-darkest via-brand-green-darkest/40 to-transparent" />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="max-w-[52%]">
          {/* Badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-brand-green-light text-[10px] font-sans text-black mb-6">
            Students
          </span>

          {/* Heading */}
          <h2 className="font-agatho text-[50px] leading-[1.1] text-white mb-6">
            International<br />Students
          </h2>

          {/* Body */}
          <p className="font-sans text-[16px] leading-7 text-white/80 mb-10 max-w-xs">
            Develop confidence, capability, and local experience, with support to help you navigate study, work, and life in a new country.
          </p>

          {/* CTA button — white with green text */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-brand-green-darkest text-[14px] font-sans hover:bg-white/90 transition-opacity"
          >
            Know more
            <ChevronRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
