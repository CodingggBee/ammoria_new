/**
 * Example usage of the ContactForm component
 * 
 * This file demonstrates how to import and use the ContactForm component
 * in your Next.js pages or other components.
 */

import ContactForm from "./ContactForm";

// Example 1: Basic usage in a page
export function ContactPageExample() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
}

// Example 2: In a two-column layout with contact info
export function ContactPageWithInfoExample() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactForm />
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Phone</h3>
                <a href="tel:+1234567890" className="text-lg font-semibold text-slate-900 hover:text-blue-600">
                  (123) 456-7890
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Email</h3>
                <a href="mailto:info@example.com" className="text-lg font-semibold text-slate-900 hover:text-blue-600">
                  info@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

