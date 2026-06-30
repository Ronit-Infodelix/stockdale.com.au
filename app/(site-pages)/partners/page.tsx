import PageHero from "@/app/components/shared/PageHero";
import IndustryPartnersContent from "../industry/components/IndustryPartnersContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/partners");

export default function PartnersPage() {
  return (
    <main>
      <PageSchema
        path="/partners"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industry & Partners", href: "/industry" },
          { label: "Partners" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/partner/hero.webp"
          title="Partners"
          subtitle="Working together with education agents and organisations to support student recruitment, success, and opportunity."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Industry & Partners", href: "/industry" },
            { label: "Partners" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <IndustryPartnersContent variant="partners" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
