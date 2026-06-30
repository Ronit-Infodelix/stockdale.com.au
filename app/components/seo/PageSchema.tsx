import JsonLd from "./JsonLd";
import { pageGraphLd, type UiCrumb } from "@/app/lib/structured-data";

/**
 * Drop-in structured data for a standard content page. Emits a WebPage node
 * (from the central PAGES metadata) and a BreadcrumbList built from the same
 * crumbs passed to <PageHero>. Server component - inlined into the HTML.
 *
 *   <PageSchema path="/about-us" crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
 */
export default function PageSchema({
  path,
  crumbs,
}: {
  path: string;
  crumbs?: UiCrumb[];
}) {
  return <JsonLd data={pageGraphLd(path, crumbs)} />;
}
