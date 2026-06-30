import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import RPLContent from "./components/RPLContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/credit-and-rpl");

export default function CreditAndRPL() {
  return (
    <main>
      <PageSchema
        path="/credit-and-rpl"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/how-to-apply" },
          { label: "Credit & RPL" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/crl/hero.webp"
          title="Credit and Recognition of Prior Learning"
          subtitle="Turn your previous study and relevant work experience into academic credit - and progress through your qualification sooner."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/how-to-apply" },
            { label: "Credit & RPL" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <RPLContent />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
