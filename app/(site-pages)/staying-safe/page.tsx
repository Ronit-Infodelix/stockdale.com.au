import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import StayingSafeSections from "./components/StayingSafeSections";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/staying-safe");

export default function StayingSafe() {
  return (
    <main>
      <PageSchema
        path="/staying-safe"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life" },
          { label: "Staying Safe" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/staying-safe/hero.webp"
          title="Staying Safe"
          subtitle="Your health, safety, and wellbeing matter - find emergency contacts, support services, and guidance for staying safe on and off campus."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/student-life" },
            { label: "Staying Safe" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <StayingSafeSections />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
