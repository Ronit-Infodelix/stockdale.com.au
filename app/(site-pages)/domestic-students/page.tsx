import PageHero from "@/app/components/shared/PageHero";
import StudentRequirementsContent from "./components/StudentRequirementsContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function DomesticStudents() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/domestic/hero.webp"
          title="Domestic Students"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/how-to-apply" },
            { label: "Domestic Student" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <StudentRequirementsContent variant="domestic" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
