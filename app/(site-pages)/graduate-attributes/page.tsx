import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import GraduateAttributesTable from "./components/GraduateAttributesTable";
import {
  ParallaxOverlay,
  ParallaxSticky,
} from "@/app/components/ui/ParallaxLayer";

export default function GraduateAttributes() {
  return (
    <>
      <ParallaxSticky className="bg-brand-green-darkest">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
          title="Graduate Attributes"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Graduate Attributes" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <GraduateAttributesTable />
        <CTASection />
      </ParallaxOverlay>
    </>
  );
}
