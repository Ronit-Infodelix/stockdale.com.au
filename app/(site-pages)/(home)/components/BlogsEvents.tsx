"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import { ARTICLES } from "../../../lib/news";

const SPRING   = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

/* ─── data ─────────────────────────────────────────────────── */

const featured = (() => {
  const a = ARTICLES.News[0];
  return {
    date: `${a.day} ${a.month} 2026`,
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
    href: a.href ?? "/news-and-events",
  };
})();

const blogPosts = ARTICLES.News.slice(1, 4).map((a) => ({
  date: `${a.day} ${a.month} 2026`,
  title: a.title,
  excerpt: a.excerpt,
  image: a.image,
  href: a.href ?? "/news-and-events",
}));

const events = ARTICLES.Events.slice(0, 3).map((a) => ({
  day: a.day,
  month: a.month,
  category: a.category,
  title: a.title,
  description: a.excerpt,
  href: a.href ?? "/news-and-events",
}));

/* ─── sub-components ────────────────────────────────────────── */

function BlogCard({ date, title, excerpt, image, href }: (typeof blogPosts)[number]) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex h-36 bg-white rounded-[10px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="w-[149px] shrink-0 relative overflow-hidden bg-[#d9d9d9]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 px-4 py-3">
        <div className="flex flex-col gap-1">
          <span className="inline-flex self-start items-center bg-brand-green-darkest text-white text-[10px] font-medium font-sans px-2 py-0.5 rounded-r-sm">
            {date}
          </span>
          <h3 className="font-sans font-medium text-[16px] leading-5 text-black line-clamp-2 group-hover:text-brand-green-dark transition-colors">
            {title}
          </h3>
          <p className="font-sans text-[10px] leading-3 text-brand-gray line-clamp-2">{excerpt}</p>
        </div>
        <span className="flex items-center gap-0.5 text-brand-green-dark text-[12px] font-sans">
          Read more <ChevronRight size={10} strokeWidth={2} />
        </span>
      </div>
    </a>
  );
}

function EventItem({ day, month, category, title, description, href }: (typeof events)[number]) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex h-36 bg-white rounded-[10px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="w-20 shrink-0 flex flex-col items-center justify-center">
        <span className="font-agatho text-brand-gold-dark text-[52px] leading-none">{day}</span>
        <span className="font-sans text-[12px] uppercase text-black tracking-wide">{month}</span>
      </div>
      <div className="w-px bg-[#f2f2f2] shrink-0 self-stretch my-3" />
      <div className="flex flex-col justify-center flex-1 px-4 gap-[3px]">
        <p className="font-sans text-[11px] uppercase tracking-wide text-brand-gray">{category}</p>
        <h3 className="font-sans font-medium text-[15px] leading-5 text-black line-clamp-2 group-hover:text-brand-green-dark transition-colors">
          {title}
        </h3>
        <p className="font-sans text-[11px] leading-[14px] text-brand-gray line-clamp-2">{description}</p>
        <span className="flex items-center gap-0.5 text-brand-green-dark text-[12px] font-sans mt-1">
          Know more <ChevronRight size={10} strokeWidth={2} />
        </span>
      </div>
    </a>
  );
}

/* ─── stagger variants ──────────────────────────────────────── */
const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const listItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: SPRING } },
};

/* ─── main section ──────────────────────────────────────────── */
export default function BlogsEvents() {
  const cardStackH = 3 * 144 + 2 * 16;

  return (
    <section className="relative w-full bg-[#f9f9f9] py-20">

      {/* Header */}
      <Container className="flex flex-col items-center text-center mb-14">
        <motion.span
          className="bg-brand-green-light text-black text-[10px] font-sans px-3 py-1.25 rounded-sm inline-block mb-4"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.45, ease: SPRING }}
        >
          Blogs &amp; Events
        </motion.span>
        <motion.h2
          className="font-agatho text-[50px] leading-tight text-black"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.08, ease: SPRING }}
        >
          Explore News, Events &amp; Student Stories
        </motion.h2>
        <motion.p
          className="font-sans text-[16px] leading-6 text-brand-gray max-w-[516px] mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.18, ease: SPRING }}
        >
          Stay up to date with the latest news, upcoming events, and insights
          from the Stockdale community.
        </motion.p>
      </Container>

      {/* 3-column grid */}
      <Container>
        <div className="grid grid-cols-3 gap-6">

          {/* ── Col 1: Featured card ── */}
          <motion.a
            href={featured.href}
            target={featured.href.startsWith("http") ? "_blank" : undefined}
            rel={featured.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative rounded-[10px] overflow-hidden"
            style={{ height: cardStackH }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: SPRING }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              priority
            />
            <div
              className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 29%, rgba(0,0,0,0.80) 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
              <span className="inline-flex self-start items-center bg-brand-gold text-black text-[10px] font-medium font-sans px-2 py-0.5 rounded-r-sm">
                {featured.date}
              </span>
              <h3 className="font-sans font-medium text-[16px] leading-6 text-white max-w-[305px]">
                {featured.title}
              </h3>
              <p className="font-sans text-[10px] leading-3 text-[#d9d9d9] max-w-[304px]">
                {featured.excerpt}
              </p>
              <span className="flex items-center gap-0.5 text-brand-green text-[12px] font-sans mt-1">
                Read more <ChevronRight size={10} strokeWidth={2} />
              </span>
            </div>
          </motion.a>

          {/* ── Col 2: Blog cards with stagger ── */}
          <motion.div
            className="flex flex-col gap-4"
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {blogPosts.map((post, i) => (
              <motion.div key={i} variants={listItem}>
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>

          {/* ── Col 3: Events with stagger ── */}
          <motion.div
            className="flex flex-col gap-4"
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {events.map((event, i) => (
              <motion.div key={i} variants={listItem}>
                <EventItem {...event} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
