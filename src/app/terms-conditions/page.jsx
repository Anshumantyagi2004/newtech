"use client";

import {
  FaShieldAlt,
  FaFileAlt,
  FaBalanceScale,
  FaLock,
  FaExclamationTriangle,
  FaTools,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaFileAlt />,
    title: "INTERPRETATION OF TERMS",
    content: [
      "Refers to Newtech Video Systems Pvt. Ltd. (NVS), including its employees, representatives, affiliates, and authorized partners.",

      "Refers to any individual, organization, company, or entity accessing the website or interacting with NVS through the website.",

      "Website Platform",
      "Refers to the official NVS website, including all associated pages, content, media, forms, and digital services.",
    ],
  },

  {
    icon: <FaShieldAlt />,
    title: "USER CONSENT",
    content: [
      "By accessing this website, you acknowledge that you have read, understood, and accepted these Website Terms & Conditions.",
      "If you do not agree with any part of these terms, kindly discontinue the use of this website.",
    ],
  },

  {
    icon: <FaFileAlt />,
    title: "USE OF WEBSITE",
    content: [
      "The content available on this website is intended solely for general business, informational, and promotional purposes related to NVS products, services, and project solutions.",
      "Users are expected to use the website responsibly and in compliance with all applicable laws and regulations.",
    ],
  },

  {
    icon: <FaTools />,
    title: "PRODUCT & PROJECT INFORMATION",
    content: [
      "All product specifications, visuals, technical details, renderings, layouts, and project references displayed on the website are indicative in nature and may be modified without prior notice.",

      "Actual product configurations, dimensions, finishes, and deliverables may vary depending on project scope, technical requirements, and mutually agreed commercial terms.",

      "Any enquiry, request, or communication submitted through the website shall not be considered a final contractual commitment unless confirmed officially by NVS.",
    ],
  },

  {
    icon: <FaShieldAlt />,
    title: "WARRANTY & AFTER-SALES SUPPORT",
    content: [
      "Warranty coverage, technical support, AMC/CAMC services, and maintenance assistance shall be provided based on mutually agreed terms finalized during project execution or product delivery.",

      "Warranty applicability may differ depending on Product type, Project scope, Installation conditions, Operating environment and Commercial agreement.",

      "Detailed warranty and support information may be shared separately during project finalization.",

      "Warranty Exclusions:",

      "Physical damage",
      "Improper installation",
      "Unauthorized repair / modification",
      "Water or fire damage",
      "Voltage fluctuation",
      "Natural disasters",
      "Improper operation or maintenance",
      "Removal or alteration of serial numbers",
    ],
  },

  {
    icon: <FaLock />,
    title: "OWNERSHIP OF CONTENT",
    content: [
      "All website materials including logos, graphics, product images, videos, technical documents, designs, text content and layouts are the exclusive property of NVS unless otherwise specified.",

      "No content from this website may be copied, reproduced, modified, published, or commercially used without prior written approval from NVS.",
    ],
  },

  {
    icon: <FaExclamationTriangle />,
    title: "PROHIBITED ACTIVITIES",
    content: [
      "Use website for unlawful purposes",
      "Attempt unauthorized access",
      "Upload malicious software",
      "Misrepresent association with NVS",
      "Copy or misuse website content",
      "Disrupt website functionality or security",
    ],
  },

  {
    icon: <FaFileAlt />,
    title: "EXTERNAL LINKS",
    content: [
      "This website may include links to third-party websites or external platforms for user convenience.",
      "NVS does not control or take responsibility for content, policies, or practices of third-party websites.",
    ],
  },

  {
    icon: <FaFileAlt />,
    title: "GENERAL DISCLAIMER",
    content: [
      "All information available on the website is provided on an 'as available' basis.",

      "NVS does not guarantee uninterrupted website access, complete accuracy of content, error-free information, compatibility with all systems or third-party content.",

      "Technical specifications and visuals may change based on product updates and project requirements.",
    ],
  },

  {
    icon: <FaBalanceScale />,
    title: "LIABILITY LIMITATION",
    content: [
      "NVS shall not be responsible for direct, indirect, incidental, or consequential damages arising from website use, inability to access, reliance on website information, technical interruptions, external links or third-party services.",

      "Users access and use the website at their own discretion and risk.",
    ],
  },

  {
    icon: <FaShieldAlt />,
    title: "USER COMMUNICATION & DATA",
    content: [
      "Users agree to receive communication related to quotations, project discussions, technical support, service updates and business communication.",

      "User information shall be managed in accordance with the NVS Privacy Policy.",
    ],
  },

  {
    icon: <FaTools />,
    title: "SERVICE & SUPPORT REQUESTS",
    content: [
      "Clients may contact the NVS support team for technical assistance, troubleshooting support, maintenance services, AMC/CAMC support and service-related enquiries.",

      "Support requests may be managed through email communication, service channels or ticket-based systems.",
    ],
  },

  {
    icon: <FaFileAlt />,
    title: "MODIFICATIONS TO TERMS",
    content: [
      "NVS reserves the right to update, revise, or modify these Website Terms & Conditions at any time without prior notice.",
    ],
  },

  {
    icon: <FaBalanceScale />,
    title: "APPLICABLE LAW & JURISDICTION",
    content: [
      "These Website Terms & Conditions shall be governed in accordance with the laws of India.",

      "Any disputes shall be subject to jurisdiction of competent courts in India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg-2.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Golden Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-red-900/20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <div
            className="
      inline-block
      px-5
      py-2
      rounded-full
      border
      border-red-500
      text-red-500
      mb-8
    "
          >
            LEGAL • TERMS • WARRANTY
          </div>

          <h1 className="text-3xl md:text-7xl font-black leading-tight">
            Legal Information
            <span className="block text-red-500">& Warranty Policy</span>
          </h1>

          <p
            className="
      max-w-3xl
      mx-auto
      mt-8
      text-lg
      md:text-xl
      text-gray-300
    "
          >
            Please review the Website Terms & Conditions before using this
            website.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-5 py-5 md:py-20">
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="
                bg-[#0f0f0f]
                rounded-3xl
                p-5
                md:p-8
                border
                border-zinc-800
                hover:border-red-600
                transition
              "
            >
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-red-500
                  text-black
                  text-xl
                  flex
                  justify-center
                  items-center
                "
                >
                  {section.icon}
                </div>

                <h2 className="text-lg md:text-3xl font-semibold">
                  {index + 1}. {section.title}
                </h2>
              </div>

              <div className="space-y-5">
                {section.content.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-base md:text-lg text-gray-300 "
                  >
                    <span className="text-red-500 ">●</span>

                    <p className="text-justify">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
