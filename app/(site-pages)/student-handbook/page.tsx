import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import HandbookContent from "./components/HandbookContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/student-handbook");

export default function StudentHandbook() {
  return (
    <main>
      <PageSchema
        path="/student-handbook"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Student Handbook" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/handbook/hero.webp"
          title="Student Handbook"
          subtitle="Your essential guide to studying at Stockdale - enrolment, assessment, policies, and the support services available to you."
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
