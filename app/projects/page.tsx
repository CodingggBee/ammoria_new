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
      title: "Infrastructure & Roads",
      category: "Residential",
      location: "Downtown District",
      year: "2024",
      description:
        "High-quality road and infrastructure works delivering safe, durable, and efficient transport routes.",
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
      title: "Commercial Office Build-Out",
      category: "Commercial",
      location: "Business District",
      year: "2024",
      description:
        "Full office space renovation with modern design and efficient layout. Created an open-concept workspace with private offices, conference rooms, and collaborative areas.",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      // Add your commercial project images here, for example:
      // images: ["/projects/commercial-1.jpg", "/projects/commercial-2.jpg"],
      images: [],
      features: [
        "Open Concept Design",
        "Conference Rooms",
        "Modern HVAC",
        "Energy Efficient",
      ],
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      category: "Residential",
      location: "Heritage District",
      year: "2023",
      description:
        "Careful restoration preserving original character while adding modern amenities. This project required extensive research and attention to historical details.",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
      // Add your historic home images here
      images: [],
      features: [
        "Historical Preservation",
        "Modern Plumbing",
        "Updated Electrical",
        "Period-Appropriate Materials",
      ],
    },
    {
      id: 4,
      title: "Sustainable Eco-Home",
      category: "Residential",
      location: "Green Valley",
      year: "2024",
      description:
        "New construction focusing on sustainability and energy efficiency. Features solar panels, rainwater collection, and eco-friendly materials throughout.",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      // Add your eco-home images here
      images: [],
      features: [
        "Solar Panels",
        "Rainwater Collection",
        "LEED Certified",
        "Eco-Friendly Materials",
      ],
    },
    {
      id: 5,
      title: "Luxury Bathroom Remodel",
      category: "Residential",
      location: "Uptown Area",
      year: "2024",
      description:
        "High-end bathroom renovation with premium fixtures, custom tile work, and spa-like features. Includes heated floors and smart home integration.",
      image: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      // Add your bathroom remodel images here
      images: [],
      features: [
        "Heated Floors",
        "Premium Fixtures",
        "Custom Tile Work",
        "Smart Home Integration",
      ],
    },
    {
      id: 6,
      title: "Retail Space Renovation",
      category: "Commercial",
      location: "Shopping Center",
      year: "2023",
      description:
        "Complete retail space transformation with modern storefront, updated lighting, and efficient layout. Enhanced customer experience with improved flow and design.",
      image: "bg-gradient-to-br from-pink-400 to-pink-600",
      // Add your retail space images here
      images: [],
      features: [
        "Modern Storefront",
        "Updated Lighting",
        "Efficient Layout",
        "Customer-Focused Design",
      ],
    },
    {
      id: 7,
      title: "Multi-Unit Residential Complex",
      category: "Residential",
      location: "Suburban Development",
      year: "2023",
      description:
        "Construction of a 12-unit residential complex with modern amenities, energy-efficient systems, and community spaces. Completed on time and within budget.",
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      // Add your residential complex images here
      images: [],
      features: [
        "12 Units",
        "Community Spaces",
        "Energy Efficient",
        "Modern Amenities",
      ],
    },
    {
      id: 8,
      title: "Restaurant Interior Design & Build",
      category: "Commercial",
      location: "Downtown",
      year: "2024",
      description:
        "Complete interior design and construction for a new restaurant. Created an inviting atmosphere with custom lighting, unique finishes, and efficient kitchen layout.",
      image: "bg-gradient-to-br from-orange-400 to-orange-600",
      // Add your restaurant project images here
      images: [],
      features: [
        "Custom Lighting",
        "Unique Finishes",
        "Efficient Kitchen",
        "Inviting Atmosphere",
      ],
    },
    {
      id: 9,
      title: "Basement Finishing",
      category: "Residential",
      location: "Family Neighborhood",
      year: "2024",
      description:
        "Transformed unfinished basement into a functional family space with home theater, game room, and guest suite. Included proper insulation and moisture control.",
      image: "bg-gradient-to-br from-teal-400 to-teal-600",
      // Add your basement project images here
      images: [],
      features: [
        "Home Theater",
        "Game Room",
        "Guest Suite",
        "Moisture Control",
      ],
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

