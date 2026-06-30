import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import MelbourneSections from "./components/MelbourneSections";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/melbourne-life");

export default function MelbourneLife() {
  return (
    <main>
      <PageSchema
        path="/melbourne-life"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Melbourne Life" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/melbourne/hero.webp"
          title="Melbourne Life"
          subtitle="Discover life in one of the world's most liveable student cities - culture, community, transport, and opportunity at your doorstep."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Melbourne Life" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <MelbourneSections />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
