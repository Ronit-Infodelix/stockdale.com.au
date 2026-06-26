import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/app/components/shared/PageHero";
import Container from "@/app/components/ui/Container";
import AdmissionSections from "./components/AdmissionSections";
import InternationalStudentsCTA from "./components/InternationalStudentsCTA";
import {
  ParallaxOverlay,
  ParallaxSticky,
} from "@/app/components/ui/ParallaxLayer";

export default function Admission() {
  return (
    <>
      <PageHero
        image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
        title="Admission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Graduate Course" },
        ]}
      >
        {/* Quick-action buttons sit inside the hero above the title */}
      </PageHero>

      
      <AdmissionSections />
      
      <InternationalStudentsCTA />
    </>
  );
}
