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
import CityKeyword from "@/components/Home/CityKeyword";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-full overflow-x-hidden">
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
      <CityKeyword />
    </div>
  );
}