"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Container from "./ui/Container";

const testimonials = [
  {
    id: 1,
    name: "Danial Rooh",
    role: "Student",
    avatar: "/images/home/avatar-danial.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: 2,
    name: "Becca William",
    role: "Student",
    avatar: "/images/home/avatar-becca.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Student",
    avatar: "/images/home/avatar-danial.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Student",
    avatar: "/images/home/avatar-becca.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: 5,
    name: "Aisha Kumar",
    role: "Student",
    avatar: "/images/home/avatar-danial.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: 6,
    name: "Tom Williams",
    role: "Student",
    avatar: "/images/home/avatar-becca.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="#F0C41A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 1.5L11.941 6.514L17.5 7.282L13.5 11.18L14.441 17L9.5 14.264L4.559 17L5.5 11.18L1.5 7.282L7.059 6.514L9.5 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  avatar,
  text,
}: (typeof testimonials)[number]) {
  return (
    <div className="bg-white rounded-[10px] p-6 h-[308px] flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <Stars />
        <p className="font-sans text-[12px] leading-[18px] text-[#767676] line-clamp-5">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={name}
          width={38}
          height={38}
          className="rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="font-sans font-medium text-[12px] text-black leading-[18px]">
            {name}
          </p>
          <p className="font-sans text-[10px] text-[#767676] leading-[18px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  function getOpacity(index: number) {
    const total = testimonials.length;
    const dist = (((index - selectedIndex) % total) + total) % total;
    // Slides at dist 0 and 1 from selected are "active" (full opacity)
    return dist === 0 || dist === 1 ? 1 : 0.4;
  }

  return (
    <section className="relative bg-[#f8f5eb] py-20 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <span className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] inline-block mb-4">
            Testimonial
          </span>
          <h2 className="font-agatho text-[50px] leading-tight text-black mb-4">
            What Our Students Say
          </h2>
          <p className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[516px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            facilisis rhoncus placerat. Suspendisse ac dui et.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <ChevronLeft size={14} color="white" strokeWidth={2.5} />
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[33px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 transition-opacity duration-300 ease-in-out"
                  style={{ width: 285, opacity: getOpacity(i) }}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <ChevronRight size={14} color="white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="flex items-center justify-center gap-[6px] mt-10">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-[7px] rounded-full transition-all duration-300"
              style={{
                width: i === selectedIndex ? 42 : 7,
                background: i === selectedIndex ? "#d6a929" : "#ddd4b0",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
