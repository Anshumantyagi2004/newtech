import Navbar from "@/components/Main/Navbar";
import Sidebar from "@/components/Main/Sidebar";
import MobileTabbar from "@/components/Main/BottomBar";
import Hero from "@/components/Home/Hero";
import CtaForm from "@/components/Home/CtaForm";
import Category from "@/components/Home/Category";
import AboutUs from "@/components/Home/AboutUs";
import ClientExperience from "@/components/Main/ClientExperience";
import AboutSolutions from "@/components/Home/AboutSolutions";
import CategorySlider from "@/components/Home/CategorySlider";
import WhyChooseUs from "@/components/Home/WhyUs";
import CTASection from "@/components/Main/Cta";
import FAQSection from "@/components/Home/FAQ";
import ClientSlider from "@/components/Main/ClientSlider";
import CertificateSlider from "@/components/Main/CertificateSlider";
import ClientSays from "@/components/Home/Testimonial";
import Footer from "@/components/Main/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <Hero />
        <CategorySlider />
        <CtaForm />
        <Category />
        <AboutUs />
        <ClientExperience />
        <AboutSolutions />
        <WhyChooseUs />
        <CTASection />
        <CertificateSlider />
        <ClientSlider />
        <ClientSays />
        <FAQSection />
        <Footer />
      </div>

      <MobileTabbar />
    </div>
  );
}