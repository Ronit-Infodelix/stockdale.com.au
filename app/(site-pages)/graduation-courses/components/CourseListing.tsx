"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import Container from "@/app/components/ui/Container";

type StudentType = "domestic" | "international";
type DegreeType = "graduate" | "postgraduate";
type TimeType = "part-time" | "full-time";

interface Filters {
  studentType: StudentType[];
  degreeType: DegreeType[];
  time: TimeType[];
}

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  time: string;
  studentType: StudentType[];
  degreeType: DegreeType;
  timeType: TimeType[];
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Bachelor of Information Technology",
    description:
      "The Bachelor of Information Technology (BIT) with a specialisation in Data Analytics addresses the growing need for professionals who can harness the power of data to drive business innovation and decision-making.",
    duration: "3 Years",
    time: "Full Time / Part Time",
    studentType: ["domestic", "international"],
    degreeType: "graduate",
    timeType: ["part-time", "full-time"],
  },
  {
    id: 2,
    title: "Master of Business Analytics",
    description:
      "Develop advanced skills in data analysis, business intelligence, and strategic decision-making, preparing you for leadership roles in data-driven organisations across a range of industries.",
    duration: "2 Years",
    time: "Full Time / Part Time",
    studentType: ["domestic", "international"],
    degreeType: "postgraduate",
    timeType: ["part-time", "full-time"],
  },
];

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer mb-4">
      <button
        type="button"
        onClick={onChange}
        className={[
          "w-[17px] h-[17px] shrink-0 rounded-[2px] border-[0.5px] border-[#a6860d] flex items-center justify-center transition-colors",
          checked ? "bg-brand-gold-dark" : "bg-[#f3edd8]",
        ].join(" ")}
      >
        {checked && <Check size={10} strokeWidth={3} className="text-white" />}
      </button>
      <span className="font-sans text-[14px] text-black leading-5">{label}</span>
    </label>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="font-sans font-medium text-[20px] text-black leading-5 mb-4">{label}</p>
      {children}
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[19px] p-8 flex gap-6">
      {/* Left: title + description + meta */}
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

      {/* Right: action buttons */}
      <div className="flex flex-col gap-3 shrink-0">
        <Link
          href="#"
          className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-white text-[14px] font-sans min-w-[140px]"
          style={{
            background:
              "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
        >
          Apply Now
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
        <Link
          href="#"
          className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-white text-[14px] font-sans min-w-[140px]"
          style={{
            background:
              "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
        >
          Handbook
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

export default function CourseListing() {
  const [filters, setFilters] = useState<Filters>({
    studentType: [],
    degreeType: ["graduate"],
    time: [],
  });

  function toggle<T>(key: keyof Filters, value: T) {
    const arr = filters[key] as T[];
    const updated = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
    setFilters({ ...filters, [key]: updated });
  }

  const filtered = COURSES.filter((c) => {
    if (
      filters.studentType.length > 0 &&
      !filters.studentType.some((t) => c.studentType.includes(t))
    )
      return false;
    if (filters.degreeType.length > 0 && !filters.degreeType.includes(c.degreeType)) return false;
    if (filters.time.length > 0 && !filters.time.some((t) => c.timeType.includes(t))) return false;
    return true;
  });

  return (
    <section className="bg-white py-12">
      <Container>
        {/* Page header row */}
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

        {/* Two-column layout */}
        <div className="flex gap-6 items-start">
          {/* Sidebar */}
          <aside className="bg-[#f8f5eb] rounded-[19px] p-6 w-[236px] shrink-0">
            <p className="font-sans font-medium text-[20px] text-black mb-6">Courses</p>

            <FilterGroup label="Student Type">
              {(
                [
                  { value: "domestic" as StudentType, label: "Domestic" },
                  { value: "international" as StudentType, label: "International" },
                ] as const
              ).map(({ value, label }) => (
                <FilterCheckbox
                  key={value}
                  label={label}
                  checked={filters.studentType.includes(value)}
                  onChange={() => toggle<StudentType>("studentType", value)}
                />
              ))}
            </FilterGroup>

            <FilterGroup label="Degree Type">
              {(
                [
                  { value: "graduate" as DegreeType, label: "Graduate" },
                  { value: "postgraduate" as DegreeType, label: "Postgraduate" },
                ] as const
              ).map(({ value, label }) => (
                <FilterCheckbox
                  key={value}
                  label={label}
                  checked={filters.degreeType.includes(value)}
                  onChange={() => toggle<DegreeType>("degreeType", value)}
                />
              ))}
            </FilterGroup>

            <FilterGroup label="Time">
              {(
                [
                  { value: "part-time" as TimeType, label: "Part Time" },
                  { value: "full-time" as TimeType, label: "Full Time" },
                ] as const
              ).map(({ value, label }) => (
                <FilterCheckbox
                  key={value}
                  label={label}
                  checked={filters.time.includes(value)}
                  onChange={() => toggle<TimeType>("time", value)}
                />
              ))}
            </FilterGroup>
          </aside>

          {/* Course cards */}
          <div className="flex-1 space-y-6 min-w-0">
            {filtered.length > 0 ? (
              filtered.map((course) => <CourseCard key={course.id} course={course} />)
            ) : (
              <p className="font-sans text-[16px] text-brand-gray py-12 text-center">
                No courses match the selected filters.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
