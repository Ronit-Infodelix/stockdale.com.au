import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/app/components/shared/PageHero";
import Container from "@/app/components/ui/Container";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";
import CTASection from "../(home)/components/CTASection";
import { pageMetadata } from "@/app/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";
import { breadcrumbLd, webPageLd, itemListLd } from "@/app/lib/structured-data";
import { POSTS, type BlogPost } from "./posts";

export const metadata = pageMetadata("/blogs");

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group rounded-[10px] border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
    >
      <div className="relative h-[220px] bg-gray-100 shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0">
          <div className="bg-brand-green-darkest rounded-r-sm px-3 py-1 inline-block">
            <span className="font-sans text-[10px] font-medium text-white uppercase tracking-wide">
              {post.category}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-6 py-5 gap-2">
        <p className="font-sans text-[11px] text-brand-gray">
          {post.dateLabel} · {post.readTime}
        </p>
        <h2 className="font-sans text-[17px] font-medium leading-6 text-black group-hover:text-brand-green-dark transition-colors">
          {post.title}
        </h2>
        <p className="font-sans text-[12px] leading-5 text-brand-gray">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 font-sans text-[12px] text-brand-green-dark mt-auto pt-2">
          Read article
          <ChevronRight size={12} strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export default function BlogsPage() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/students-campus.webp"
          title="Blogs"
          subtitle="Insights, guides and advice from Stockdale - study tips, careers in data and technology, life in Melbourne, and support for domestic and international students."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <JsonLd
          data={[
            webPageLd({
              path: "/blogs",
              name: "Blogs | Stockdale Institute",
              description:
                "Insights, guides and articles from Stockdale Higher Education Institute for prospective and current students.",
            }),
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blogs" },
            ]),
            itemListLd({
              path: "/blogs",
              name: "Stockdale Institute blog articles",
              items: POSTS.map((post) => ({
                name: post.title,
                path: `/blogs/${post.slug}`,
              })),
            }),
          ]}
        />
        <section className="bg-white py-16">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {POSTS.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
