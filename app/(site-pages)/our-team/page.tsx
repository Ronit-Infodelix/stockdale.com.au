import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import TeamSection from "./components/TeamSection";

export default function OurTeam() {
  return (
    <>
      <PageHero
        image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
        title="Our Team"
        subtitle="Meet the people who make Stockdale a world-class institution."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Our Team" },
        ]}
      />

      <TeamSection />
      <CTASection />
    </>
  );
}
