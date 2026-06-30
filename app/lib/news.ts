// Single source of truth for News & Events content.
// Consumed by the /news-and-events page (NewsGrid) and the home page
// preview section (BlogsEvents), so both stay in sync automatically.

export interface Article {
  title: string;
  excerpt: string;
  category: string;
  day: string;
  month: string;
  image: string;
  href?: string;
}

export const TABS = ["News", "Events"] as const;
export type Tab = (typeof TABS)[number];

export const ARTICLES: Record<Tab, Article[]> = {
  Events: [
    {
      day: "03",
      month: "Jul",
      category: "Melbourne Event",
      title: "Firelight Festival lights up Docklands this winter.",
      excerpt:
        "Melbourne's winter fire festival returns to Docklands from 3-5 July with fire performances, light installations and family activities.",
      image: "/images/melbourne/section-1.webp",
      href: "https://whatson.melbourne.vic.gov.au/",
    },
    {
      day: "12",
      month: "Jul",
      category: "Melbourne Event",
      title: "Winter Wonderland at Skyline Melbourne.",
      excerpt:
        "Winter-themed entertainment and activities for families across the city, running until 12 July.",
      image: "/images/melbourne/section-2.webp",
      href: "https://whatson.melbourne.vic.gov.au/",
    },
    {
      day: "19",
      month: "Jul",
      category: "Theatre",
      title: "Waitress The Musical - final Melbourne performances.",
      excerpt:
        "The Broadway musical about resilience, friendship and hope plays its closing weeks through 19 July.",
      image: "/images/melbourne/section-3.webp",
      href: "https://whatson.melbourne.vic.gov.au/",
    },
    {
      day: "22",
      month: "Jul",
      category: "Orientation",
      title:
        "Semester 2, 2026 Orientation: get ready for your first semester at Stockdale.",
      excerpt:
        "Campus tours, an introduction to support services, and a welcome from our teaching staff.",
      image: "/images/home/gallery/students-group.webp",
      href: "/contact",
    },
    {
      day: "28",
      month: "Jul",
      category: "Semester Start",
      title: "Semester 2, 2026 classes begin at Stockdale.",
      excerpt:
        "Our mid-year intake for the Bachelor of Information Technology (Data Analytics) commences.",
      image: "/images/home/students.webp",
      href: "/graduation-courses",
    },
    {
      day: "06",
      month: "Aug",
      category: "Film Festival",
      title: "Melbourne International Film Festival (MIFF) 2026.",
      excerpt:
        "One of Australia's major film festivals returns from 6-23 August with international and local cinema across Melbourne.",
      image: "/images/melbourne/section-4.webp",
      href: "https://whatson.melbourne.vic.gov.au/",
    },
    {
      day: "19",
      month: "Aug",
      category: "Festival",
      title: "Now or Never: art, ideas, music and technology.",
      excerpt:
        "A twelve-day festival blending art, big ideas, music and technology across Melbourne from 19-30 August.",
      image: "/images/melbourne/hero.webp",
      href: "https://whatson.melbourne.vic.gov.au/",
    },
  ],
  News: [
    {
      day: "08",
      month: "Jul",
      category: "Immigration",
      title:
        "International student work hours: the 48-hour-per-fortnight cap.",
      excerpt:
        "Student visa holders can work up to 48 hours per fortnight while their course is in session, and unlimited hours during scheduled breaks. Master's by research and PhD students are exempt.",
      image: "/images/home/students.webp",
      href: "https://www.studyaustralia.gov.au/en/work-in-australia",
    },
    {
      day: "04",
      month: "Jul",
      category: "Visa Update",
      title:
        "Genuine Student (GS) requirement for student visa applicants.",
      excerpt:
        "The Genuine Student requirement has replaced the Genuine Temporary Entrant test. Applicants explain their course choice, how it fits their background, and their plans after study.",
      image: "/images/international/section-2.webp",
      href: "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500",
    },
    {
      day: "24",
      month: "Jun",
      category: "Visa Update",
      title: "Student visa (subclass 500) costs rise in 2026.",
      excerpt:
        "The student visa application charge has increased (recently to around AUD $2,000). Check the Department of Home Affairs for the current fee before you apply.",
      image: "/images/international/section.webp",
      href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    },
    {
      day: "16",
      month: "Jun",
      category: "Scholarships",
      title: "Scholarships for the 2026 intake - register your interest.",
      excerpt:
        "Support is being finalised for eligible domestic and international students. Visit our Scholarships page to learn more.",
      image: "/images/home/gallery/students-group.webp",
      href: "/scholarships",
    },
    {
      day: "10",
      month: "Jun",
      category: "Immigration",
      title: "Living-cost requirement for student visa applicants.",
      excerpt:
        "Student visa applicants must show evidence of savings for annual living costs - most recently set at around AUD $29,710. Confirm the current figure on the official Study Australia and Home Affairs websites.",
      image: "/images/melbourne/section.webp",
      href: "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500",
    },
    {
      day: "04",
      month: "Jun",
      category: "International",
      title:
        "International students: what you need to know about studying at Stockdale.",
      excerpt:
        "A guide to CRICOS-registered study, English requirements, and student visa pathways in Melbourne.",
      image: "/images/home/students-empowering.webp",
      href: "/graduation-courses/bachelor-of-information-technology/international",
    },
  ],
};
