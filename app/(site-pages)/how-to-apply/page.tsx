import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import AdmissionsIntro from "./components/AdmissionsIntro";
import ApplicationSteps from "./components/ApplicationSteps";
import RequirementsSection from "./components/RequirementsSection";
import IntakesSection from "./components/IntakesSection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function HowToApply() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
          title="How to Apply"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "#" },
            { label: "How to Apply" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <AdmissionsIntro />
        <ApplicationSteps />
        <RequirementsSection />
        <IntakesSection />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
