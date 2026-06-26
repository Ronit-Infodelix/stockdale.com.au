import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";

const HIGHLIGHTS = [
  "Academic requirements",
  "Assessment and progression",
  "Student conduct and expectations",
  "Support services and complaints processes",
];

export default function HandbookContent() {
  return (
    <Section className="bg-white">
      <Container>
        {/* Title + intro */}
        <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
          Student Handbook
        </h2>

        <div className="max-w-xl mb-6">
          <p className="font-sans font-medium text-[16px] leading-7 text-black mb-3">
            The Student Handbook is a key resource for students and includes information about:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="font-sans text-[16px] leading-7 text-brand-gray">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Encouraged text + download button */}
        <div className="flex items-center justify-between gap-6 mb-10">
          <p className="font-sans text-[20px] leading-7 text-black">
            Students are encouraged to familiarise themselves with the Handbook.
          </p>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white text-[14px] font-sans hover:opacity-90 transition-opacity"
            style={{
              background:
                "linear-gradient(177.13deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
            }}
          >
            Download Now
            <ChevronRight size={14} strokeWidth={2} />
          </a>
        </div>

        {/* PDF preview placeholder */}
        <div className="relative w-full bg-[#d9d9d9] rounded-sm" style={{ minHeight: 580 }}>
          <div className="absolute inset-[10px] bg-[#f6f6f6] flex items-end justify-center pb-16">
            <span className="font-sans text-[72px] font-normal leading-none text-[#e0e0e0] select-none">
              Preview
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
