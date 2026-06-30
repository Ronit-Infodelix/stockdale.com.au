import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

export default function ReadyToApplyCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-darkest">
      {/* Student image bleeds to the left edge */}
      <div className="absolute inset-y-0 left-0 w-[48%] hidden lg:block">
        <Image
          src="/images/graduation/hero.webp"
          alt="Student ready to apply"
          fill
          className="object-cover object-center"
        />
        {/* Fade to green on the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-brand-green-darkest via-brand-green-darkest/40 to-transparent" />
      </div>

      <Container className="relative py-24 lg:py-32">
        {/* Text aligned to the right half */}
        <div className="ml-auto max-w-[48%]">
          {/* Badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-brand-green-light text-[10px] font-sans text-black mb-6">
            Explore
          </span>

          {/* Heading */}
          <h2 className="font-agatho text-[50px] leading-[1.1] text-white mb-6">
            Ready to Apply?
          </h2>

          {/* Body */}
          <p className="font-sans text-[16px] leading-6 text-white/80 mb-10 max-w-[305px]">
            Discover the key steps and requirements to apply for your chosen program.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/how-to-apply"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black text-[14px] font-sans hover:bg-white/90 transition-opacity"
            >
              How to Apply
              <ChevronRight size={14} strokeWidth={2} />
            </Link>
            <Link
              href="/how-to-apply"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white text-white text-[14px] font-sans hover:bg-white/10 transition-colors"
            >
              Entry Requirements
              <ChevronRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
