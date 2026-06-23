import Container from "./ui/Container";

const CIRCLE = 466;
const STEP = 282;
const OVERLAP = CIRCLE - STEP;

const cards = [
  {
    title: "Industry-Relevant\nCourses",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.",
    icon: "/images/home/icons/icon-courses.svg",
    iconW: 43,
    iconH: 65,
  },
  {
    title: "Experienced\nTrainers",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.",
    icon: "/images/home/icons/icon-trainers.svg",
    iconW: 70,
    iconH: 70,
  },
  {
    title: "Flexible Learning\nOptions",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.",
    icon: "/images/home/icons/icon-flexible.svg",
    iconW: 62,
    iconH: 69,
  },
  {
    title: "Student Support\nServices",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.",
    icon: "/images/home/icons/icon-support.svg",
    iconW: 57,
    iconH: 72,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark green background */}
      <div className="absolute inset-0 bg-[#013529]" />

      {/* Shimmer radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 65% 30%, rgba(20,200,120,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Header content */}
      <Container className="relative z-10 flex flex-col items-center text-center pt-20">
        {/* Badge */}
        <div className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] mb-6">
          Why choose us
        </div>

        {/* Heading */}
        <h2 className="font-agatho text-[50px] leading-tight text-white">
          Your Success Is Our{" "}
          <span className="text-[#d6a929]">Priority</span>
        </h2>

        {/* Description */}
        <p className="font-sans text-[16px] leading-[24px] text-[#64817a] max-w-[516px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          facilisis rhoncus placerat. Suspendisse ac dui et.
        </p>
      </Container>

      {/* Circles row — positioned at bottom of section, extending below */}
      <div
        className="z-10 flex justify-between scale-120 origin-top-left relative -left-10 pt-10"
      >
        {cards.map(({ title, description, icon, iconW, iconH }, i) => (
          <div
            key={title}
            className="relative flex-shrink-0 rounded-full flex justify-center items-center bg-brand-green-darkest"
            style={{
              width: CIRCLE,
              height: CIRCLE,
              marginLeft: i === 0 ? 0 : -OVERLAP,
              border: "3px solid #055744",
              zIndex: cards.length - i
            }}
          >
            {/* Content in the visible (non-overlapped) left portion */}
            <div
              className="flex flex-col gap-4 scale-80"
              style={{ maxWidth: STEP - 36 }}
            >
              {/* Icon */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon}
                alt=""
                width={iconW}
                height={iconH}
                style={{ width: iconW, height: iconH, objectFit: "contain" }}
                className=""
              />

              {/* Title */}
              <h3 className="font-agatho text-[28px] leading-tight text-white whitespace-pre-line">
                {title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[14px] leading-[20px] text-[#64817a] whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
        ))}

        {/* Ghost circle — border only, extends off right edge */}
        <div
          className="flex-shrink-0 rounded-full"
          style={{
            width: CIRCLE,
            height: CIRCLE,
            marginLeft: -OVERLAP,
            border: "3px solid #055744",
          }}
        />
      </div>
    </section>
  );
}
