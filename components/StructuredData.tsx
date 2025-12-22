export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Ammoria Contracting",
    description: "Professional contracting services with decades of experience. Trusted by homeowners and businesses for quality craftsmanship and reliable service.",
    url: "https://ammoriacontracting.com",
    logo: "https://ammoriacontracting.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890",
      contactType: "Customer Service",
      email: "info@ammoriacontracting.com",
      areaServed: "CA",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Construction Avenue",
      addressLocality: "Building City",
      addressRegion: "BC",
      postalCode: "V1A 2B3",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.facebook.com/ammoriacontracting",
      "https://www.linkedin.com/company/ammoriacontracting",
      "https://twitter.com/ammoriacontracting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

