import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import RPLContent from "./components/RPLContent";

export default function CreditAndRPL() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Credit and Recognition of Prior Learning"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/how-to-apply" },
          { label: "Credit & RPL" },
        ]}
      />
      <RPLContent />
      <CTASection />
    </>
  );
}
