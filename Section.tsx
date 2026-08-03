import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  /** wrap children in a centered max-width container */
  container?: boolean;
  as?: ElementType;
};

export function Section({
  id,
  className,
  children,
  container = true,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("scroll-mt-24", className)}>
      {container ? (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}
