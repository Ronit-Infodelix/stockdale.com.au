import Image from "next/image";
import Container from "./ui/Container";
import Section from "./ui/Section";

export default function EmpoweringStudents() {
  return (
    <Section className="flex flex-col justify-end h-screen w-full overflow-hidden">
      {/* Students image with gradient overlay fading to white */}
      <Container className="inset-0 flex-1 h-full absolute">
        <Image
          src="/images/home/students-empowering.png"
          alt="Students talking near college building"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Gradient overlay — matches Figma: transparent → white from 4% → 61% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(177.13deg, rgba(255,255,255,0) 1.56%, rgba(255,255,255,0) 3.83%, rgb(255,255,255) 61.34%, rgb(255,255,255) 80.40%)",
          }}
        />
      </Container>

      {/* Text content */}
      <Container className="flex flex-col items-center text-center mt-auto relative">
        <h2 className="font-agatho text-[63px] leading-tight text-[#013529]">
          Empowering Students for Global Success
        </h2>
        <p className="font-sans text-[16px] leading-[28px] text-[#767676] max-w-[834px] text-center mt-4">
          We provide high-quality education focused on practical skills, career
          outcomes, and student growth. Our supportive learning environment
          helps students gain confidence, knowledge, and real-world experience.
        </p>
      </Container>
    </Section>
  );
}
