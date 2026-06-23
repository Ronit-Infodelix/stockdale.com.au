import { type ComponentPropsWithoutRef, type ElementType } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Container<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={`w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-6 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
