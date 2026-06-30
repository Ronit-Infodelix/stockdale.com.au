import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import Image from "next/image";

const CARD_GRADIENT =
  "linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.18) 100%), linear-gradient(170deg, #43A48E 2%, #014F3D 44%, #013529 110%)";

const VALUES = [
  {
    title: "Student-Centred",
    description:
      "Effective and innovative teaching paired with student support services focused on wellbeing, safety, outcomes, and success.",
  },
  {
    title: "Excellence in Teaching & Learning",
    description:
      "The highest personal and professional standards in delivery, with a commitment to integrity, innovation, and creativity that produces industry- and world-ready graduates.",
  },
  {
    title: "Equity, Diversity & Inclusivity",
    description:
      "Honouring a culturally diverse community and providing everyone with quality of experience, opportunities, and success.",
  },
  {
    title: "Ethically Minded",
    description:
      "Upholding the highest ethical standards with transparency, accountability, and responsible management of finances and environment.",
  },
];

export default function ValuesSection() {
  return (
    <Section className="bg-white">
      {/* ── Centred header ── */}
      <Container className="text-center mb-4">
        <h2 className="font-agatho text-[40px] leading-tight text-black tracking-tight">
          Our <span className="text-brand-gold-dark">Values</span>
        </h2>
        <p className="font-sans text-[13px] text-gray-500">
          The principles that guide our teaching, our partnerships and our
          community.
        </p>
      </Container>

      {/* ── Image + overlapping cards ── */}
      <div className="relative">
        {/* Photo — fades to white on the left */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 500 }}
        >
          <div className="absolute right-0 inset-y-0 w-full">
            <Image
              src="/images/about/value.webp"
              alt="Students on campus"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Value cards — overlap the bottom of the image */}
        <Container className="-mt-22 relative z-10 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-[13px] border border-brand-gold-dark flex flex-col gap-4 p-6"
                style={{ background: CARD_GRADIENT, minHeight: 300 }}
              >
                <h3 className="font-agatho text-[24px] leading-tight text-white">
                  {v.title}
                </h3>
                <p className="font-sans text-[14px] leading-5 text-white/90">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
