import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import FeesContent from "./components/FeesContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";
import { breadcrumbLd, faqLd, webPageLd } from "@/app/lib/structured-data";

export const metadata = pageMetadata("/fees-refunds-and-charges");

const FAQS = [
  {
    question: "How much is the Bachelor of Information Technology at Stockdale Institute?",
    answer:
      "Total indicative tuition for the Bachelor of Information Technology is AUD $43,200 for domestic students and AUD $50,400 for international students.",
  },
  {
    question: "Can I get a refund if I withdraw from my course?",
    answer:
      "Refunds are assessed in line with Stockdale Higher Education Institute's refund policy and, for international students, the ESOS Act and National Code. Eligibility and amounts depend on when you withdraw - see the full refunds and charges details on this page.",
  },
];

export default function FeesRefundsAndCharges() {
  return (
    <main>
      <JsonLd
        data={[
          webPageLd({
            path: "/fees-refunds-and-charges",
            name: "Fees, Refunds & Charges | Stockdale Institute",
            description:
              "Tuition fees, refunds and charges for courses at Stockdale Higher Education Institute, Melbourne.",
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Admission", path: "/how-to-apply" },
            { name: "Fees, Refunds and Charges", path: "/fees-refunds-and-charges" },
          ]),
          faqLd(FAQS),
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/fee/hero.webp"
          title="Fees, Refunds and Charges"
          subtitle="Clear, transparent information on tuition fees, refunds, and charges so you can plan your studies with confidence."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/how-to-apply" },
            { label: "Fees, Refunds and Charges" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <FeesContent />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
