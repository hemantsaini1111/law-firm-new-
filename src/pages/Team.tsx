import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/svg/herobg8.svg";
import teamsectionSvg from "@/assets/svg/teamsection2.svg";
import handshakeSvg from "@/assets/svg/handshake2.svg";
import emilyRodriguez from "@/assets/team/emily-rodriguez.jpg";
import jamesSterling from "@/assets/team/james-sterling.jpg";
import michaelChen from "@/assets/team/michael-chen.jpg";
import sarahMitchell from "@/assets/team/sarah-mitchell.jpg";
import qualityIcon from "@/assets/icons/quality.png";
import consumerCentricIcon from "@/assets/icons/consumer-centric.png";
import growthIcon from "@/assets/icons/growth.png";
import learningIcon from "@/assets/icons/learning.png";

// --- Type Definitions ---
interface Attorney {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

// --- Team Member Data ---
const attorneys: Attorney[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Senior Attorney',
    imageUrl: sarahMitchell,
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    title: 'Attorney',
    imageUrl: emilyRodriguez,
  },
  {
    id: 3,
    name: 'James Sterling',
    title: 'Partner',
    imageUrl: jamesSterling,
  },
  {
    id: 4,
    name: 'Michael Chen',
    title: 'Senior Attorney',
    imageUrl: michaelChen,
  },
];

// --- Attorney Card Component ---
interface AttorneyCardProps {
  attorney: Attorney;
}

