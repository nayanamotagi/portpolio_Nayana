import { ReactNode } from "react";

/**
 * SectionTitle Component
 * 
 * Reusable component for section headings with:
 * - Main title
 * - Optional subtitle
 * - Consistent styling
 */
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-dark-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-4 rounded-full" />
    </div>
  );
}

