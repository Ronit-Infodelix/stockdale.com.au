import PageHero from "@/app/components/shared/PageHero";
import SplitSection from "@/app/components/shared/SplitSection";
import {
  ParallaxOverlay,
  ParallaxSticky,
} from "@/app/components/ui/ParallaxLayer";

export default function AboutUs() {
  return (
    <>
      <ParallaxSticky className="bg-brand-green-darkest">
        <PageHero
          image="/images/home/students-empowering.png"
          title="About Stockdale"
          subtitle="Building a global community of scholars, one student at a time."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </ParallaxSticky>
      <ParallaxOverlay className="py-20 bg-white">
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
      </ParallaxOverlay>

      <ParallaxOverlay>
        <SplitSection
          title="Our"
          titleAccent="Mission"
          body="To empower students with industry-relevant skills, global perspectives, and the personal support they need to succeed — academically, professionally, and personally — long after graduation."
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
          imageAlt="Students walking on campus"
          imagePosition="right"
          variant="dark"
        />
      </ParallaxOverlay>
    </>
  );
}
