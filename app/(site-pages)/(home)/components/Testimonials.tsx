"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  LifeBuoy,
  Briefcase,
  Route,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const SPRING   = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

interface Feature {
  id: number;
  title: string;
  text: string;
  Icon: LucideIcon;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Quality Education",
    text: "A TEQSA-registered higher education provider delivering an industry-relevant curriculum built to a rigorous academic standard.",
    Icon: GraduationCap,
  },
  {
    id: 2,
    title: "Expert Trainers",
    text: "Learn from experienced educators and industry practitioners who bring real-world knowledge into every class.",
    Icon: Users,
  },
  {
    id: 3,
    title: "Student Support",
    text: "From your first day, our dedicated team is here to help you settle in, stay on track, and make the most of studying in Australia.",
    Icon: LifeBuoy,
  },
  {
    id: 4,
    title: "Industry-Connected Learning",
    text: "An employment-connected model with work-integrated learning, so your studies stay closely linked to the careers you're working towards.",
    Icon: Briefcase,
  },
  {
    id: 5,
    title: "Flexible Pathways",
    text: "Credit and Recognition of Prior Learning let you build on previous study and experience and progress towards your qualification sooner.",
    Icon: Route,
  },
  {
    id: 6,
    title: "Global Community",
    text: "A welcoming community built around our promise to innovate, create, and succeed - open to domestic and international students alike.",
    Icon: Globe,
  },
];

function FeatureCard({ title, text, Icon }: Feature) {
  return (
    <div className="bg-white rounded-[10px] p-6 h-auto md:h-[308px] flex flex-col">
      <div className="w-12 h-12 rounded-full bg-brand-green-light flex items-center justify-center mb-5 shrink-0">
        <Icon size={22} strokeWidth={1.75} className="text-brand-green-darkest" />
      </div>
      <h3 className="font-agatho text-[22px] leading-tight text-black mb-3">{title}</h3>
      <p className="font-sans text-[13px] leading-5 text-brand-gray">{text}</p>
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps]     = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  function getOpacity(index: number) {
    const total = features.length;
    const dist  = (((index - selectedIndex) % total) + total) % total;
    return dist === 0 || dist === 1 ? 1 : 0.4;
  }

  return (
    <section className="relative bg-[#f8f5eb] py-14 md:py-20 overflow-hidden">
      <Container>

        {/* ── Header: stacked on mobile, side-by-side on md+ ── */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: SPRING }}
        >
          {/* Left: text */}
          <div>
            <span className="bg-brand-green-light text-black text-[10px] font-sans px-3 py-0.5 rounded-sm inline-block mb-4">
              Our Commitment to You
            </span>
            <h2 className="font-agatho text-[28px] sm:text-[36px] md:text-[50px] leading-tight text-black mb-3 md:mb-4">
              What to Expect at Stockdale
            </h2>
            <p className="font-sans text-[14px] md:text-[16px] leading-6 text-brand-gray max-w-[520px]">
              As a new institute opening in 2026, here is what our employment-connected model is designed to deliver for every student.
            </p>
          </div>

          {/* Prev / next buttons — below text on mobile, beside on md+ */}
          <motion.div
            className="flex items-center gap-3 shrink-0 mt-6 md:mt-0 md:mb-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.2, ease: SPRING }}
          >
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-neutral-700 active:scale-95 transition-all duration-150"
            >
              <ChevronLeft size={15} color="white" strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-neutral-700 active:scale-95 transition-all duration-150"
            >
              <ChevronRight size={15} color="white" strokeWidth={2.5} />
            </button>
          </motion.div>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 0.15, ease: SPRING }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-[33px]">
              {features.map((f, i) => (
                <div
                  key={f.id}
                  /* 85vw on mobile shows 1 card + peek of next;
                     fixed 285px on md+ matches the original 3-visible layout */
                  className="shrink-0 transition-opacity duration-300 ease-in-out w-[85vw] md:w-[285px]"
                  style={{ opacity: getOpacity(i) }}
                >
                  <FeatureCard {...f} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Dot pagination ── */}
        <motion.div
          className="flex items-center justify-center gap-1.5 mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.3, ease: SPRING }}
        >
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-[7px] rounded-full transition-all duration-300"
              style={{
                width:      i === selectedIndex ? 42 : 7,
                background: i === selectedIndex ? "#d6a929" : "#ddd4b0",
              }}
            />
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
