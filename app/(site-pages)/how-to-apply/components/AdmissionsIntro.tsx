import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

export default function AdmissionsIntro() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-[#d8eee6] text-[#0a3e30] text-[12px] font-sans font-medium w-fit">
              Admissions
            </span>
            <h2 className="font-agatho text-[36px] leading-[42px] text-[#0a0a0a] tracking-tight">
              Your Journey to Stockdale Starts Here
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-[29px] text-[#6b7280]">
              <p>
                Applying to Stockdale Higher Education Institute is straightforward. Whether
                you&apos;re a domestic or international student, our friendly admissions team is
                here to guide you through every step of the process.
              </p>
              <p>
                Most applications are reviewed within 5–7 business days, and successful applicants
                receive an official Letter of Offer that they can use to plan enrolment,
                accommodation and — for international students — their student visa.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[14px] font-sans font-medium uppercase tracking-[0.84px] hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Talk to an advisor
                <ChevronRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png"
              alt="Students studying at Stockdale"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
