"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import SplitSection from "@/app/components/shared/SplitSection";
import { ARTICLES, TABS, type Article, type Tab } from "@/app/lib/news";

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
  href = "/contact",
}: Article) {
  return (
    <div className="relative flex items-center gap-0 border-t border-b border-gray-200 bg-white py-[9px] group cursor-pointer transition-colors duration-200 hover:bg-[#f5faf8]">
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="absolute inset-0 z-10"
        aria-label={title}
      />
      {/* Thumbnail */}
      <div className="shrink-0 w-[165px] h-[148px] rounded-[10px] overflow-hidden shadow-[0px_3px_5px_rgba(0,0,0,0.03)] mr-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
        <p className="font-sans text-[16px] font-medium leading-[23px] text-black group-hover:text-brand-green-dark transition-colors duration-200">
          {title}
        </p>
        <p className="font-sans text-[12px] leading-[14px] text-brand-gray">
          {excerpt}
        </p>
        <span className="inline-flex items-center gap-1 font-sans text-[12px] text-brand-green-dark mt-1">
          Know more
          <ChevronRight size={12} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
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
  href = "/contact",
}: Article) {
  return (
    <div className="relative rounded-[10px] border border-gray-200 overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-green-dark/30">
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="absolute inset-0 z-10"
        aria-label={title}
      />
      <div className="relative h-[272px] bg-gray-100 shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        <p className="font-sans text-[16px] font-medium leading-5 text-black group-hover:text-brand-green-dark transition-colors duration-200">
          {title}
        </p>
        <p className="font-sans text-[10px] text-brand-gray">{excerpt}</p>
        <span className="inline-flex items-center gap-1 font-sans text-[12px] text-brand-green-dark mt-auto pt-2">
          Read more <ChevronRight size={12} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
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
      <div className="bg-brand-green-darkest sticky top-18 z-40">
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
          <div className="mb-14">
            <SplitSection
              badge="News"
              title="A new chapter for higher education in West Melbourne"
              body="Stockdale Higher Education Institute opens in 2026 as a TEQSA-registered and CRICOS-registered provider. Our first degree, the Bachelor of Information Technology specialising in Data Analytics, is built on an employment-connected model that brings together study, work, and support to help students graduate workplace-ready."
              image="/images/news/cta.webp"
              imageAlt="Students on the Stockdale campus"
              imagePosition="left"
              cta={{ label: "Explore the Degree", href: "/graduation-courses" }}
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
