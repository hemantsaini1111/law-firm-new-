import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutSectionBg from "@/assets/svg/aboutsection3.svg";
import heroBg from "@/assets/svg/herobg8.svg";
import legalExpert from "@/assets/images/legalexpert.jpg";
import lawyerdiscussion from "@/assets/images/lawyerdiscussion.jpg";
import attorneyatjustice from "@/assets/images/attorneyatjustice.jpg";
import handshakeSvg from "@/assets/svg/workingareasbg.svg";
import qualityIcon from "@/assets/icons/quality.png";
import excellenceIcon from "@/assets/icons/excellence.png";
import dedicationIcon from "@/assets/icons/dedication.png";
import trustIcon from "@/assets/icons/trust (1).png";

const AboutPage = () => {
  const navigate = useNavigate();
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (window.innerWidth < 768) {
        setBackgroundPosition('right center');
      } else {
        setBackgroundPosition('center center');
      }
    };

    updateBackgroundPosition();
    window.addEventListener('resize', updateBackgroundPosition);
    
    return () => {
      window.removeEventListener('resize', updateBackgroundPosition);
    };
  }, []);

  const scrollToContact = () => {
    navigate('/#contact');
  };

  const values = [
    {
      icon: qualityIcon,
      title: "Integrity",
      description: "We conduct our practice with the highest ethical standards, ensuring transparency and honesty in all our client relationships."
    },
    {
      icon: excellenceIcon,
      title: "Excellence",
      description: "We strive for excellence in every case, combining decades of experience with innovative legal strategies to achieve the best outcomes."
    },
    {
      icon: dedicationIcon,
      title: "Dedication",
      description: "Our commitment to our clients goes beyond the courtroom. We invest time and resources to understand your unique situation and goals."
    },
    {
      icon: trustIcon,
      title: "Trust",
      description: "Building lasting relationships based on trust and respect. Your confidence in us drives our commitment to deliver exceptional results."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/80 md:hidden z-0"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-slide-up inline-block relative"
                style={{
                  background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                <span>About Abhay Bharadwaj & Associates</span>
                <svg 
                  className="absolute -bottom-2 left-0 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ width: '100%' }}
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
                animationDelay: '0.1s',
                background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                opacity: 0.85
              }}
            >
              For over three decades, we have been a pillar of legal excellence in our community, built on a foundation of integrity, dedication, and an unwavering commitment to our clients' success.
            </p>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button 
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
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section 
        id="about" 
        className="py-16 sm:py-24 md:py-48 md:min-h-[600px] bg-background relative overflow-hidden" 
        style={{ backgroundColor: '#FFF8E7' }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${aboutSectionBg})`,
            backgroundSize: 'cover',
            backgroundPosition: backgroundPosition,
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        {/* White overlay for mobile view only */}
        <div className="absolute inset-0 bg-white/80 md:hidden z-[1]"></div>
        
        <div className="relative z-10">
          <div className="container px-4 md:pr-4 md:ml-0 md:pl-10">
            <div className="max-w-4xl">
              {/* Text Content */}
              <div className="mb-8 md:mb-12">
                <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                    Our Story
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
                  For over three decades, Abhay Bharadwaj & Associates has been a pillar of legal excellence in our community. Our firm was built on a foundation of integrity, dedication, and an unwavering commitment to our clients' success.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  We believe that every client deserves personalized attention and strategic legal counsel. Our team combines deep legal expertise with a practical understanding of your goals to deliver results that matter.
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Personalized legal strategies",
                    "Transparent communication",
                    "Proven track record of success",
                    "Compassionate client service"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </div>
                  ))}
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
          style={{backgroundImage: `url(${handshakeSvg})`}}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block relative group cursor-pointer mb-3 md:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                Our Values
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
                <Card key={index} className="bg-white backdrop-blur-sm border-0 border-l-[5px] border-l-gray-500 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-none rounded-tr-lg rounded-br-lg aspect-square">
                  <CardContent className="pt-6 md:pt-8 text-center px-4 md:px-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <img 
                        src={value.icon} 
                        alt={value.title}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3 text-[#5C3317]">{value.title}</h3>
                    <p className="text-sm md:text-base text-[#5C3317]/80 leading-relaxed line-clamp-2 md:line-clamp-none">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Background decorative element */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)] z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block relative group cursor-pointer mb-3 md:mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                  Our Practice
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
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse into our professional environment and team
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Image 1 - Legal Expert */}
              <div 
                className="relative group overflow-hidden shadow-elegant-hover hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02]"
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-10 group-hover:from-primary/30 group-hover:to-accent/20 transition-opacity duration-300"></div>
                <img 
                  src={legalExpert} 
                  alt="Legal Expert" 
                  className="w-full h-[280px] sm:h-[320px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent z-20 group-hover:from-primary/90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    <div className="w-10 md:w-12 h-1 bg-accent mb-3 md:mb-4 rounded-full"></div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-1 md:mb-2">
                      Expert Legal Counsel
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      Our experienced attorneys provide strategic guidance and dedicated representation
                    </p>
                  </div>
                  <div className="transform transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-white text-xs sm:text-sm font-semibold">Professional Excellence</span>
                    </div>
                  </div>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-opacity duration-300 z-40 pointer-events-none"></div>
              </div>

              {/* Image 2 - Lawyer Discussion */}
              <div 
                className="relative group overflow-hidden shadow-elegant-hover hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02]"
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-10 group-hover:from-primary/30 group-hover:to-accent/20 transition-opacity duration-300"></div>
                <img 
                  src={lawyerdiscussion} 
                  alt="Lawyer Discussion" 
                  className="w-full h-[280px] sm:h-[320px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent z-20 group-hover:from-primary/90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    <div className="w-10 md:w-12 h-1 bg-accent mb-3 md:mb-4 rounded-full"></div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-1 md:mb-2">
                      Collaborative Approach
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      Working together to achieve the best outcomes for our clients
                    </p>
                  </div>
                  <div className="transform transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-white text-xs sm:text-sm font-semibold">Team Collaboration</span>
                    </div>
                  </div>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-opacity duration-300 z-40 pointer-events-none"></div>
              </div>

              {/* Image 3 - Attorney at Justice - Full Width */}
              <div 
                className="relative group overflow-hidden shadow-elegant-hover hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.01] col-span-2"
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-10 group-hover:from-primary/30 group-hover:to-accent/20 transition-opacity duration-300"></div>
                <img 
                  src={attorneyatjustice} 
                  alt="Attorney at Justice" 
                  className="w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-[650px] object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent z-20 group-hover:from-primary/90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-5 sm:p-6 md:p-8 lg:p-12">
                  <div className="max-w-2xl transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    <div className="w-12 md:w-16 h-1 bg-accent mb-4 md:mb-6 rounded-full"></div>
                    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 md:mb-4">
                      Justice & Excellence
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                      Committed to upholding the highest standards of legal practice and delivering exceptional results for every client we serve
                    </p>
                  </div>
                  <div className="transform transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-white text-sm md:text-base font-semibold">Dedicated Service</span>
                    </div>
                  </div>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-opacity duration-300 z-40 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Background SVG */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-contain bg-center z-0"
          style={{
            backgroundImage: `url(${handshakeSvg})`,
            backgroundSize: '70%',
            backgroundPosition: '30% center',
            opacity: 0.25
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold"
                style={{
                  background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
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
              Let's discuss how we can help you achieve your legal goals with expertise and dedication.
            </p>
            <Button 
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
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'rgb(61,58,57)' }} />
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

