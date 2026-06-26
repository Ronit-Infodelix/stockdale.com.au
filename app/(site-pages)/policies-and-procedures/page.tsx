import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import PoliciesContent from "./components/PoliciesContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function PoliciesAndProcedures() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
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
