import PageHero from "@/app/components/shared/PageHero";
import StudentRequirementsContent from "../domestic-students/components/StudentRequirementsContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function InternationalStudents() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/international/hero.webp"
          title="International Students"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/how-to-apply" },
            { label: "International Student" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <StudentRequirementsContent variant="international" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
