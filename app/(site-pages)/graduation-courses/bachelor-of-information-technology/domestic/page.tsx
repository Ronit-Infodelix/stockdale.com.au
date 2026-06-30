import PageHero from "@/app/components/shared/PageHero";
import BITContent from "../components/BITContent";
import BITPathways from "../components/BITPathways";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/graduation-courses/bachelor-of-information-technology/domestic");

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/graduation-courses" },
  { label: "Bachelor of Information Technology" },
  { label: "Domestic Students" },
];

export default function BITDomesticStudents() {
  return (
    <main>
      <PageSchema path="/graduation-courses/bachelor-of-information-technology/domestic" crumbs={CRUMBS} />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/domestic/hero.webp"
          title="Bachelor of Information Technology - Domestic Students"
          subtitle="Everything Australian and New Zealand applicants need to know - entry requirements, fees, and how to begin your studies at Stockdale."
          breadcrumbs={CRUMBS}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <BITContent variant="domestic" />
      </ParallaxOverlay>
      <BITPathways />
    </main>
  );
}
