import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import ScholarshipIntro from "./components/ScholarshipIntro";
import AvailableScholarships from "./components/AvailableScholarships";
import WhoCanApply from "./components/WhoCanApply";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/scholarships");

export default function Scholarships() {
  return (
    <main>
      <PageSchema
        path="/scholarships"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Scholarships" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/gallery/students-celebrating.webp"
          title="Scholarships"
          subtitle="Helping you reach your potential - financial support for ambitious students."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Scholarships" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <ScholarshipIntro />
        <AvailableScholarships />
        <WhoCanApply />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
