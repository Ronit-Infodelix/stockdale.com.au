import PageHero from "@/app/components/shared/PageHero";
import SplitSection from "@/app/components/shared/SplitSection";
import ValuesSection from "./components/ValuesSection";
import CTASection from "../(home)/components/CTASection";

export default function AboutUs() {
  return (
    <>
      <PageHero
        image="/images/home/students-empowering.png"
        title="About Stockdale"
        subtitle="Building a global community of scholars, one student at a time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <SplitSection
        badge="Who we are?"
        title="About Us."
        body={[
          "Stockdale Higher Education Institute was established in the year 2022 in accordance with its constitution. Stockdale purpose is to gain registration as and in the category of Institute of Higher Education and deliver higher education to domestic and international students.",
          "TIA commits to deliver higher education in line with its vision and mission which are supported by set of values. TIA commits to freedom of speech and academic freedom as underlying principles to all its activities.",
        ]}
        image="/images/about/hero.png"
        imageAlt="Students outside Stockdale campus"
        imagePosition="left"
      />

      <SplitSection
        title="Our"
        titleAccent="Mission"
        body="To empower students with industry-relevant skills, global perspectives, and the personal support they need to succeed — academically, professionally, and personally — long after graduation."
        image="/images/about/mission.png"
        imageAlt="Students walking on campus"
        imagePosition="right"
        variant="dark"
        className="min-h-140"
      />

      <SplitSection
        title="Our"
        titleAccent="Mission"
        body="To empower students with industry-relevant skills, global perspectives, and the personal support they need to succeed — academically, professionally, and personally — long after graduation."
        image="/images/about/vision.png"
        imageAlt="Students walking on campus"
        imagePosition="left"
        variant="dark"
        className="min-h-140"
      />

      <div className="z-10">
        <ValuesSection />
        <CTASection />
      </div>
    </>
  );
}
