import Image from "next/image";

export default function MapSection() {
  return (
    <section className="relative w-full overflow-hidden h-[200px] sm:h-[260px] md:h-[340px] lg:h-140">
      <Image
        src="/images/home/map.webp"
        alt="Global network map"
        fill
        className="object-cover object-center"
      />
    </section>
  );
}
