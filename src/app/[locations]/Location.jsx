"use client";
import Category from '@/components/Home/Category';
import CategorySlider from '@/components/Home/CategorySlider';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import {
  Monitor,
  Settings,
  LayoutGrid,
  Wrench,
  Leaf,
  Headphones, Store,
  ShoppingBag,
  Building2,
  Presentation,
  Utensils,
  Megaphone, ClipboardList,
  MapPin,
  PencilRuler,
  CheckCircle,
  LifeBuoy, ChevronDown
} from "lucide-react";
import CTASection from '@/components/Main/Cta';
import CertificateSlider from '@/components/Main/CertificateSlider';
import ClientSlider from '@/components/Main/ClientSlider';
import { products } from '@/data/data';
import { motion } from "framer-motion";

export default function Location() {
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const formatCityName = (slug) => {
    if (!slug) return "India";

    return slug
      .replace(/\((.*?)\)/g, " ($1)")
      .replace(/-/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  const citySlug = params?.locations?.includes("-in-")
    ? params.locations.split("-in-")[1]
    : null;

  const cityName = citySlug ? formatCityName(citySlug) : "India";

  const features = [
    {
      title: "Advanced Display Technology",
      description:
        "State-of-the-art LED displays with superior brightness, high resolution, and seamless visuals for maximum impact in any environment.",
      icon: Monitor,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Customized Solutions",
      description:
        "Fully tailored LED display solutions designed according to your business needs, space, audience, and branding strategy.",
      icon: Settings,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Indoor & Outdoor Expertise",
      description:
        "Durable outdoor displays for harsh conditions and high-definition indoor screens for clear and vibrant visuals.",
      icon: LayoutGrid,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "End-to-End Service",
      description:
        "From consultation to installation, our team ensures a smooth and hassle-free experience with complete project management.",
      icon: Wrench,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Energy Efficient Solutions",
      description:
        "Eco-friendly LED displays that reduce power consumption while maintaining top-notch performance and cost efficiency.",
      icon: Leaf,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "After-Sales Support",
      description:
        "Reliable maintenance and support services to ensure your displays run smoothly with minimal downtime.",
      icon: Headphones,
      color: "bg-red-100 text-red-600",
    },
  ];

  const applications = [
    {
      title: "Retail Stores & Showrooms",
      description:
        "Showcase products, highlight offers, and create engaging in-store experiences that attract customers and drive sales.",
      icon: Store,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Shopping Malls",
      description:
        "Perfect for brand promotions, digital signage, and interactive ads in high-footfall mall environments.",
      icon: ShoppingBag,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Corporate Offices",
      description:
        "Enhance internal communication, presentations, and branding with professional LED display solutions.",
      icon: Building2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Events & Exhibitions",
      description:
        "Deliver high-quality visuals for stage backdrops, live streaming, and promotions to maximize audience engagement.",
      icon: Presentation,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Restaurants & Hotels",
      description:
        "Use LED displays for menu boards, promotions, and ambiance enhancement in hospitality spaces.",
      icon: Utensils,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Public Advertising Spaces",
      description:
        "Ideal for billboards and transport hubs with high brightness and durability for maximum outdoor visibility.",
      icon: Megaphone,
      color: "bg-red-100 text-red-600",
    },
  ];

  const steps = [
    {
      title: "Requirement Understanding",
      description:
        "We analyze your business goals, advertising needs, and space to recommend the most suitable LED display solution.",
      icon: ClipboardList,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Site Inspection",
      description:
        "Our experts inspect your location to evaluate lighting, visibility, and installation feasibility for best performance.",
      icon: MapPin,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Solution Design",
      description:
        "We create a customized display plan including screen size, resolution, and placement for maximum impact.",
      icon: PencilRuler,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Installation",
      description:
        "Professional installation by skilled technicians ensuring safety, precision, and long-term durability.",
      icon: Settings,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Testing & Handover",
      description:
        "We test brightness, clarity, and performance, then guide you on operating your LED display system.",
      icon: CheckCircle,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous maintenance and support to ensure smooth operation with minimal downtime.",
      icon: LifeBuoy,
      color: "bg-red-100 text-red-600",
    },
  ];

  const faqs = [
    {
      question: `What is the cost of Advertising LED Display in ${cityName}?`,
      answer:
        "The cost depends on screen size, resolution, indoor/outdoor usage, and installation needs. We provide customized solutions based on your budget.",
    },
    {
      question: "What is the difference between indoor and outdoor LED displays?",
      answer:
        "Indoor displays offer higher resolution for close viewing, while outdoor displays have higher brightness and weatherproofing for visibility in sunlight and harsh conditions.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Installation time varies based on project size and complexity, typically ranging from a few days to a couple of weeks.",
    },
    {
      question: `Are LED displays suitable for outdoor use in ${cityName} weather?`,
      answer:
        "Yes, our outdoor LED displays are designed to withstand heat, dust, and rain, ensuring reliable performance in all weather conditions.",
    },
    {
      question: "Can I update content on the LED display easily?",
      answer:
        "Yes, our systems include user-friendly software to update images, videos, and text in real-time.",
    },
    {
      question: "What maintenance is required for LED displays?",
      answer:
        "Minimal maintenance is needed. Regular cleaning and occasional technical checks ensure optimal performance. We also provide full support services.",
    },
    {
      question: "What sizes are available for LED displays?",
      answer:
        "We offer fully customizable sizes, from small indoor screens to large outdoor billboards.",
    },
    {
      question: "Do you provide warranty and support?",
      answer:
        "Yes, we provide warranty and reliable after-sales support to ensure long-term performance.",
    },
  ];

  const catProduct = products.filter((i) => (i.catId == "indoor-advertising-led-displays"))

  return (<>
    <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/boardroom.jpg)`, // change path
        }}
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-300">Advertising LED Display in {cityName}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          Advertising LED Display in {cityName}
        </h1>
      </div>
    </section>

    <CategorySlider />

    <section className="w-full py-12 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Leading Advertising LED Display in {cityName}
          </h1>

          <p className="text-gray-600 mb-4">
            Newtech Video Systems Private Limited is a trusted provider of
            Advertising LED Display in {cityName}, offering innovative and
            high-quality digital display solutions tailored for modern
            businesses. With a strong focus on advanced technology,
            performance, and customer satisfaction, we help brands create
            powerful visual impact in {cityName}’s highly competitive and
            fast-paced market.
          </p>

          <p className="text-gray-600 mb-6">
            We specialize in the design, supply, and installation of customized
            Advertising LED Display in {cityName} for both indoor and outdoor
            applications. From retail outlets and corporate offices to events
            and large outdoor advertising setups, our LED displays are built
            for superior brightness, clarity, and durability.
          </p>
        </div>

        <div className="w-full">
          <img
            src="/aura-1.jpg"
            alt="Advertising LED Display"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>

    <Category />

    <section className="w-full py-10 px-4 md:px-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us for Advertising LED Display in {cityName}
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We provide innovative, reliable, and high-performance LED display
          solutions tailored to help your business stand out.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white border"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>

    <CTASection />

    <section className='w-full py-10 px-4 md:px-16 bg-gray-100'>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Advertising LED Displays
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {catProduct.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-3xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={item?.img}
              alt={item.name}
              className="w-full h-[220px] md:h-[280px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="text-base md:text-lg font-medium">
                {item?.name}
              </h3>

              <div className="mt-4">
                <Link href={`/products/${item?.id}`} className="text-sm font-medium border border-white px-4 py-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition">
                  View Displays →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="w-full py-10 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Applications of Advertising LED Display in {cityName}
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Our LED display solutions are widely used across industries to
          enhance visibility, engage audiences, and deliver impactful digital
          communication.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white border"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>

    <section className="w-full py-10 px-4 md:px-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Process – How We Work
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We follow a structured and customer-focused approach to deliver
          high-quality LED display solutions with efficiency and precision.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white border"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${step.color}`}
              >
                <Icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>

    <CertificateSlider />
    <ClientSlider />

    <section className="w-full py-10 px-6 md:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions (FAQs) - Advertising LED Display in {cityName}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-black transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  </>)
}
