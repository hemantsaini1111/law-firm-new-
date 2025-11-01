import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Team from "@/components/Team";
import CaseResults from "@/components/CaseResults";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <About />
      <Stats />
      <WhyChooseUs />
      <Process />
      <Team />
      <CaseResults />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
