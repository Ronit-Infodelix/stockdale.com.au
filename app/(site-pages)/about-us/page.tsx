import PageHero from "@/app/components/shared/PageHero";
import SplitSection from "@/app/components/shared/SplitSection";
import ValuesSection from "./components/ValuesSection";
import CredentialsSection from "./components/CredentialsSection";
import {
  ParallaxOverlay,
  ParallaxSticky,
} from "@/app/components/ui/ParallaxLayer";
import CTASection from "../(home)/components/CTASection";

export default function AboutUs() {
  return (
    <main>
      <ParallaxSticky className="bg-brand-green-darkest" top="0">
        <PageHero
          image="/images/home/students-empowering.webp"
          title="About Stockdale"
          subtitle="Stockdale Higher Education Institute is an Australian higher education provider committed to delivering rigorous, industry-relevant qualifications."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </ParallaxSticky>
      <ParallaxSticky className="py-20 bg-white" top="0">
        <SplitSection
          badge="About Stockdale"
          title="About Stockdale Higher Education Institute"
          body={[
            "Stockdale Higher Education Institute is an Australian higher education provider based in West Melbourne, Victoria, delivering professional qualifications to domestic and international students.",
            "Established in 2026, the Institute is registered with the Tertiary Education Quality and Standards Agency (TEQSA).",
            "We are committed to freedom of speech and academic freedom as principles that underpin everything we do — from teaching and research to the way we engage with students, staff, and the wider community.",
          ]}
          image="/images/about/hero.webp"
          imageAlt="Students outside Stockdale campus"
          imagePosition="left"
        />
      </ParallaxSticky>

      <ParallaxSticky>
        <SplitSection
          title="Our"
          titleAccent="Mission"
          body="To deliver rigorous, industry-relevant higher education that develops capable graduates, supports student wellbeing and success, and contributes to the advancement of the professions we serve."
          image="/images/about/mission.webp"
          imageAlt="Students walking on campus"
          imagePosition="right"
          variant="dark"
          className="min-h-140"
        />
      </ParallaxSticky>
      <ParallaxSticky>
        <SplitSection
          title="Our"
          titleAccent="Vision"
          body="To be recognised for leadership in delivering professional education that prepares students to make an impactful contribution to industry and society."
          image="/images/about/vision.webp"
          imageAlt="Students walking on campus"
          imagePosition="left"
          className="min-h-140"
        />
      </ParallaxSticky>
      <ParallaxSticky>
        <SplitSection
          title="Our"
          titleAccent="Promise"
          body="Innovate, Create, Succeed — your higher education starts here."
          image="/images/about/hero.webp"
          imageAlt="Students at Stockdale"
          imagePosition="right"
          variant="dark"
          className="min-h-140"
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <ValuesSection />
        <CredentialsSection />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
