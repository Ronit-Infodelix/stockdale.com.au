import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import PoliciesContent from "./components/PoliciesContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/policies-and-procedures");

export default function PoliciesAndProcedures() {
  return (
    <main>
      <PageSchema
        path="/policies-and-procedures"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Policies and Procedures" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/policies-and-procedures/hero.webp"
          title="Policies and Procedures"
          subtitle="Our governance framework - transparent policies and procedures aligned with the TEQSA Higher Education Standards Framework."
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
