import PageHero from "@/app/components/shared/PageHero";
import AdmissionSections from "./components/AdmissionSections";
import InternationalStudentsCTA from "./components/InternationalStudentsCTA";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function Admission() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/admission/hero.webp"
          title="Admission"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Graduate Course" },
          ]}
        >
          {/* Quick-action buttons sit inside the hero above the title */}
        </PageHero>
      </ParallaxSticky>
      <ParallaxOverlay>
        <AdmissionSections />
        <InternationalStudentsCTA />
      </ParallaxOverlay>
    </main>
  );
}
