import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import PoliciesContent from "./components/PoliciesContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function PoliciesAndProcedures() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/policies-and-procedures/hero.webp"
          title="Policies and Procedures"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Policies and Procedures" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <PoliciesContent />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
