import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import LibraryContent from "./components/LibraryContent";
import {
  ParallaxOverlay,
  ParallaxSticky,
} from "@/app/components/ui/ParallaxLayer";

export default function LibraryAndDatabases() {
  return (
    <>
      <ParallaxSticky className="bg-brand-green-darkest">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
          title="Library and Databases"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Library and Databases" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <LibraryContent />
        <CTASection />
      </ParallaxOverlay>
    </>
  );
}
