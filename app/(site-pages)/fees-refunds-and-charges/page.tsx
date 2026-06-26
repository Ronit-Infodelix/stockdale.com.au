import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import FeesContent from "./components/FeesContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function FeesRefundsAndCharges() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
          title="Fees, Refunds and Charges"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/how-to-apply" },
            { label: "Fees, Refunds and Charges" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <FeesContent />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
