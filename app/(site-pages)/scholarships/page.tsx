import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import ScholarshipIntro from "./components/ScholarshipIntro";
import AvailableScholarships from "./components/AvailableScholarships";
import WhoCanApply from "./components/WhoCanApply";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function Scholarships() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/gallery/students-celebrating.webp"
          title="Scholarships"
          subtitle="Helping you reach your potential — financial support for ambitious students."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Scholarships" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <ScholarshipIntro />
        <AvailableScholarships />
        <WhoCanApply />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
