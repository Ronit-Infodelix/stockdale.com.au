import PageHero from "@/app/components/shared/PageHero";
import LearningTabs from "./components/LearningTabs";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function LearningAndTeaching() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
          title="Learning and Teaching Approach"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Learning and Teaching" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <LearningTabs />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
