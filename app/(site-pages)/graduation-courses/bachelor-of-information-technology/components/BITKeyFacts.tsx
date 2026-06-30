import Container from "@/app/components/ui/Container";

type FeeAudience = "domestic" | "international";

const FEES_BY_AUDIENCE: Record<FeeAudience, string> = {
  domestic: "$43,200 (Domestic students)",
  international: "$50,400 (International students)",
};
const FEES_BOTH = `${FEES_BY_AUDIENCE.domestic}\n${FEES_BY_AUDIENCE.international}`;

/**
 * `variant` shows only the matching audience's fee in the Fees cell (used on
 * the Domestic and International pages). With no variant, both show (the
 * course page).
 */
function courseMeta(variant?: FeeAudience) {
  const fees = variant ? FEES_BY_AUDIENCE[variant] : FEES_BOTH;
  return [
    [
      { label: "Award Title", value: "Bachelor of Information Technology" },
      { label: "Level of Study", value: "Bachelor level - AQF Level 7" },
      { label: "Duration", value: "3 years Full Time (Part Time options available)" },
    ],
    [
      { label: "Exit Points", value: "Not Applicable" },
      { label: "Location", value: "Level 2, 120 Miller Street, West Melbourne VIC 3003" },
      { label: "Student Workload", value: "4 units each semester - 8 units per year" },
    ],
    [
      { label: "Field of Education", value: "02 (Information Technology)" },
      { label: "Credit Points", value: "240 required for completion" },
      { label: "Fees", value: fees },
    ],
  ];
}

export default function BITKeyFacts({ variant }: { variant?: FeeAudience }) {
  const courseMetaRows = courseMeta(variant);
  return (
    <section id="key-features" className="bg-[#f8f5eb] py-14 scroll-mt-20">
      <Container>
        <h2 className="font-agatho text-[40px] leading-[44px] text-[#0a0a0a] mb-8">
          Key Features
        </h2>
        <div className="divide-y divide-gray-200">
          {courseMetaRows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-3 gap-8 py-7">
              {row.map((cell) => (
                <div key={cell.label}>
                  <p className="font-sans text-[12px] font-normal text-brand-gray uppercase tracking-wider mb-2">
                    {cell.label}
                  </p>
                  <p className="font-sans text-[18px] text-[#0a0a0a] leading-[26px] whitespace-pre-line">
                    {cell.value}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
