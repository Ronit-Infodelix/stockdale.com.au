import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

export default function ScholarshipIntro() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png"
              alt="Students at Stockdale"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <span className="inline-flex items-center px-3 py-1 rounded-sm bg-brand-green-darkest text-white text-[11px] font-sans font-semibold uppercase tracking-wide w-fit">
              Financial Support
            </span>

            <h2 className="font-agatho text-[40px] leading-[50px] text-black">
              Investing in Your Future
            </h2>

            <div className="space-y-4 font-sans text-[16px] leading-7 text-brand-gray">
              <p>
                Financial barriers should never stand between an ambitious student and a world-class
                education. Our scholarship programmes are designed to recognise excellence, support
                equity, and open doors for students from all backgrounds.
              </p>
              <p>
                Scholarships are awarded annually across our undergraduate and postgraduate
                programmes. Eligible students can receive partial or full fee waivers, along with
                access to additional career and mentoring support.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white text-[14px] font-sans hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Apply Now
                <ChevronRight size={13} strokeWidth={2} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-black text-black text-[14px] font-sans hover:bg-black/5 transition-colors"
              >
                Enquire Now
                <ChevronRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
