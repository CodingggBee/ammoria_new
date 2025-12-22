"use client";

import { ReactNode } from "react";

interface HeroProps {
  headline: string;
  subtext: string;
  primaryButtonText: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText: string;
  secondaryButtonHref?: string;
  secondaryButtonOnClick?: () => void;
  image?: ReactNode;
  className?: string;
}

export default function Hero({
  headline,
  subtext,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonHref,
  secondaryButtonOnClick,
  image,
  className = "",
}: HeroProps) {
  const primaryButton = primaryButtonHref ? (
    <a
      href={primaryButtonHref}
      className="inline-flex items-center justify-center rounded-lg bg-[#1E40AF] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#1E3A8A] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2"
      aria-label={primaryButtonText}
    >
      {primaryButtonText}
    </a>
  ) : (
    <button
      onClick={primaryButtonOnClick}
      type="button"
      className="inline-flex items-center justify-center rounded-lg bg-[#1E40AF] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#1E3A8A] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2"
      aria-label={primaryButtonText}
    >
      {primaryButtonText}
    </button>
  );

  const secondaryButton = secondaryButtonHref ? (
    <a
      href={secondaryButtonHref}
      className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-transparent px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      aria-label={secondaryButtonText}
    >
      {secondaryButtonText}
    </a>
  ) : (
    <button
      onClick={secondaryButtonOnClick}
      type="button"
      className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-transparent px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      aria-label={secondaryButtonText}
    >
      {secondaryButtonText}
    </button>
  );

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left">
            <h1 className="animate-[fadeInUp_0.6s_ease-out] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 animate-[fadeInUp_0.6s_ease-out_0.2s_both] text-lg leading-8 text-slate-600 sm:text-xl">
              {subtext}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both] sm:flex-row sm:justify-center lg:justify-start">
              {primaryButton}
              {secondaryButton}
            </div>
          </div>

          {/* Image Placeholder - Right Side (Desktop Only) */}
          {image && (
            <div className="hidden animate-[fadeIn_0.8s_ease-out_0.3s_both] lg:block">
              {image}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}

