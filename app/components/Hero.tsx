import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-140px)] overflow-hidden bg-[#050e1a]">
      {/* Static poster — always rendered as base layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/hero/banner.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] pointer-events-none"
        aria-hidden="true"
      />

      {/* Video — covers poster once loaded; poster keeps it seamless until then */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover object-[center_-20%]"
        src="/videos/globe.mp4"
        poster="/images/home/hero/banner.png"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom-left decorative image */}
      <div className="h-1/3 absolute w-full bottom-0 grid grid-cols-3">
        <div className="relative -left-1/2 top-1/3">
          <Image
            src="/images/hero/left.png"
            alt=""
            fill
            className="pointer-events-none select-none object-cover overflow-visible"
            aria-hidden="true"
          />
        </div>
        <div className=""></div>

        {/* Bottom-right decorative image */}
        <div className="relative -right-1/2 top-1/2">
          <Image
            src="/images/hero/right.png"
            alt=""
            fill
            className=" pointer-events-none select-none object-cover overflow-visible"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Hero content — upper portion of the hero */}
      <div className="relative z-10 w-full pt-[80px]">
        <Container className="flex flex-col items-center text-center">
          {/* Gold pill badge */}
          <div
            className="flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#f0c41a] mb-8"
            style={{ background: "rgba(234,196,88,0.2)" }}
          >
            <span
              className="text-[13.6px] font-sans font-medium uppercase tracking-wide"
              style={{
                background:
                  "linear-gradient(90deg, #8b732f 14.6%, #eac458 43.5%, #8b732f 101.7%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              • Ranked #1 in Graduate outcome •
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-agatho text-[70px] leading-tight text-white max-w-[936px]">
            A Global Community of Scholars
          </h1>

          {/* Subheading */}
          <p
            className="font-sans text-[24px] text-white uppercase mt-4 mb-10"
            style={{ letterSpacing: "2.64px" }}
          >
            Innovate &nbsp;|&nbsp; Create &nbsp;|&nbsp; Succeed
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            {/* Enquire — white outline */}
            <button className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans border border-white whitespace-nowrap">
              Enquire
              <ChevronRight size={14} strokeWidth={2} />
            </button>

            {/* Apply Now — gold gradient */}
            <button
              className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(176.49deg, #F0C41A 0.56%, #D6A929 36.4%, #a6860d 89.05%)",
              }}
            >
              Apply Now
              <ChevronRight size={14} strokeWidth={2} />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
