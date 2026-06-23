import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[865px] overflow-hidden bg-[#050e1a]">

      {/* Globe background image — place file at /public/images/hero-globe.jpg */}
      <Image
        src="/images/hero-globe.jpg"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        priority
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#000]/30" />

      {/* Bottom-left decorative angular shapes */}
      <div className="absolute bottom-0 left-0 w-[420px] h-[280px] pointer-events-none">
        {/* shape 1 */}
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[160px] border border-brand-gold-dark"
          style={{
            background: "linear-gradient(135deg, #28554a, #072722)",
            transform: "rotate(38.23deg) skewX(-3.14deg)",
            transformOrigin: "bottom left",
          }}
        />
        {/* shape 2 */}
        <div
          className="absolute bottom-[-80px] left-[-80px] w-[420px] h-[160px] border-2 border-brand-gold-dark"
          style={{
            background: "linear-gradient(212deg, #014F3D, #013529)",
            transform: "rotate(32.63deg) skewX(-2.97deg)",
            transformOrigin: "bottom left",
          }}
        />
        {/* shape 3 */}
        <div
          className="absolute bottom-[-100px] left-[-100px] w-[440px] h-[160px]"
          style={{
            background: "linear-gradient(224deg, rgba(1,79,61,0) 27%, #014F3D 40%, #013529 55%)",
            transform: "rotate(27.48deg) skewX(-2.7deg)",
            transformOrigin: "bottom left",
          }}
        />
      </div>

      {/* Bottom-right decorative angular shapes */}
      <div className="absolute bottom-0 right-0 w-[420px] h-[280px] pointer-events-none">
        {/* shape 1 */}
        <div
          className="absolute bottom-[-60px] right-[-60px] w-[400px] h-[160px] border border-brand-gold-dark"
          style={{
            background: "linear-gradient(136deg, #014F3D 27%, #013529 58%)",
            transform: "rotate(-34.8deg) skewX(3.05deg)",
            transformOrigin: "bottom right",
          }}
        />
        {/* shape 2 */}
        <div
          className="absolute bottom-[-80px] right-[-80px] w-[420px] h-[160px] border border-brand-gold"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, #eac458, #d7c276, #bba05b, #a07e40, #845c25)",
            transform: "rotate(-42.19deg) skewX(3.19deg)",
            transformOrigin: "bottom right",
          }}
        />
        {/* shape 3 */}
        <div
          className="absolute bottom-[-100px] right-[-100px] w-[440px] h-[160px] border border-brand-gold-dark"
          style={{
            background: "linear-gradient(174deg, #28554a 14%, #072722 35%, #072722 62%)",
            transform: "rotate(45.73deg) skewX(-3.18deg)",
            transformOrigin: "bottom right",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-16">

        {/* Gold pill badge */}
        <div
          className="flex items-center gap-2 px-6 py-1.5 rounded-full border border-brand-gold mb-8"
          style={{ background: "rgba(234,196,88,0.2)" }}
        >
          <span
            className="text-[13.6px] font-sans font-medium uppercase tracking-wide"
            style={{
              background: "linear-gradient(90deg, #8b732f 14.6%, #eac458 43.5%, #8b732f 101.7%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ranked #1 in Graduate outcome
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
          {/* Apply Now — gold gradient */}
          <button
            className="flex items-center gap-2 px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans"
            style={{
              background:
                "linear-gradient(176.5deg, #F0C41A 0.56%, #D6A929 36.4%, #a6860d 89.05%)",
            }}
          >
            Apply Now
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path
                d="M1 1L3 4L1 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Enquire — white outline */}
          <button className="flex items-center gap-2 px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans border border-white">
            Enquire
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path
                d="M1 1L3 4L1 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
