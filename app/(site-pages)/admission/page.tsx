import PageHero from "@/app/components/shared/PageHero";
import AdmissionSections from "./components/AdmissionSections";
import InternationalStudentsCTA from "./components/InternationalStudentsCTA";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/admission");

export default function Admission() {
  return (
    <main>
      <PageSchema
        path="/admission"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Graduate Course" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/admission/hero.webp"
          title="Admission"
          subtitle="Your pathway to higher education at Stockdale begins here - explore entry requirements, application steps, and the support available to domestic and international students."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Graduate Course" },
          ]}
        >
          {/* Quick-action buttons sit inside the hero above the title */}
        </PageHero>
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <AdmissionSections />
        <InternationalStudentsCTA />
      </ParallaxOverlay>
    </main>
  );
}
