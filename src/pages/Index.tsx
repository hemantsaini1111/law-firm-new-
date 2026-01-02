import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
// import Careers from "@/components/Careers";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Team from "@/components/Team";
import CaseResults from "@/components/CaseResults";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Process />
      <PracticeAreas />
      {/* <Careers /> */}
      <Team />
      {/* <CaseResults /> */}
      {/* <Testimonials /> */}
      <CTA />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;
