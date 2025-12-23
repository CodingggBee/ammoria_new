import { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "./ProjectGrid";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of completed projects. From residential renovations to commercial builds, see the quality and craftsmanship we deliver.",
  openGraph: {
    title: "Our Projects | Ammoria Contracting",
    description:
      "Explore our portfolio of completed projects showcasing our quality craftsmanship.",
  },
};

const projects = [
    {
      id: 1,
      title: "Sharjah University City, Main Road",
      category: "",
      location: "Infrastructure & Roads",
      // year: "",
      // description:"High-quality road and infrastructure works delivering safe, durable, and efficient transport routes.",
      description:"",
      // Fallback gradient background for when no images are provided
      
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      // You can add more images here as the gallery grows
      images: ["/projects/Infrastructue & Roads2.jpg","/projects/Infrastructue & Roads1.jpg"],
      features: [
        // "Custom Cabinetry",
        // "Quartz Countertops",
        // "Smart Appliances",
        // "LED Lighting",
      ],
    },
    {
      id: 2,
      title: "Villa Contracting",
      category: "",
      location: "Resedential Project",
      // year: "2024",
      description:
        "",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      // Add your commercial project images here, for example:
      // images: ["/projects/commercial-1.jpg", "/projects/commercial-2.jpg"],
      images: ["/projects/Villa Contracting2.jpg","/projects/Villa Contracting1.jpg"],
      features: [
      ],
    },
    {
      id: 3,
      title: "Al Ain Water Factory",
      category: "",
      location: "Industrial & Commercial",
      // year: "2023",
      description:
        "",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
      // Add your historic home images here
      images: ["/projects/Al Ain Water Factory1.jpg",
        "/projects/Al Ain Water Factory2.jpg",
        "/projects/Al Ain Water Factory3.jpg"
      ],
      features: [""
      ],
    },
    {
      id: 4,
      title: "Quwain Earth Works",
      category: "",
      location: " Infrastructure & Roads",
      // year: "2024",
      description:
        "",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      // Add your eco-home images here
      images: ["/projects/Quwain Earth Works1.jpeg",
        "/projects/Quwain Earth Works2.jpeg",
      ],
      features: [
      ""],
    },
    {
      id: 5,
      title: "Bahrain Palace Project",
      category: "",
      location: "Prestige Project",
      // year: "2024",
      description:
        "",
      image: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      // Add your bathroom remodel images here
      images: ["/projects/Bahrain Palace Project3.jpeg",
        "/projects/Bahrain Palace Project2.jpeg",
        "/projects/Bahrain Palace Project1.jpeg",
        "/projects/Bahrain Palace Project4.jpeg",
      ],
      features: [
      ""],
    },
    {
      id: 6,
      title: "Studio Apartment Interior Design",
      category: "",
      location: "Interior Design",
      // year: "2023",
      description:
        "",
      image: "bg-gradient-to-br from-pink-400 to-pink-600",
      // Add your retail space images here
      images: ["/projects/Studio Apartment Interior Design1.jpeg",
        "/projects/Studio Apartment Interior Design2.jpeg",
        "/projects/Studio Apartment Interior Design3.jpeg",
      ],
      features: [
      ""],
    },
    {
      id: 7,
      title: "Private Villa Landscaping",
      category: "",
      location: "Landscaping Project",
      // year: "2023",
      description:
        "",
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      // Add your residential complex images here
      images: ["/projects/Private Villa Landscaping4.jpeg",
        "/projects/Private Villa Landscaping2.jpeg",
        "/projects/Private Villa Landscaping3.jpeg",
        "/projects/Private Villa Landscaping1.jpeg",
        "/projects/Private Villa Landscaping5.jpeg",
        "/projects/Private Villa Landscaping6.jpeg",
        "/projects/Private Villa Landscaping7.jpeg",
      ],
      features: [
      ""],
    },
    {
      id: 8,
      title: "Villa Pool Landscaping",
      category: "",
      location: "Landscaping Project",
      // year: "2024",
      description:
        "",
      image: "bg-gradient-to-br from-orange-400 to-orange-600",
      // Add your restaurant project images here
      images: [
        "/projects/Villa Pool Landscaping4.jpeg",
        "/projects/Villa Pool Landscaping2.jpeg",
        "/projects/Villa Pool Landscaping3.jpeg",
        "/projects/Villa Pool Landscaping1.jpeg",
        "/projects/Villa Pool Landscaping5.jpeg",
        "/projects/Villa Pool Landscaping6.jpeg",
      ],
      features: [
      ""],
    },
    {
      id: 9,
      title: "Private Villa Interior Design",
      category: "",
      location: "Interior Design",
      // year: "2024",
      description:
        "",
      image: "bg-gradient-to-br from-teal-400 to-teal-600",
      // Add your basement project images here
      images: ["/projects/Private Villa Interior Design2.jpeg",
        "/projects/Private Villa Interior Design1.jpeg",
        "/projects/Private Villa Interior Design3.jpeg",
        "/projects/Private Villa Interior Design4.jpeg",
      ],
      features: [
      ""],
    },
    {
      id: 9,
      title: "Private Villa Interior Design",
      category: "",
      location: "Interior Design",
      // year: "2024",
      description:
        "",
      image: "bg-gradient-to-br from-teal-400 to-teal-600",
      // Add your basement project images here
      images: ["/projects/Private Villa Interior Design2.jpeg",
        "/projects/Private Villa Interior Design1.jpeg",
        "/projects/Private Villa Interior Design3.jpeg",
        "/projects/Private Villa Interior Design4.jpeg",
      ],
      features: [
      ""],
    },
  ];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white -mt-20 pt-32 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtaDJ6TTM2IDMwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              Explore our portfolio of completed projects showcasing quality
              craftsmanship, attention to detail, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Let's discuss how we can bring your vision to life with the same
              quality and attention to detail shown in these projects.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-lg border-2 border-slate-300 bg-transparent px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

