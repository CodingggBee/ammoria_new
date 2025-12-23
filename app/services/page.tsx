import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive contracting solutions including building contracting, road & infrastructure, interior & landscape design, sustainable design, and project management.",
  openGraph: {
    title: "Our Services | Ammoria Contracting",
    description: "Comprehensive contracting solutions for residential and commercial projects.",
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#163137] text-white text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtaDJ6TTM2IDMwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-2xl font-semibold text-blue-400 sm:text-3xl"
            >
              Building Value for Every Client
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              From concept to completion, we deliver comprehensive solutions that maximize your investment,
              minimize your stress, and exceed your expectations. Every project is an opportunity to build
              lasting value for your business or home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Building Contracting */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Building Construction</h2>
                </div>
                <p className="mb-6 text-lg leading-7 text-slate-600">
                  We offer full-scope building construction services for villas, warehouses,
                  and office developments. From groundwork to completion, we manage projects with strict quality control,
                  safety standards, and compliance with local authority regulations, ensuring timely and efficient delivery.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-400"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#163137] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#0e2022]"
                  >
                    Request Quote
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Road & Infrastructure */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Landscaping & External Works </h2>
                </div>
                <p className="mb-6 text-lg leading-7 text-slate-600">
                  We provide comprehensive landscaping and external works solutions, including hardscape, softscape, outdoor lighting,
                  irrigation, and external finishes. Our designs enhance outdoor functionality and visual appeal while ensuring durability and performance
                  in regional climate conditions.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-400"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#163137] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#0e2022]"
                  >
                    Request Quote
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Interior & Landscape Design */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Interior Design & Fit-Out </h2>
                </div>
                <p className="mb-6 text-lg leading-7 text-slate-600">
                  We deliver complete interior design and fit-out solutions for residential and commercial spaces.
                  Our services cover space planning, material selection, joinery, MEP coordination, and final execution,
                  ensuring functional, aesthetic, and high-quality interiors from concept to handover.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-400"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#163137] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#0e2022]"
                  >
                    Request Quote
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Sustainable Design */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Swimming Pools & Water Features</h2>
                </div>
                <p className="mb-6 text-lg leading-7 text-slate-600">
                  We specialize in the design and construction of swimming pools and custom water features,
                  combining modern engineering with elegant aesthetics. Our solutions are tailored to residential and commercial
                  projects, focusing on safety, quality, and long-term reliability.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-400"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#163137] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#0e2022]"
                  >
                    Request Quote
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Management
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative p-8 lg:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">Project Management</h2>
                </div>
                <p className="mb-6 text-lg leading-7 text-slate-600 lg:text-xl lg:max-w-4xl">
                  End-to-end project management services that ensure your project stays on schedule, 
                  within budget, and meets all quality standards. Our experienced project managers 
                  coordinate all aspects of your build, from initial planning and permits to final 
                  inspections and handover. We handle the complexity so you can focus on the results.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-400"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700"
                  >
                    Request Quote
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="
            rounded-xl
            bg-gradient-to-r
            from-[#1f4245]
            via-[#163137]
            to-[#0e2022]
            px-8 py-12
            text-center text-white
            shadow-xl"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Let's discuss how our services can bring value to your next project.
              Get a free consultation and quote today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#163137] shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+97165439390"
                className="rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
              >
                Call (+971) 65439390
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

