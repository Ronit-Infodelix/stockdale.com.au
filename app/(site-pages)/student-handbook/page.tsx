import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import HandbookContent from "./components/HandbookContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function StudentHandbook() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/handbook/hero.webp"
          title="Student Handbook"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Student Handbook" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <HandbookContent />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
