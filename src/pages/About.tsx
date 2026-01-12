import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutSectionBg from "@/assets/svg/aboutsection3.svg";
import heroBg from "@/assets/svg/herobg8.svg";
// import legalExpert from "@/assets/images/legalexpert.jpg";
// import lawyerdiscussion from "@/assets/images/lawyerdiscussion.jpg";
import courtroom from "@/assets/images/court-room.png";
import handshakeSvg from "@/assets/svg/workingareasbg.svg";
import qualityIcon from "@/assets/icons/a1.png";
import excellenceIcon from "@/assets/icons/a2.png";
import dedicationIcon from "@/assets/icons/a3.png";
import trustIcon from "@/assets/icons/a4.png";
import aboutImage from "@/assets/images/a1.png";
import founder from "@/assets/images/workwithus1.jpeg";
import prize from "@/assets/images/workwithus2.jpeg";

const AboutPage = () => {
  const navigate = useNavigate();
  const [backgroundPosition, setBackgroundPosition] = useState("center center");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (window.innerWidth < 768) {
        setBackgroundPosition("right center");
      } else {
        setBackgroundPosition("center center");
      }
    };

    updateBackgroundPosition();
    window.addEventListener("resize", updateBackgroundPosition);

    return () => {
      window.removeEventListener("resize", updateBackgroundPosition);
    };
  }, []);

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const values = [
    {
      icon: qualityIcon,
      title: "Integrity",
      description:
        "We conduct our practice with the highest ethical standards, ensuring transparency, honesty, and accountability in all client engagements.",
    },
    {
      icon: excellenceIcon,
      title: "Excellence",
      description:
        "We pursue excellence in every assignment by applying sound legal judgment, experience, and strategic precision to deliver effective outcomes.",
    },
    {
      icon: dedicationIcon,
      title: "Dedication",
      description:
        "We demonstrate unwavering dedication to our clients by diligently understanding their objectives and representing their interests with care.",
    },
    {
      icon: trustIcon,
      title: "Trust",
      description:
        "We foster enduring professional relationships built on trust, reliability, and respect through consistent and principled legal service.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: backgroundPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/80 md:hidden z-0"></div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-slide-up inline-block relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <span>About Abhay Bharadwaj & Associates</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ width: "100%" }}
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0,15 Q 150,5 300,15"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-accent"
                  />
                </svg>
              </h1>
            </div>
            <p
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed animate-slide-up max-w-3xl"
              style={{
                animationDelay: "0.1s",
                background:
                  "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                opacity: 0.85,
              }}
            >
              We are a four-and-a-half-decade-old law firm based out of Rajkot,
              Gujarat. <br /> Established by Late Shri Abhay Bharadwaj, a former
              member of the Law Commission of India, in the year 1980.
            </p>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-7 shadow-glow hover:shadow-elegant-hover transition-all duration-300 hover:scale-105"
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                  className="flex items-center"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'rgb(61,58,57)' }} />
                </span>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 md:py-48 md:min-h-[600px] bg-background relative overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url(${aboutSectionBg})`,
            backgroundSize: "cover",
            backgroundPosition: backgroundPosition,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* White overlay for mobile only */}
        <div className="absolute inset-0 bg-white/80 md:hidden z-[1]"></div>

        <div className="relative z-10">
          <div className="container px-4 md:px-10">
            {/* Main layout */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Left Image Section (40%) */}
              <div className="w-full md:w-[40%]">
                 <div className="w-full h-[380px] sm:h-[380px] md:h-[600px] overflow-hidden shadow-lg bg-cover bg-center">
                   <img
                     src={aboutImage}
                     alt="About our firm"
                     className="w-full h-full object-cover md:object-cover"
                   />
                </div>
              </div>

              {/* Right Text Section (60%) */}
              <div className="w-full md:w-[60%]">
                <div className="mb-8 md:mb-12">
                  <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-serif font-bold text-primary">
                      We’re Advocates for People Justice and Right
                    </h2>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      viewBox="0 0 300 20"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 0,15 Q 150,5 300,15"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="text-accent"
                      />
                    </svg>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                    We are a four-and-a-half-decade-old law firm based out of
                    Rajkot, Gujarat. Established by Late Shri Abhay Bharadwaj, a
                    former member of the Law Commission of India, in the year
                    1980. We have gradually cemented our position as a pillar of
                    legal excellence.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                    AB & A, with a team of over 50 skilled lawyers led by Adv.
                    Ansh Bharadwaj, has its work spread across Gujarat,
                    specifically in the Saurashtra-Kutch region. Our expertise
                    spans Criminal Law, Civil Law, Family Law, Motor Vehicle
                    Law, Company Law, and IPR Law—making us a one-stop solution
                    for diverse legal challenges.
                  </p>

                   <div className="grid grid-cols-2 gap-3 md:block md:space-y-4">
                     {[
                       "Corporate Law",
                       "Civil Litigation",
                       "Family Law",
                       "Motor Vehicle Law",
                       "IPR Law",
                       "Company Law",
                     ].map((item, index) => (
                       <div
                         key={index}
                         className="flex items-center gap-2 md:gap-3"
                       >
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#5C3317] via-[#6B4423] to-[#FFE4E1] text-white relative overflow-hidden">
        {/* Background SVG */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${handshakeSvg})` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block relative group cursor-pointer mb-3 md:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                Four Decades of Excellence and Trusted Advocacy.
              </h2>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0,15 Q 150,5 300,15"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-accent"
                />
              </svg>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              return (
                <Card
                  key={index}
                  className="bg-white backdrop-blur-sm border-0 border-l-[5px] border-l-gray-500 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-none rounded-tr-lg rounded-br-lg aspect-square"
                >
                  <CardContent className="pt-6 md:pt-8 text-center px-4 md:px-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <img
                        src={value.icon}
                        alt={value.title}
                        className="w-12 h-12 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3 text-[#5C3317]">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#5C3317]/80 leading-relaxed line-clamp-2 md:line-clamp-none">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section
        className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,hsl(var(--accent)/0.06),transparent_45%)] z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,hsl(var(--primary)/0.04),transparent_50%)] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* LEFT CONTENT */}
              <div className="relative">
                {/* Decorative accent */}
                <div className="absolute -left-6 top-2 w-1 h-20 bg-accent rounded-full hidden md:block"></div>

                {/* Heading */}
                <div className="inline-block relative group cursor-pointer mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                      Join us for professional legal guidance.
                  </h2>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 0,15 Q 150,5 300,15"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      className="text-accent"
                    />
                  </svg>
                </div>

                {/* Experience Row */}
                <div className="flex gap-8 items-start">
                  {/* Experience Card */}
                  <div className="relative min-w-[150px] bg-white rounded-2xl p-6 shadow-xl border border-accent/20">
                    {/* Accent ring */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent/20 blur-xl"></div>

                    <div className="text-5xl font-serif font-bold text-primary leading-none">
                      45+
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mt-2">
                      Years of Experience
                    </p>
                  </div>

                  {/* Supporting Text */}
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      For over four decades, our firm has stood as a symbol of
                      legal integrity and professional excellence across
                      Gujarat.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      We combine seasoned courtroom expertise with modern legal
                      strategies—delivering clarity, confidence, and results
                      when it matters most.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                {/* Image 1 */}
                <div className="relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <img
                    src={founder}
                    alt="Legal Expert"
                    className="w-full h-[190px] sm:h-[260px] md:h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <img
                    src={prize}
                    alt="Lawyer Discussion"
                    className="w-full h-[190px] sm:h-[260px] md:h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Image 3 */}
                <div className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 col-span-2">
                  <img
                    src={courtroom}
                    alt="Courtroom Excellence"
                    className="w-full h-[260px] sm:h-[300px] md:h-[360px] object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        {/* Background SVG */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center z-0"
          style={{
            backgroundImage: `url(${handshakeSvg})`,
            backgroundSize: "70%",
            backgroundPosition: "30% center",
            opacity: 0.25,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Ready to Work With Us?
              </h2>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0,15 Q 150,5 300,15"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-accent"
                />
              </svg>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Let's discuss how we can help you achieve your legal goals with
              expertise and dedication.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-7 shadow-glow hover:shadow-elegant-hover transition-all duration-300 hover:scale-105"
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="flex items-center"
              >
                Get Started Today
                <ArrowRight
                  className="ml-2 w-5 h-5"
                  style={{ color: "rgb(61,58,57)" }}
                />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
