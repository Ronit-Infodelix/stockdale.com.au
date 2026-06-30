"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  time: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Bachelor of Information Technology",
    description:
      "The Bachelor of Information Technology (BIT) with a specialisation in Data Analytics addresses the growing need for professionals who can harness the power of data to drive business innovation and decision-making.",
    duration: "3 Years",
    time: "Full Time / Part Time",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[19px] p-8 flex gap-6">
      <div className="flex-1 min-w-0">
        <h3 className="font-agatho text-[40px] leading-[44px] text-brand-gold-dark mb-4">
          {course.title}
        </h3>
        <p className="font-sans text-[14px] leading-5 text-brand-gray mb-6">
          {course.description}
        </p>
        <div className="flex flex-wrap gap-6">
          <span className="font-sans text-[14px] text-black">
            <span className="text-brand-green-darkest">Duration:</span> {course.duration}
          </span>
          <span className="font-sans text-[14px] text-black">
            <span className="text-brand-green-darkest">Time:</span> {course.time}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 shrink-0">
        <Link
          href="/graduation-courses/bachelor-of-information-technology/domestic"
          className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-white text-[14px] font-sans min-w-[160px]"
          style={{
            background:
              "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
        >
          Domestic
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
        <Link
          href="/graduation-courses/bachelor-of-information-technology/international"
          className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-white text-[14px] font-sans min-w-[160px]"
          style={{
            background:
              "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
        >
          International
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

export default function CourseListing() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="flex items-baseline gap-8 mb-8 border-b border-gray-100 pb-4">
          <span className="font-sans font-medium text-[20px] text-black shrink-0">
            Graduate Course
          </span>
          <nav className="flex items-center gap-1 font-sans text-[14px]">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>
            <ChevronRight size={12} className="text-brand-gray" />
            <Link href="/admission" className="text-black hover:underline">
              Admission
            </Link>
            <ChevronRight size={12} className="text-brand-gray" />
            <span className="text-brand-gray">Graduate Course</span>
          </nav>
        </div>
        <div className="space-y-6">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
