import Image from "next/image";

export default function MapSection() {
  return (
    <section className="relative w-full overflow-hidden h-140">
      <Image
        src="/images/home/map.png"
        alt="Global network map"
        fill
        className="object-cover object-center"
      />
    </section>
  );
}
