import PageHero from "@/app/components/shared/PageHero";
import LearningTabs from "./components/LearningTabs";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function LearningAndTeaching() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/learning/hero.webp"
          title="Learning and Teaching Approach"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Learning and Teaching" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <LearningTabs />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
