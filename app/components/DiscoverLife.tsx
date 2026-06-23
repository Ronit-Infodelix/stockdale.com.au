import Container from "./ui/Container";

const PLACEHOLDER_COUNT = 4;

export default function DiscoverLife() {
  return (
    <section className="relative w-full bg-white pt-20 pb-24">
      {/* Header */}
      <Container className="flex flex-col items-center text-center mb-14">
        <div className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] mb-5">
          Gallery
        </div>
        <h2 className="font-agatho text-[50px] leading-tight text-black">
          Discover Life at Our University
        </h2>
        <p className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[516px] mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          facilisis rhoncus placerat. Suspendisse ac dui et.
        </p>
      </Container>

      {/* Gallery rows — marquee will replace this later */}
      <div className="flex flex-col gap-[6px] px-4 sm:px-6 lg:px-[100px]">
        {[0, 1].map((row) => (
          <div key={row} className="flex gap-[6px]">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-[4px] bg-[#d9d9d9]"
                style={{ aspectRatio: "387 / 310" }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
