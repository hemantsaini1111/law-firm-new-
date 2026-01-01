import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import corporateLawIcon from "@/assets/icons/corporate-laws.png";
import civilLawIcon from "@/assets/icons/civil-law.png";
import realEstateLawIcon from "@/assets/icons/real-estate-law.png";
import familyLawIcon from "@/assets/icons/family-law.png";
import employmentLawIcon from "@/assets/icons/employment-law.png";
import estatePlanningIcon from "@/assets/icons/estate-planning.png";
import workingAreasBg from "@/assets/svg/workingareasbg.svg";
import heroBg from "@/assets/svg/herobg8.svg";
import aboutSectionBg from "@/assets/Law2.png";
import legalDocuments from "@/assets/images/Inte.jpeg";
import lawLibrary from "@/assets/law-library.jpg";
import courthouseInterior from "@/assets/images/Civil.jpeg";
import consultationMeeting from "@/assets/images/Motor.jpeg";
import handshakeAgreement from "@/assets/images/Family.jpeg";
import officeCollaboration from "@/assets/images/criminal.jpeg";
import companyLaw from "@/assets/images/Company.jpeg";
import lawImage from "@/assets/Law.png";
import law3Image from "@/assets/Law3.png";

const practiceAreas = [
  {
    iconImage: corporateLawIcon,
    title: "Criminal Law",
    shortDescription: "Comprehensive legal services for businesses, mergers, acquisitions, and corporate governance.",
    fullDescription: "We provide comprehensive legal representation for criminal cases. Our experienced advocates understand the complexities of criminal law and are dedicated to defending your rights. Whether you are facing charges or need legal advice, we are here to guide you through the process with professionalism and care.",
    image: officeCollaboration,
    color: "from-blue-500/20 to-indigo-500/10"
  },
  {
    iconImage: civilLawIcon,
    title: "Civil Law",
    shortDescription: "Expert representation in complex civil disputes and courtroom litigation.",
    fullDescription: "Our law firm offers expert legal services in a wide range of civil matters, including property disputes, contract enforcement, recovery of money, landlord-tenant issues, injunctions, etc. We are committed to delivering practical solutions through strategic litigation. Whether you’re an individual or a business, we ensure your civil rights and interests are protected with professionalism, confidentiality, and unwavering dedication.",
    image: courthouseInterior,
    color: "from-amber-500/20 to-orange-500/10"
  },
  {
    iconImage: familyLawIcon,
    title: "Family Law",
    shortDescription: "Full-service real estate legal support for transactions, disputes, and development.",
    fullDescription: "Navigating family law can be challenging. At our law firm, we provide compassionate legal support for cases, like, divorce, child custody, and alimony cases. Our advocates understand the emotional aspects involved and strive to ensure your rights are protected while facilitating a smooth legal process.",
    image: handshakeAgreement,
    color: "from-green-500/20 to-emerald-500/10"
  },
  {
    iconImage: familyLawIcon,
    title: "Motor Vehicle Law",
    shortDescription: "Compassionate guidance through divorce, custody, and family legal matters.",
    fullDescription: "We provide dedicated legal representation in motor vehicle accident cases, including personal injury claims, compensation for property damage, and fatal accident claims under the Motor Vehicles laws. Whether you’re a victim, an insured party, or a legal heir, we guide you through claim filing, MACT proceedings, insurance settlements, and appeals. Our focus is on securing fair compensation swiftly and effectively, with compassion and clarity at every step.",
    image: consultationMeeting,
    color: "from-pink-500/20 to-rose-500/10"
  },
  {
    iconImage: employmentLawIcon,
    title: "Company Law",
    shortDescription: "Protecting your rights in workplace disputes and employment contracts.",
    fullDescription: "We offer skilled representation in company law matters. Our team isequipped to handle a wide range of corporate legal issues with clarity and precision. From regulatory compliance to business structuring and beyond, we work to ensure that your legal obligations are met and your interests are effectively protected.",
    image: companyLaw,
    color: "from-purple-500/20 to-violet-500/10"
  },
  {
    iconImage: estatePlanningIcon,
    title: "Intellectual Property Law",
    shortDescription: "Secure your legacy with wills, trusts, and comprehensive estate planning.",
    fullDescription: "We have a skilled team equipped to deal with a wide range of intellectual property rights and legal issues associated with it, including legal compliance and litigation.",
    image: legalDocuments,
    color: "from-teal-500/20 to-cyan-500/10"
  }
];

const PracticeAreasPage = () => {
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
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block relative group cursor-pointer mb-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-slide-up inline-block relative"
                style={{
                  background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                <span>Our Practice Areas</span>
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
              className="text-lg md:text-xl mb-8 leading-relaxed animate-slide-up max-w-3xl" 
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
              Comprehensive legal expertise across multiple practice areas. Our experienced attorneys provide strategic counsel and dedicated representation to protect your interests and achieve your goals.
            </p>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-lg px-8 py-7 shadow-glow hover:shadow-elegant-hover transition-all duration-300 hover:scale-105"
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

      {/* Practice Areas Detailed Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden w-full">
        {/* <div 
          className="absolute top-10 right-0 w-[500px] h-[500px] z-0 opacity-25 hidden md:block"
          style={{
            backgroundImage: `url(${aboutSectionBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat',
          }}
        ></div> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)] z-1"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)] z-1"></div>
        
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 lg:space-y-32">
            {practiceAreas.map((area, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16`}
                >
                  {/* Image Section */}
                  <div className="w-1/2 relative group">
                    <div className="relative overflow-hidden shadow-elegant-hover">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-10"></div>
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover group-hover:scale-110 transition-transform duration-700 relative z-5"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-20"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-1/2 space-y-4 md:space-y-6 relative">
                    {area.title === "Criminal Law" && (
                      <div className="absolute left-[390px] top-[-100px] w-84 h-84 md:w-84 md:h-84 opacity-30 z-0 hidden md:block">
                        <img 
                          src={law3Image} 
                          alt="Law" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {area.title === "Intellectual Property Law" && (
                      <div className="absolute left-[-150px] top-[-250px] w-74 h-74 md:w-74 md:h-74 opacity-30 z-0 hidden md:block">
                        <img 
                          src={lawImage} 
                          alt="Law" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 relative z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center shadow-glow flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                        <img src={area.iconImage} alt={area.title} className="w-7 h-7 md:w-10 md:h-10 object-contain" />
                      </div>
                      <div className="relative group/title cursor-pointer flex-1">
                        <h2 className="text-base md:text-3xl lg:text-4xl font-serif font-bold text-primary group-hover/title:text-accent transition-colors inline-block relative">
                          <span>{area.title}</span>
                          <svg 
                            className="absolute -bottom-2 left-0 h-3 opacity-0 group-hover/title:opacity-100 transition-opacity duration-300"
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
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed relative z-10 line-clamp-4 md:line-clamp-none">
                      {area.fullDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${lawLibrary})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block relative group cursor-pointer mb-6">
              <h2 
                className="text-3xl md:text-4xl font-serif font-bold"
                style={{
                  background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Ready to Discuss Your Legal Needs?
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
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our experienced attorneys are here to help. Schedule a consultation to discuss how we can assist with your legal matters.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-7 shadow-glow hover:shadow-elegant-hover transition-all duration-300 hover:scale-105"
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

export default PracticeAreasPage;
