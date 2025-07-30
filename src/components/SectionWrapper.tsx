import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  glass?: boolean;
  className?: string;
}

export default function SectionWrapper({ children, glass, className = "" }: SectionWrapperProps) {
  return (
    <section className={`${glass ? "glass-section" : "py-12"} ${className}`}>
      {children}
    </section>
  );
} 