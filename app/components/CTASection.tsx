import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Container from "./ui/Container";

export default function CTASection() {
  return (
    <section
      className="relative overflow-visible"
      style={{
        minHeight: 513,
        background:
          "linear-gradient(160.14deg, #fff4c9 21.93%, #f0c41a 78.07%)",
      }}
    >
      <Container className="relative flex items-center" style={{ minHeight: 513 }}>
        {/* Left — heading + description + Apply Now */}
        <div className="flex flex-col gap-6 max-w-[450px] py-20 z-10">
          <h2 className="font-agatho text-[60px] leading-[1.1] text-black max-w-[508px]">
            Ready to Start Your Journey?
          </h2>
          <p className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[438px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            facilisis rhoncus placerat. Suspendisse ac dui et.
          </p>
          <button
            className="self-start flex items-center justify-center gap-2 rounded-[8px] text-white text-[14px] font-sans"
            style={{
              width: 158,
              height: 50,
              background:
                "linear-gradient(177.19deg, #43a48e 0.56%, #014f3d 36.4%, #013529 89.05%)",
            }}
          >
            Apply Now
            <ChevronRight size={13} strokeWidth={2} />
          </button>
        </div>

        {/* Centre — two CTA buttons, positioned between content and girl */}
        <div
          className="absolute flex flex-col gap-4 z-10"
          style={{ left: 510, top: "50%", transform: "translateY(-50%)" }}
        >
          <button
            className="bg-white text-[#0b0b0b] text-[16px] font-sans rounded-[8px] flex items-center justify-center"
            style={{ width: 159, height: 50 }}
          >
            Find Your Degree
          </button>
          <button
            className="bg-[#0b0b0b] text-white text-[16px] font-sans rounded-[8px] flex items-center justify-center"
            style={{ width: 159, height: 50 }}
          >
            Enquire Now
          </button>
        </div>
      </Container>

      {/* Graduate girl — 741px tall, 228px overflows above this section into the map */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ width: 560, height: 741 }}
      >
        <Image
          src="/images/home/graduate-girl.png"
          alt="Graduate student"
          fill
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
