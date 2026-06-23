import { ChevronRight } from "lucide-react";
import Container from "./ui/Container";

/* ─── data ─────────────────────────────────────────────────── */

const blogPosts = [
  {
    date: "26 Oct 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    excerpt:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    date: "26 Oct 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    excerpt:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    date: "26 Oct 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    excerpt:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
];

const events = [
  {
    day: "21",
    month: "May",
    category: "Sed Do Eiusmod",
    title: "Lorem ipsum dolor sit amet",
    description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    day: "21",
    month: "May",
    category: "Sed Do Eiusmod",
    title: "Lorem ipsum dolor sit amet",
    description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    day: "21",
    month: "May",
    category: "Sed Do Eiusmod",
    title: "Lorem ipsum dolor sit amet",
    description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
];

/* ─── sub-components ────────────────────────────────────────── */

function BlogCard({
  date,
  title,
  excerpt,
}: (typeof blogPosts)[number]) {
  return (
    <div className="flex h-[144px] bg-white rounded-[10px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Image placeholder */}
      <div className="w-[149px] flex-shrink-0 bg-[#d9d9d9]" />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-4 py-3">
        <div className="flex flex-col gap-1">
          {/* Date badge — square on left, rounded on right */}
          <span className="inline-flex self-start items-center bg-[#013529] text-white text-[10px] font-medium font-sans px-2 py-[2px] rounded-r-[4px]">
            {date}
          </span>
          <h3 className="font-sans font-medium text-[16px] leading-[20px] text-black line-clamp-2">
            {title}
          </h3>
          <p className="font-sans text-[10px] leading-[12px] text-[#767676] line-clamp-2">
            {excerpt}
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-0.5 text-[#014f3d] text-[12px] font-sans"
        >
          Read more
          <ChevronRight size={10} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

function EventItem({
  day,
  month,
  category,
  title,
  description,
}: (typeof events)[number]) {
  return (
    <div className="flex h-[144px] bg-white rounded-[10px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Date column */}
      <div className="w-[80px] flex-shrink-0 flex flex-col items-center justify-center gap-0">
        <span className="font-agatho text-[#d6a929] text-[52px] leading-none">
          {day}
        </span>
        <span className="font-sans text-[12px] uppercase text-black tracking-wide">
          {month}
        </span>
      </div>

      {/* Thin vertical divider */}
      <div className="w-px bg-[#f2f2f2] flex-shrink-0 self-stretch my-3" />

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 px-4 gap-[3px]">
        <p className="font-sans text-[11px] uppercase tracking-wide text-[#767676]">
          {category}
        </p>
        <h3 className="font-sans font-medium text-[15px] leading-[20px] text-black line-clamp-2">
          {title}
        </h3>
        <p className="font-sans text-[11px] leading-[14px] text-[#767676] line-clamp-2">
          {description}
        </p>
        <a
          href="#"
          className="flex items-center gap-0.5 text-[#014f3d] text-[12px] font-sans mt-1"
        >
          Know more
          <ChevronRight size={10} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

/* ─── main section ──────────────────────────────────────────── */

export default function BlogsEvents() {
  const cardStackH = 3 * 144 + 2 * 16; // 464px — matches featured card

  return (
    <section className="relative w-full bg-[#f9f9f9] py-20">
      {/* Header — centered */}
      <Container className="flex flex-col items-center text-center mb-14">
        <span className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] inline-block mb-4">
          Blogs &amp; Events
        </span>
        <h2 className="font-agatho text-[50px] leading-tight text-black">
          Explore News, Events &amp; Student Stories
        </h2>
        <p className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[516px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          facilisis rhoncus placerat. Suspendisse ac dui et.
        </p>
      </Container>

      {/* 3-column grid */}
      <Container>
        <div className="grid grid-cols-3 gap-6">
          {/* ── Col 1: Featured article ── */}
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{ height: cardStackH }}
          >
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-[#c8c4c0]" />

            {/* Dark gradient overlay from ~29% down */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 29%, rgba(0,0,0,0.80) 100%)",
              }}
            />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
              {/* Date badge — yellow for featured */}
              <span className="inline-flex self-start items-center bg-[#f0c41a] text-black text-[10px] font-medium font-sans px-2 py-[2px] rounded-r-[4px]">
                26 Oct 2026
              </span>
              <h3 className="font-sans font-medium text-[16px] leading-[24px] text-white max-w-[305px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h3>
              <p className="font-sans text-[10px] leading-[12px] text-[#d9d9d9] max-w-[304px]">
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
              <a
                href="#"
                className="flex items-center gap-0.5 text-[#43a48e] text-[12px] font-sans mt-1"
              >
                Read more
                <ChevronRight size={10} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* ── Col 2: Blog post cards ── */}
          <div className="flex flex-col gap-4">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>

          {/* ── Col 3: Event items ── */}
          <div className="flex flex-col gap-4">
            {events.map((event, i) => (
              <EventItem key={i} {...event} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
