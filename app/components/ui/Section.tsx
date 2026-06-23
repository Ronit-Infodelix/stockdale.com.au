import { type ComponentPropsWithoutRef, type ElementType } from "react";
import Container from "./Container";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Section<T extends ElementType = "section">({
  as,
  className = "",
  containerClassName = "",
  children,
  ...props
}: SectionProps<T>) {
  const Tag = as ?? "section";
  return (
    <Tag className={`w-full py-12 md:py-16 lg:py-20 ${className}`} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
