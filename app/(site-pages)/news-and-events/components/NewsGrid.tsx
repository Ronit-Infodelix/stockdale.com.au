"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import SplitSection from "@/app/components/shared/SplitSection";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  day: string;
  month: string;
  image: string;
  href?: string;
}

const TABS = ["News", "Events"] as const;
type Tab = (typeof TABS)[number];

const ARTICLES: Record<Tab, Article[]> = {
  Events: [
    {
      day: "21",
      month: "May",
      category: "Campus Life",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image:
        "/images/home/gallery/students-group.webp",
    },
    {
      day: "21",
      month: "May",
      category: "Events",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "/images/home/gallery/students-celebrating.webp",
    },
    {
      day: "21",
      month: "May",
      category: "Academic",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "/images/home/students.webp",
    },
    {
      day: "21",
      month: "May",
      category: "Community",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/home/students-empowering.webp",
    },
    {
      day: "21",
      month: "May",
      category: "Campus Life",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image:
        "/images/home/gallery/students-group.webp",
    },
    {
      day: "14",
      month: "Jun",
      category: "Events",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "/images/home/gallery/students-celebrating.webp",
    },
    {
      day: "02",
      month: "Jul",
      category: "Academic",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "/images/home/students.webp",
    },
  ],
  News: [
    {
      day: "10",
      month: "Apr",
      category: "Announcement",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "/images/home/students-empowering.webp",
    },
    {
      day: "05",
      month: "May",
      category: "Research",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/home/students.webp",
    },
    {
      day: "21",
      month: "May",
      category: "Campus Life",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image:
        "/images/home/gallery/students-group.webp",
    },
    {
      day: "03",
      month: "Jun",
      category: "Announcement",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "/images/home/gallery/students-celebrating.webp",
    },
    {
      day: "18",
      month: "Jun",
      category: "Research",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      excerpt:
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "/images/home/students-empowering.webp",
    },
  ],
};

const PER_PAGE_EVENTS = 5;
const PER_PAGE_NEWS = 9;

// ── Events: horizontal list row ──────────────────────────────────────────────
function ArticleRow({
  day,
  month,
  category,
  title,
  excerpt,
  image,
  href = "#",
}: Article) {
  return (
    <div className="flex items-center gap-0 border-t border-b border-gray-200 bg-white py-[9px]">
      {/* Thumbnail */}
      <div className="shrink-0 w-[165px] h-[148px] rounded-[10px] overflow-hidden shadow-[0px_3px_5px_rgba(0,0,0,0.03)] mr-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Date */}
      <div className="shrink-0 w-[87px] flex flex-col items-start mr-8">
        <span className="font-agatho text-[60px] leading-[0.7] text-brand-gold-dark">
          {day}
        </span>
        <span className="font-sans text-[16px] uppercase tracking-[3.2px] text-black mt-3">
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <p className="font-sans text-[12px] font-medium uppercase text-brand-green-darkest tracking-wide">
          {category}
        </p>
        <p className="font-sans text-[16px] font-medium leading-[23px] text-black">
          {title}
        </p>
        <p className="font-sans text-[12px] leading-[14px] text-brand-gray">
          {excerpt}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-sans text-[12px] text-brand-green-dark mt-1"
        >
          Know more
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

// ── News: card grid ──────────────────────────────────────────────────────────
function ArticleCard({
  category,
  day,
  month,
  title,
  excerpt,
  image,
  href = "#",
}: Article) {
  return (
    <div className="rounded-[10px] border border-gray-200 overflow-hidden flex flex-col">
      <div className="relative h-[272px] bg-gray-100 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0">
          <div className="bg-brand-green-darkest rounded-r-sm px-3 py-1 inline-block">
            <span className="font-sans text-[10px] font-medium text-white">
              {day} {month}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-7 py-4 gap-2">
        <p className="font-sans text-[12px] font-medium uppercase text-brand-green-darkest tracking-wide">
          {category}
        </p>
        <p className="font-sans text-[16px] font-medium leading-5 text-black">
          {title}
        </p>
        <p className="font-sans text-[10px] text-brand-gray">{excerpt}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-sans text-[12px] text-brand-green-dark mt-auto pt-2"
        >
          Read more <ChevronRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 justify-end mt-8">
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={[
            "w-[34px] h-[34px] rounded-[3px] text-[16px] font-sans flex items-center justify-center transition-colors",
            current === p
              ? "bg-brand-green-dark text-white"
              : "border border-gray-200 text-black hover:border-brand-green-dark",
          ].join(" ")}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(current + 1, total))}
        className="w-[34px] h-[34px] rounded-[3px] border border-gray-200 flex items-center justify-center hover:border-brand-green-dark transition-colors"
      >
        <ChevronRight size={16} className="text-black" />
      </button>
    </div>
  );
}

export default function NewsGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("News");
  const [page, setPage] = useState(1);

  const isEvents = activeTab === "Events";
  const perPage = isEvents ? PER_PAGE_EVENTS : PER_PAGE_NEWS;
  const articles = ARTICLES[activeTab];
  const totalPages = Math.ceil(articles.length / perPage);
  const visible = articles.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-white">
      {/* Tab bar */}
      <div className="bg-brand-green-darkest sticky top-18 z-10">
        <Container className="flex">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setPage(1);
              }}
              className={[
                "px-5 py-[18px] text-[12px] font-sans font-bold uppercase tracking-[0.96px] whitespace-nowrap transition-colors duration-150",
                activeTab === tab
                  ? "bg-brand-green-light text-brand-green-darkest"
                  : "text-white hover:text-white/70",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </Container>
      </div>

      {/* Content */}
      <div className="py-14">
        {/* News: featured split article above the grid */}
        {!isEvents && (
          <div className="-mx-4 sm:-mx-6 lg:-mx-6 mb-14">
            <SplitSection
              badge="News"
              title="Lorem ipsum dolor simet, consectetur adipiscing elit"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="/images/home/about/students-outdoor.webp"
              imageAlt="Students in lecture"
              imagePosition="left"
              cta={{ label: "Read More", href: "#" }}
            />
          </div>
        )}
        <Container>
          {/* Section heading */}
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-1">
            Latest {activeTab}
          </h2>
          <p className="font-sans text-[13px] text-gray-500 mb-10">
            Stay informed with the latest updates, announcements, and stories
            from our community.
          </p>

          {/* Events: horizontal rows / News: card grid */}
          {isEvents ? (
            <div className="flex flex-col">
              {visible.map((article, i) => (
                <ArticleRow key={i} {...article} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((article, i) => (
                <ArticleCard key={i} {...article} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <Pagination current={page} total={totalPages} onChange={setPage} />
          )}
        </Container>
      </div>
    </div>
  );
}
