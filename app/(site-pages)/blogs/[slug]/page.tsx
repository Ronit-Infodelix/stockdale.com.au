import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/app/components/shared/PageHero";
import Container from "@/app/components/ui/Container";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";
import CTASection from "../../(home)/components/CTASection";
import JsonLd from "@/app/components/seo/JsonLd";
import { breadcrumbLd, faqLd } from "@/app/lib/structured-data";
import { SITE, absoluteUrl } from "@/app/lib/seo";
import { POSTS, getPost } from "../posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const path = `/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "Stockdale blog", "study in Melbourne", post.title],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: `${post.title} | ${SITE.shortName}`,
      description: post.excerpt,
      siteName: SITE.name,
      locale: SITE.locale,
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${SITE.shortName}`,
      description: post.excerpt,
      images: [post.image],
      site: SITE.twitter,
    },
  };
}

/** Renders inline [text](/path) markdown links inside a paragraph. */
function RichText({ text }: { text: string }): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    parts.push(
      <Link
        key={key++}
        href={m[2]}
        className="text-brand-green-dark underline underline-offset-2 hover:text-brand-green-darkest"
      >
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return parts;
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blogs/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "en-AU",
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/logo/main.png") },
    },
    mainEntityOfPage: absoluteUrl(path),
  };

  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image={post.image}
          title={post.title}
          subtitle={`${post.category} · ${post.dateLabel} · ${post.readTime}`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: "/blogs" },
            { label: post.category },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <JsonLd data={[articleLd, breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: post.title, path },
        ]), faqLd(post.faqs)]} />

        <article className="bg-white py-16">
          <Container className="max-w-3xl">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 font-sans text-[13px] text-brand-green-dark hover:text-brand-green-darkest transition-colors mb-8"
            >
              <ArrowLeft size={15} strokeWidth={2} />
              All blogs
            </Link>

            {/* Intro */}
            <div className="flex flex-col gap-5">
              {post.intro.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-[18px] leading-8 text-brand-black"
                >
                  <RichText text={para} />
                </p>
              ))}
            </div>

            {/* Body sections */}
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-agatho text-[26px] leading-tight text-black mb-4">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="font-sans text-[16px] leading-7 text-brand-gray"
                    >
                      <RichText text={para} />
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* FAQ */}
            <section className="mt-14 border-t border-gray-100 pt-10">
              <h2 className="font-agatho text-[26px] leading-tight text-black mb-6">
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-sans font-semibold text-[16px] text-black mb-1.5">
                      {faq.question}
                    </h3>
                    <p className="font-sans text-[15px] leading-7 text-brand-gray">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-brand-green-light px-7 py-8 text-center">
              <h2 className="font-agatho text-[24px] leading-tight text-brand-green-darkest mb-2">
                Ready to take the next step?
              </h2>
              <p className="font-sans text-[14px] leading-6 text-brand-green-darkest/80 max-w-xl mx-auto mb-5">
                Explore the Bachelor of Information Technology (Data Analytics) or
                get in touch with our team to learn more about studying at
                Stockdale.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Link
                  href="/graduation-courses"
                  className="inline-flex items-center bg-brand-green-darkest text-white font-sans font-semibold text-[13px] px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Explore the Degree
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-brand-green-darkest font-sans font-semibold text-[13px] px-6 py-3 rounded-full border border-brand-green-darkest/15 hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Container>
        </article>
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
