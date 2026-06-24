"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";

const SPRING   = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

/* ─── data ─────────────────────────────────────────────────── */

const blogPosts = [
  {
    date: "26 Oct 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    excerpt: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    image: "/images/home/gallery/Rectangle 79.png",
  },
  {
    date: "26 Oct 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    excerpt: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    image: "/images/home/gallery/Mask group-1.png",
  },
  {
    date: "26 Oct 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    excerpt: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    image: "/images/home/gallery/Rectangle 80.png",
  },
];

const events = [
  { day: "21", month: "May", category: "Sed Do Eiusmod", title: "Lorem ipsum dolor sit amet", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { day: "21", month: "May", category: "Sed Do Eiusmod", title: "Lorem ipsum dolor sit amet", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { day: "21", month: "May", category: "Sed Do Eiusmod", title: "Lorem ipsum dolor sit amet", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
];

/* ─── sub-components ────────────────────────────────────────── */

function BlogCard({ date, title, excerpt, image }: (typeof blogPosts)[number]) {
  return (
    <div className="flex h-[144px] bg-white rounded-[10px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Image */}
      <div className="w-[149px] flex-shrink-0 relative overflow-hidden bg-[#d9d9d9]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-4 py-3">
        <div className="flex flex-col gap-1">
          <span className="inline-flex self-start items-center bg-[#013529] text-white text-[10px] font-medium font-sans px-2 py-[2px] rounded-r-[4px]">
            {date}
          </span>
          <h3 className="font-sans font-medium text-[16px] leading-[20px] text-black line-clamp-2">{title}</h3>
          <p className="font-sans text-[10px] leading-[12px] text-[#767676] line-clamp-2">{excerpt}</p>
        </div>
        <a href="#" className="flex items-center gap-0.5 text-[#014f3d] text-[12px] font-sans">
          Read more <ChevronRight size={10} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

function EventItem({ day, month, category, title, description }: (typeof events)[number]) {
  return (
    <div className="flex h-[144px] bg-white rounded-[10px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      <div className="w-[80px] flex-shrink-0 flex flex-col items-center justify-center">
        <span className="font-agatho text-[#d6a929] text-[52px] leading-none">{day}</span>
        <span className="font-sans text-[12px] uppercase text-black tracking-wide">{month}</span>
      </div>
      <div className="w-px bg-[#f2f2f2] flex-shrink-0 self-stretch my-3" />
      <div className="flex flex-col justify-center flex-1 px-4 gap-[3px]">
        <p className="font-sans text-[11px] uppercase tracking-wide text-[#767676]">{category}</p>
        <h3 className="font-sans font-medium text-[15px] leading-[20px] text-black line-clamp-2">{title}</h3>
        <p className="font-sans text-[11px] leading-[14px] text-[#767676] line-clamp-2">{description}</p>
        <a href="#" className="flex items-center gap-0.5 text-[#014f3d] text-[12px] font-sans mt-1">
          Know more <ChevronRight size={10} strokeWidth={2} />
        </a>
      </div>
    </div>
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
          className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] inline-block mb-4"
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
          className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[516px] mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.18, ease: SPRING }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          facilisis rhoncus placerat. Suspendisse ac dui et.
        </motion.p>
      </Container>

      {/* 3-column grid */}
      <Container>
        <div className="grid grid-cols-3 gap-6">

          {/* ── Col 1: Featured article with students.png ── */}
          <motion.div
            className="relative rounded-[10px] overflow-hidden"
            style={{ height: cardStackH }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: SPRING }}
          >
            <Image
              src="/images/home/students.png"
              alt="Featured article"
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 29%, rgba(0,0,0,0.80) 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
              <span className="inline-flex self-start items-center bg-[#f0c41a] text-black text-[10px] font-medium font-sans px-2 py-[2px] rounded-r-[4px]">
                26 Oct 2026
              </span>
              <h3 className="font-sans font-medium text-[16px] leading-[24px] text-white max-w-[305px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h3>
              <p className="font-sans text-[10px] leading-[12px] text-[#d9d9d9] max-w-[304px]">
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
              <a href="#" className="flex items-center gap-0.5 text-[#43a48e] text-[12px] font-sans mt-1">
                Read more <ChevronRight size={10} strokeWidth={2} />
              </a>
            </div>
          </motion.div>

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
