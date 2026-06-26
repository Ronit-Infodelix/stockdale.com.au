"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/app/components/ui/Container";
import SplitSection from "@/app/components/shared/SplitSection";

const TABS = [
  { label: "Campus",                    id: "campus" },
  { label: "Teaching Spaces",           id: "teaching-spaces" },
  { label: "Facilities",                id: "facilities" },
  { label: "Learning Resources",        id: "learning-resources" },
  { label: "Student Health and Safety", id: "health-safety" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const FACILITY_IMAGES = [
  "/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png",
  "/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png",
  "/images/home/students.png",
  "/images/home/students-empowering.png",
];

export default function CampusSections() {
  const [activeId, setActiveId] = useState<TabId>("campus");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Track which section occupies the most viewport real-estate
    const ratios: Record<string, number> = {};

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { ratios[e.target.id] = e.intersectionRatio; });
        const top = Object.entries(ratios).sort(([, a], [, b]) => b - a)[0];
        if (top && top[1] > 0) setActiveId(top[0] as TabId);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) },
    );

    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div>
      {/* ── Anchor tab bar — active tab highlighted by scroll position ── */}
      <div className="bg-brand-green-darkest">
        <Container className="flex flex-wrap">
          {TABS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={[
                "px-5 py-[18px] text-[12px] font-sans font-bold uppercase tracking-[0.96px] whitespace-nowrap transition-colors duration-150",
                activeId === id
                  ? "bg-brand-green-light text-brand-green-darkest"
                  : "text-white hover:bg-brand-green-light/30 hover:text-white",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </Container>
      </div>

      {/* ── Campus ── */}
      <section id="campus" className="scroll-mt-[140px]">
        <SplitSection
          badge="Our Campus"
          title="Campus"
          body={[
            "The initial campus will be fit for purpose and accommodate projected student growth over five years. Stockdale's campus is located at Level 2, 120 Miller Street, West Melbourne, Victoria 3003. This campus ensures proximity to affordable housing, dining and transportation options.",
            "The campus will be staffed and accessible to students weekdays and weekends. To ensure security and safety, students will be required to swipe their unique student ID card to gain access to the campus outside of office hours.",
          ]}
          image="/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png"
          imageAlt="Stockdale campus"
          imagePosition="right"
        />
      </section>

      {/* ── Teaching Spaces ── */}
      <section id="teaching-spaces" className="scroll-mt-[140px]">
        <SplitSection
          badge="Teaching Spaces"
          title="Teaching Spaces"
          body="The campus features modern classrooms equipped with ample seating and desk space to accommodate laptops and will include whiteboards and digital projectors/screens, fostering an interactive learning environment and encouraging academic collaboration within classes."
          image="/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png"
          imageAlt="Teaching spaces"
          imagePosition="left"
        />
      </section>

      {/* ── Facilities ── */}
      <section id="facilities" className="scroll-mt-[140px] bg-brand-green-darkest py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-agatho text-[40px] leading-[50px] text-white mb-8">Facilities</h2>
              <p className="font-sans text-[16px] leading-[35px] text-white font-medium mb-4">
                Stockdale will ensure that the campus has sufficient spaces and resources for:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                {[
                  "Administrative offices and privacy for one-on-one consultations with students",
                  "Socialisation and relaxation spaces for students and staff and appropriate restrooms",
                  "Accessibility and a welcoming environment for students, including those with disabilities, including features such as ramps, handrails and designated restrooms",
                  "Appropriate designated areas for private study, meetings and group discussions.",
                  "Vending machines and a kitchenette will be available for student and staff convenience.",
                  "Security cameras and monitoring for student and staff safety, in addition to swipe card-enabled security access.",
                ].map((item, i) => (
                  <li key={i} className="font-sans text-[16px] leading-7 text-white/90 pl-1">{item}</li>
                ))}
              </ol>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {FACILITY_IMAGES.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Learning Resources ── */}
      <section id="learning-resources" className="scroll-mt-[140px] bg-brand-green-darkest py-16">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-white mb-8">Learning Resources</h2>
          <ol className="list-decimal pl-6 space-y-4 max-w-4xl">
            {[
              "Through their Stockdale accounts students will have access to all necessary resources, including email, the learning management system (LMS), ebooks and electronic learning materials and learning support material.",
              "Academics will ensure comprehensive learning resources, internal and external, are available for each subject offering via the LMS.",
              "Staff and students will be able to access learning resources both on campus via WIFI and externally via the remote login.",
            ].map((item, i) => (
              <li key={i} className="font-sans text-[16px] leading-7 text-white/90 pl-1">{item}</li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Students Health and Safety ── */}
      <section id="health-safety" className="scroll-mt-[140px] bg-white py-16">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
            Students Health and Safety
          </h2>
          <p className="font-sans text-[16px] leading-[35px] text-brand-gray max-w-3xl mb-8">
            Health and Safety are regarded as a joint responsibility of all Personnel of Stockdale and Students. Each individual will take responsibility for their own safety, that of fellow Staff and Students, by working and operating in a safe, respectful and appropriate manner.
          </p>
          <div className="space-y-10 max-w-3xl">
            <div>
              <p className="font-sans text-[16px] leading-[35px] text-black font-medium mb-3">
                Stockdale will exercise due diligence and care to ensure compliance with relevant legislation, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {[
                  "Acquisition of up-to-date knowledge of work, health and safety matters",
                  "An understanding of the business operations of Stockdale and of the risks or hazards associated with these operations",
                  "Awareness of the availability of relevant resources and processes to eliminate and/or minimise risks",
                  "Ensuring that Stockdale is compliant with any obligation or duty under the Occupational Health and Safety Act",
                  "Maintaining a Critical Incident Register and Risk Register",
                  "Promotion of training and information regarding health and safety to the Stockdale community",
                  "Provide access to physical and mental health programs and prevention education programs.",
                ].map((item, i) => (
                  <li key={i} className="font-sans text-[16px] leading-7 text-brand-gray pl-1">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-[16px] leading-[35px] text-black font-medium mb-3">
                All Personnel, Students, and visitors at Stockdale are responsible for, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {[
                  "Taking care of their own health and safety",
                  "Ensuring that their actions or neglect to act does not adversely affect others around them",
                  "Compliance with this Policy and Procedure relating to their health and safety",
                  "Reporting of any incidents, hazards, or accidents of which they may become aware",
                  "Following emergency evacuation procedures and instructions given by emergency personnel",
                  "In a case of an emergency (Police, Ambulance, or Fire Brigade), an immediate call to Triple 000 should be made.",
                  "A list of emergency contacts will be listed in the Student Handbook and around the campus",
                  "In the case of needed evacuation, follow Stockdale's emergency procedures located near all exits.",
                ].map((item, i) => (
                  <li key={i} className="font-sans text-[16px] leading-7 text-brand-gray pl-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
