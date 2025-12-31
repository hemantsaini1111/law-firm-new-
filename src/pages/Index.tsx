import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Team from "@/components/Team";
import CaseResults from "@/components/CaseResults";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerPop from "@/components/DisclaimerPop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DisclaimerPop/>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Process />
      <PracticeAreas />
      {/* <Team /> */}
      {/* <CaseResults /> */}
      {/* <Testimonials /> */}
      <CTA />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;
