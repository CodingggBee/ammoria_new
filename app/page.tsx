"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[]; // optional gallery images
};

type LightboxState = {
  images: string[];
  index: number;
  title: string;
} | null;

export default function Home() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProjects: FeaturedProject[] = [
    {
      title: "Infrastructure & Roads",
      category: "Infrastructure",
      description:
        "High-quality road and infrastructure works delivering safe, durable, and efficient transport routes.",
      image: "/projects/Infrastructue & Roads1.jpg",
      images: [
        "/projects/Infrastructue & Roads1.jpg",
        "/projects/Infrastructue & Roads2.jpg",
      ],
    },
    {
      title: "Commercial Office Build-Out",
      category: "Commercial",
      description:
        "Full office space renovation with modern design and efficient layout.",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      // Add your commercial featured images here if needed
      images: [],
    },
    {
      title: "Historic Home Restoration",
      category: "Residential",
      description:
        "Careful restoration preserving original character while adding modern amenities.",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
      // Add your residential featured images here if needed
      images: [],
    },
  ];

  const openLightbox = (project: FeaturedProject, startIndex = 0) => {
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

  // Close homepage lightbox with Escape key (and support arrow navigation)
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white -mt-20 pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtaDJ6TTM2IDMwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building Excellence,
              <span className="block text-blue-400">One Project at a Time</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              Professional contracting services with decades of experience.
              Trusted by homeowners and businesses for quality craftsmanship and reliable service.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Free Quote
              </a>
              <a
                href="#projects"
                className="rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">25+</div>
              <div className="mt-2 text-sm font-medium text-slate-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="mt-2 text-sm font-medium text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-sm font-medium text-slate-600">Satisfaction Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Licensed</div>
              <div className="mt-2 text-sm font-medium text-slate-600">& Insured</div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>OSHA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>EPA Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Comprehensive contracting solutions for residential and commercial projects
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "General Contracting",
                description: "Full-service project management from planning to completion. We coordinate all aspects of your construction project.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Renovations & Remodeling",
                description: "Transform your space with expert design and construction. Kitchen, bathroom, and whole-home renovations.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Roofing & Siding",
                description: "Protect your property with quality roofing and siding solutions. Expert installation and repair services.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Electrical Work",
                description: "Licensed electricians for installations, repairs, and upgrades. Safe, code-compliant electrical solutions.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Plumbing Services",
                description: "Expert plumbing installation and repair. From leaky faucets to complete system replacements.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: "HVAC Installation",
                description: "Climate control solutions for your home or business. Energy-efficient heating and cooling systems.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 text-blue-600 transition-colors group-hover:text-blue-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="projects" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See some of our recent work and the quality we deliver
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const hasImages = project.images && project.images.length > 0;
              const isImagePath = project.image.startsWith("/");

              return (
                <div
                  key={project.title}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl"
                >
                  {isImagePath ? (
                    <button
                      type="button"
                      onClick={() =>
                        hasImages
                          ? openLightbox(project, 0)
                          : undefined
                      }
                      className="relative h-48 w-full overflow-hidden text-left"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />
                    </button>
                  ) : (
                    <div
                      className={`h-48 ${project.image} flex items-center justify-center text-white opacity-90 transition-opacity group-hover:opacity-100`}
                    >
                      <svg
                        className="h-16 w-16 opacity-50"
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
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-2 text-sm font-medium text-blue-600">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-slate-600">
                      {project.description}
                    </p>
                    {hasImages && (
                      <button
                        type="button"
                        onClick={() => openLightbox(project, 0)}
                        className="mt-3 text-xs font-medium text-slate-500 hover:text-slate-700 underline"
                      >
                        View photos
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-slate-800"
            >
              View All Projects
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Contact CTA */}
      {isStickyVisible && (
        <div
          id="sticky-cta"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl transition-all duration-300"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ready to Start Your Project?</h3>
                <p className="text-sm text-slate-600">Get a free quote today - no obligation required</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700"
                >
                  Get Free Quote
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section (for anchor link) */}
      <section id="contact" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Discuss Your Project
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Contact us today for a free consultation and quote
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+1234567890"
                className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700"
              >
                (123) 456-7890
              </a>
              <a
                href="mailto:info@ammoriacontracting.com"
                className="rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

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
