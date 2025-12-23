/**
 * Example usage of the Hero component
 * 
 * This file demonstrates how to import and use the Hero component
 * in your Next.js pages or other components.
 */

import Hero from "./Hero";
import Image from "next/image";

// Example 1: Basic usage with links
export function HeroExample1() {
  return (
    <Hero
      headline="Transform Your Space Today"
      subtext="Professional contracting services that bring your vision to life with quality craftsmanship and exceptional service."
      primaryButtonText="Get Started"
      primaryButtonHref="/contact"
      secondaryButtonText="Learn More"
      secondaryButtonHref="/about"
    />
  );
}

// Example 2: With image placeholder
export function HeroExample2() {
  return (
    <Hero
      headline="Building Excellence, One Project at a Time"
      subtext="Trusted by homeowners and businesses for quality craftsmanship and reliable service."
      primaryButtonText="Get Free Quote"
      primaryButtonHref="/contact"
      secondaryButtonText="View Our Work"
      secondaryButtonHref="/projects"
      image={
        <div className="relative h-96 w-full rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
          {/* Placeholder for image - replace with actual Image component */}
          <div className="flex h-full items-center justify-center text-white opacity-50">
            <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      }
    />
  );
}

// Example 3: With button click handlers
export function HeroExample3() {
  const handlePrimaryClick = () => {
    console.log("Primary button clicked");
    // Add your logic here
  };

  const handleSecondaryClick = () => {
    console.log("Secondary button clicked");
    // Add your logic here
  };

  return (
    <Hero
      headline="Start Your Project Today"
      subtext="Get in touch with our team to discuss your project needs and receive a free consultation."
      primaryButtonText="Contact Us"
      primaryButtonOnClick={handlePrimaryClick}
      secondaryButtonText="View Services"
      secondaryButtonOnClick={handleSecondaryClick}
    />
  );
}

// Example 4: With custom className
export function HeroExample4() {
  return (
    <Hero
      headline="Welcome to Ammoria Contracting"
      subtext="Your trusted partner for all construction and contracting needs."
      primaryButtonText="Get Started"
      primaryButtonHref="/contact"
      secondaryButtonText="Learn More"
      secondaryButtonHref="/about"
      className="bg-gradient-to-br from-blue-50 to-indigo-100"
    />
  );
}

