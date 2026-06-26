import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import LibraryContent from "./components/LibraryContent";

export default function LibraryAndDatabases() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Library and Databases"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Library and Databases" },
        ]}
      />

      <LibraryContent />
      <CTASection />
    </>
  );
}
