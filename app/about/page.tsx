import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ammoria Contracting - serving clients with excellence since 1982. Our story, values, and commitment to quality craftsmanship.",
  openGraph: {
    title: "About Us | Ammoria Contracting",
    description: "Learn about Ammoria Contracting - serving clients with excellence since 1982.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#163137] text-white text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtaDJ6TTM2IDMwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Decades of Experience.
              <span className="block text-sky-300"
              >One Focus: Your Project's Success.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              Serving clients with excellence since 1982
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                For over four decades, Ammoria Contracting has been built on a simple principle:
                putting our clients at the center of everything we do. What started as a small
                family business in 1982 has grown into a trusted name in construction, but our
                commitment to personalized service and exceptional craftsmanship has never wavered.
              </p>
              <p>
                We believe that every project, whether it's a small renovation or a major build,
                deserves the same level of attention, care, and expertise. Our team of skilled
                professionals brings decades of combined experience to every job, ensuring that
                your vision becomes reality with precision and quality that stands the test of time.
              </p>
              <p>
                Today, we're proud to serve homeowners and businesses across the region,
                maintaining the same client-centered approach that has defined us from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality",
                description: "We never compromise on craftsmanship. Every detail matters, and we use only the finest materials and proven techniques to ensure your project exceeds expectations.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description: "Honest communication, fair pricing, and ethical practices are the foundation of our business. We build trust through transparency and reliability.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Sustainability",
                description: "We're committed to responsible building practices that protect our environment. From energy-efficient solutions to sustainable materials, we help you build for the future.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mx-auto mb-4 w-fit text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-4 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Promise
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              What you can expect when you work with us
            </p>
            <div className="mt-12 space-y-8">
              {[
                {
                  title: "Transparent Timelines",
                  description: "We provide realistic project timelines and keep you informed every step of the way. No surprises, no delays without communication—just clear expectations and regular updates.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Cost Clarity",
                  description: "Upfront pricing with detailed estimates. We explain every cost, answer all your questions, and ensure there are no hidden fees. What you see is what you get.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Safety First",
                  description: "Your safety and the safety of our team is our top priority. We follow all safety protocols, maintain proper insurance, and ensure every project meets or exceeds industry safety standards.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((promise, index) => (
                <div
                  key={index}
                  className="flex gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      {promise.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">{promise.title}</h3>
                    <p className="mt-2 text-slate-600">{promise.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards / Certifications / Partner Logos Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Awards & Certifications
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Recognized excellence and trusted partnerships
            </p>
          </div>

          {/* Awards */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">Awards</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Best Contractor of the Year 2023",
                "Excellence in Residential Construction 2022",
                "Customer Choice Award 2021-2023",
              ].map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-10 w-10 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-slate-900">{award}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">Certifications</h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { name: "BBB Accredited", logo: "bg-blue-100" },
                { name: "OSHA Certified", logo: "bg-red-100" },
                { name: "EPA Certified", logo: "bg-green-100" },
                { name: "LEED Certified", logo: "bg-emerald-100" },
                { name: "Licensed & Bonded", logo: "bg-purple-100" },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className={`h-16 w-16 rounded-lg ${cert.logo} flex items-center justify-center`}>
                    <svg className="h-8 w-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center text-sm font-medium text-slate-700">{cert.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">Trusted Partners</h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {[
                "Premium Materials Co.",
                "EcoBuild Solutions",
                "TechHome Systems",
                "Quality Tools Inc.",
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-slate-400">
                      {partner.split(" ")[0].charAt(0)}
                    </div>
                    <div className="text-sm font-medium text-slate-600">{partner}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="
        bg-gradient-to-br
        from-[#1f4245]
        via-[#163137]
        to-[#0e2022]
        py-24
        text-white
      ">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch Today
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Ready to start your next project? Let's discuss how we can bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#163137] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Contact Us
              </a>
              <a
                href="tel:+97165439390"
                className="rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
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

