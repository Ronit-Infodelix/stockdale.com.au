import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import HandbookContent from "./components/HandbookContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function StudentHandbook() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
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
