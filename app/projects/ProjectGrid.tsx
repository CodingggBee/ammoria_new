"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image?: string; // gradient fallback
  images?: string[]; // real images under /public
  features: string[];
};

type LightboxState = {
  images: string[];
  index: number;
  title: string;
} | null;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = (project: Project, startIndex: number) => {
    if (!project.images || project.images.length === 0) return;
    setLightbox({
      images: project.images,
      index: startIndex,
      title: project.title,
    });
  };

  const closeLightbox = () => setLightbox(null);

  const showNext = () => {
    setLightbox((current) => {
      if (!current) return current;
      return {
        ...current,
        index: (current.index + 1) % current.images.length,
      };
    });
  };

  const showPrev = () => {
    setLightbox((current) => {
      if (!current) return current;
      return {
        ...current,
        index:
          (current.index - 1 + current.images.length) %
          current.images.length,
      };
    });
  };

  // Close lightbox with Escape key
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const hasImages = project.images && project.images.length > 0;
          const coverImage = hasImages ? project.images![0] : undefined;

          return (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl border border-slate-200"
            >
              {hasImages && coverImage ? (
                <button
                  type="button"
                  onClick={() => openLightbox(project, 0)}
                  className="relative h-64 w-full overflow-hidden text-left"
                >
                  <Image
                    src={coverImage}
                    alt={project.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={project.id === 1}
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </button>
              ) : (
                <div
                  className={`relative h-64 ${project.image} flex items-center justify-center text-white opacity-90 transition-opacity group-hover:opacity-100`}
                >
                  <svg
                    className="h-20 w-20 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Get a similar project
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  {hasImages && (
                    <button
                      type="button"
                      onClick={() => openLightbox(project, 0)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-700 underline"
                    >
                      View photos
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl"
            aria-label="Close image viewer"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 text-white text-3xl"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="relative w-[90vw] max-w-4xl h-[70vh]">
            <Image
              src={lightbox.images[lightbox.index]}
              alt={lightbox.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 text-white text-3xl"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}


