import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import CampusTabs from "./components/CampusTabs";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/our-campus");

export default function OurCampus() {
  return (
    <main>
      <PageSchema
        path="/our-campus"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Campus" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/campus/hero.webp"
          title="Our Campus"
          subtitle="Modern learning spaces and facilities in the heart of West Melbourne, designed to support how you study, connect, and grow."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our Campus" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <CampusTabs />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
