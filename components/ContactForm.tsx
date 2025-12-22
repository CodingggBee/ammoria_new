"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message || "Thank you! Your message has been sent successfully. We'll get back to you soon.");
        reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An error occurred while sending your message. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-4">
        Send Us a Message
      </h2>
      <p className="text-slate-600 mb-6">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4">
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-medium text-green-800">{submitMessage}</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-medium text-red-800">{submitMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className={`w-full rounded-lg border px-4 py-3 text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
            }`}
            placeholder="Your full name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className={`w-full rounded-lg border px-4 py-3 text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
            }`}
            placeholder="your.email@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Project Type Field */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            {...register("projectType", {
              required: "Please select a project type",
            })}
            className={`w-full rounded-lg border px-4 py-3 text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.projectType ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
            }`}
            aria-invalid={errors.projectType ? "true" : "false"}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
          >
            <option value="">Select a project type</option>
            <option value="building-contracting">Building Contracting</option>
            <option value="road-infrastructure">Road & Infrastructure</option>
            <option value="interior-landscape">Interior & Landscape Design</option>
            <option value="sustainable-design">Sustainable Design</option>
            <option value="project-management">Project Management</option>
            <option value="renovation">Renovation & Remodeling</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className={`w-full rounded-lg border px-4 py-3 text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
              errors.message ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
            }`}
            placeholder="Tell us about your project..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#1E40AF] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#1E3A8A] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1E40AF]"
          aria-label={isSubmitting ? "Submitting form" : "Submit contact form"}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