const AttorneyCard: React.FC<AttorneyCardProps> = ({ attorney }) => {
  return (
    <div className="flex-shrink-0 w-56 sm:w-64 md:w-72 snap-start">
      <div className="relative bg-gradient-to-t from-[#FFF8E7] to-[#FFF8E7] border-2 border-[#b08d57]/40 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" style={{ backgroundColor: '#FFF8E7' }}>
        <img
          src={attorney.imageUrl}
          alt={attorney.name}
          className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-t-2xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/300x400/cccccc/333333?text=Image+Error&font=inter';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-[#FFF8E7] via-[#FFF8E7]/95 to-transparent rounded-b-2xl border-t-2 border-[#b08d57]/40">
          <h3 className="text-primary text-base sm:text-lg md:text-xl font-serif font-bold truncate">{attorney.name}</h3>
          <p className="text-[#b08d57] text-xs sm:text-sm font-medium">{attorney.title}</p>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const navigate = useNavigate();
  const [backgroundPosition, setBackgroundPosition] = useState('center center');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

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

  // Create infinite scroll by duplicating the attorneys array multiple times
  const duplicatedAttorneys = [...attorneys, ...attorneys, ...attorneys, ...attorneys];

  const scrollRightToLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft } = container;
      
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 224 : 288;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const singleSetWidth = attorneys.length * (cardWidth + gap);
      const currentPositionInSet = scrollLeft % singleSetWidth;
      
      if (currentPositionInSet + scrollAmount >= singleSetWidth - 50) {
        const currentSet = Math.floor(scrollLeft / singleSetWidth);
        container.scrollTo({
          left: (currentSet + 1) * singleSetWidth,
          behavior: 'instant',
        });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft } = container;
      
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 224 : 288;
      const gap = 24;
      const singleSetWidth = attorneys.length * (cardWidth + gap);
      
      if (scrollLeft >= singleSetWidth * 3) {
        container.scrollTo({
          left: singleSetWidth + (scrollLeft % singleSetWidth),
          behavior: 'instant',
        });
      } else if (scrollLeft < singleSetWidth) {
        container.scrollTo({
          left: (singleSetWidth * 2) + scrollLeft,
          behavior: 'instant',
        });
      }
    }
  };

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      scrollRightToLeft();
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const initializeScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? 256 : 288;
        const gap = 24;
        const singleSetWidth = attorneys.length * (cardWidth + gap);
        const { clientWidth } = container;
        
        const startPosition = singleSetWidth + singleSetWidth - clientWidth;
        container.scrollLeft = startPosition;
      }
    };
    
    setTimeout(initializeScroll, 100);
    startAutoScroll();
    
    const container = scrollContainerRef.current;
    container?.addEventListener('mouseenter', stopAutoScroll);
    container?.addEventListener('mouseleave', startAutoScroll);
    container?.addEventListener('scroll', handleScroll);
    
    const handleResize = () => {
      initializeScroll();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      stopAutoScroll();
      container?.removeEventListener('mouseenter', stopAutoScroll);
      container?.removeEventListener('mouseleave', startAutoScroll);
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes drawLine {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .group .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .group:hover .animate-draw {
          animation: drawLine 0.6s ease-in-out forwards;
        }
      `}</style>
      
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
                <span>Our Team</span>
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
              Meet our dedicated team of experienced attorneys committed to delivering exceptional legal representation and achieving the best outcomes for our clients.
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

      {/* Team Section */}
      <section 
        id="team" 
        className="w-full overflow-hidden relative py-12 sm:py-16 md:py-24" 
        style={{ backgroundColor: '#FFF8E7' }}
      >
        {/* Background SVG */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 z-0"
          style={{backgroundImage: `url(${teamsectionSvg})`}}
        ></div>

        <div className="relative w-full px-4 py-12 md:py-16 lg:py-24 z-10" style={{ maxWidth: '100%' }}>
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <span className="text-[#b08d57] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
                Our Attorneys
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary leading-tight mb-4 md:mb-6">
                <span className="relative inline-block group cursor-default">
                  Dedicated Lawyers
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out overflow-visible"
                    viewBox="0 0 300 30"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M 0 15 Q 75 5, 150 15 T 300 15" 
                      stroke="#b08d57" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                      className="animate-draw"
                    />
                  </svg>
                </span>
                ,
                <br />
                <span className="relative inline-block group cursor-default">
                  Proven Results
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out overflow-visible"
                    viewBox="0 0 300 30"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M 0 15 Q 75 5, 150 15 T 300 15" 
                      stroke="#b08d57" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                      className="animate-draw"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4">
                Our team of experienced attorneys brings decades of combined legal expertise to every case.
              </p>
            </div>

            {/* Scroll Container */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-6 w-full
                           [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {duplicatedAttorneys.map((attorney, index) => (
                  <AttorneyCard key={`${attorney.id}-${index}`} attorney={attorney} />
                ))}
              </div>

              {/* Navigation Button */}
              <button
                onClick={() => {
                  scrollRightToLeft();
                  stopAutoScroll();
                  startAutoScroll();
                }}
                className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 
                           bg-[#b08d57]/90 text-white rounded-full p-3 
                           shadow-lg hover:bg-[#b08d57] transition-all duration-300 z-30
                           lg:-left-6 hidden lg:block"
                aria-label="Scroll"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Details Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)] z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block relative group cursor-pointer mb-3 md:mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                  Why Our Team Stands Out
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
                Experience, dedication, and a commitment to excellence define our legal team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center shadow-glow flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                    <img src={qualityIcon} alt="Quality" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 md:mb-4">Collective Experience</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Our attorneys bring together over 100 years of combined legal experience across diverse practice areas. This depth of knowledge allows us to approach complex cases with confidence and strategic insight.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center shadow-glow flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                    <img src={consumerCentricIcon} alt="Client-Centered" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 md:mb-4">Client-Centered Approach</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Every member of our team is committed to understanding your unique situation and goals. We take the time to listen, communicate clearly, and develop personalized strategies that serve your best interests.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center shadow-glow flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                    <img src={growthIcon} alt="Growth" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 md:mb-4">Proven Track Record</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Our team has successfully represented thousands of clients, achieving favorable outcomes in cases ranging from simple transactions to complex multi-party litigation. We measure our success by your success.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center shadow-glow flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                    <img src={learningIcon} alt="Learning" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 md:mb-4">Continuous Learning</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    The legal landscape is constantly evolving. Our attorneys stay current with the latest developments in law, attend continuing education programs, and adapt their strategies to leverage new legal precedents and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Background SVG */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-10 z-0"
          style={{
            backgroundImage: `url(${handshakeSvg})`,
            backgroundSize: '60%',
            backgroundPosition: 'center center'
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
                Ready to Work With Our Team?
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
              Let's discuss how our experienced team can help you achieve your legal goals with expertise and dedication.
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

export default TeamPage;

