import PageHero from "@/app/components/shared/PageHero";
import IndustryPartnersContent from "./components/IndustryPartnersContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/industry");

export default function IndustryPage() {
  return (
    <main>
      <PageSchema
        path="/industry"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industry & Partners", href: "/industry" },
          { label: "Industry" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/indrustry/hero.webp"
          title="Industry"
          subtitle="Building meaningful connections between students and employers through work-integrated learning, projects, and professional networks."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Industry & Partners", href: "/industry" },
            { label: "Industry" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <IndustryPartnersContent variant="industry" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
