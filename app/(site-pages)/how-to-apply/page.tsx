import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import AdmissionsIntro from "./components/AdmissionsIntro";
import ApplicationSteps from "./components/ApplicationSteps";
import RequirementsSection from "./components/RequirementsSection";
import IntakesSection from "./components/IntakesSection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";
import { breadcrumbLd, faqLd, webPageLd } from "@/app/lib/structured-data";

export const metadata = pageMetadata("/how-to-apply");

const FAQS = [
  {
    question: "How do I apply to Stockdale Higher Education Institute?",
    answer:
      "Choose your course, check the entry and English language requirements, then submit an online application with your academic transcripts and identity documents. Domestic and international applicants are guided through each step, and you can apply directly or through an authorised education agent.",
  },
  {
    question: "What are the English language requirements to study at Stockdale?",
    answer:
      "International students need IELTS 6.5 (no band below 6.0), or equivalent: TOEFL iBT 79, PTE Academic 58, or Cambridge C1 Advanced (CAE) 176.",
  },
  {
    question: "When are the intakes at Stockdale Institute?",
    answer:
      "Stockdale Higher Education Institute offers multiple intakes throughout the year. Contact admissions@stockdale.edu.au to confirm the next available intake dates and application deadlines.",
  },
  {
    question: "Can I get credit for previous study or work experience?",
    answer:
      "Yes. You can apply for course credit and Recognition of Prior Learning (RPL) based on previous study or relevant work experience, which may reduce your course duration.",
  },
];

export default function HowToApply() {
  return (
    <main>
      <JsonLd
        data={[
          webPageLd({
            path: "/how-to-apply",
            name: "How to Apply | Stockdale Institute",
            description:
              "Step-by-step guide to applying to Stockdale Higher Education Institute in Melbourne, including entry requirements, English requirements and intakes.",
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Admission", path: "/admission" },
            { name: "How to Apply", path: "/how-to-apply" },
          ]),
          faqLd(FAQS),
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/how-to-apply/hero.webp"
          title="How to Apply"
          subtitle="A clear, step-by-step guide to applying - from choosing your course and checking entry requirements to submitting your application."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "#" },
            { label: "How to Apply" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <AdmissionsIntro />
        <ApplicationSteps />
        <RequirementsSection />
        <IntakesSection />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
