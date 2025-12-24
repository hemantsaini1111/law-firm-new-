import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import heroBg from "@/assets/svg/herobg8.svg";
import testimonialBg from "@/assets/svg/testimonialbackground.svg";
import footerCorner from "@/assets/svg/gallarybg.svg";

// --- TYPE DEFINITIONS ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  rating: number;
  quote: string;
  theme: 'dark' | 'light';
}

// --- TESTIMONIAL DATA ---
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Monica D'suza",
    role: 'Corporate Executive',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    quote:
      '"I was struggling with family law for months before I found Abhay Bharadwaj & Associates. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction."',
    theme: 'dark',
  },
  {
    id: 2,
    name: 'Teresa Hamilton',
    role: 'Business Owner',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    quote:
      '"I had been facing challenges with corporate law for months until I discovered Abhay Bharadwaj & Associates. They not only resolved my issues effectively but also guided me on how to avoid similar problems in the future. Their team is highly skilled, patient, and always prioritizes customer satisfaction."',
    theme: 'dark',
  },
  {
    id: 3,
    name: 'Robert Martinez',
    role: 'Entrepreneur',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    quote:
      '"The legal team at Abhay Bharadwaj & Associates handled my real estate dispute with exceptional professionalism. They kept me informed throughout the entire process and achieved a favorable outcome. I highly recommend their services to anyone in need of expert legal representation."',
    theme: 'dark',
  },
  {
    id: 4,
    name: 'Jennifer Chen',
    role: 'Executive Director',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    quote:
      '"Working with Abhay Bharadwaj & Associates was a game-changer for our business. Their expertise in commercial law helped us navigate complex contracts and negotiations. The team is responsive, thorough, and truly cares about their clients\' success."',
    theme: 'dark',
  },
  {
    id: 5,
    name: 'Michael Thompson',
    role: 'CEO',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    quote:
      '"I\'ve worked with many law firms over the years, but Abhay Bharadwaj & Associates stands out for their dedication and results. They helped us resolve a complex merger issue that seemed impossible. Their strategic approach and attention to detail made all the difference."',
    theme: 'dark',
  },
  {
    id: 6,
    name: 'Sarah Williams',
    role: 'Managing Partner',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    quote:
      '"The team at Abhay Bharadwaj & Associates provided exceptional legal support during a challenging employment dispute. They were professional, empathetic, and fought tirelessly for my rights. I\'m grateful for their expertise and highly recommend them."',
    theme: 'dark',
  },
];

// --- STAR RATING COMPONENT ---
interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="flex text-yellow-500 mb-4 md:mb-5">
    {[...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ))}
  </div>
);

// --- TESTIMONIAL CARD COMPONENT ---
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, imageUrl, rating, quote, theme } = testimonial;
  const isDarkTheme = theme === 'dark';

  const cardClasses = `
    ${isDarkTheme ? 'card-gradient-border bg-white' : 'bg-white/70 backdrop-blur-sm'}
    relative rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 group
    transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl
    h-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex flex-col border-0
  `;

  return (
    <div className={cardClasses}>
      {/* Quote Icon */}
      {isDarkTheme ? (
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#39615D] flex items-center justify-center rounded-bl-3xl 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
          </svg>
        </div>
      ) : (
        <div className="absolute top-8 right-8 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
          </svg>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col h-full">
        {/* Author Info */}
        <div className="flex items-center mb-3 md:mb-4">
          <img
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/64x64/cccccc/FFFFFF?text=User';
            }}
          />
          <div className="ml-3 md:ml-4">
            <h4 className="text-base sm:text-lg font-bold text-gray-900">{name}</h4>
            <p className="text-xs sm:text-sm text-gray-500">{role}</p>
          </div>
        </div>

        {/* Star Rating */}
        <StarRating rating={rating} />

        {/* Testimonial Text */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{quote}</p>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const navigate = useNavigate();
  const [backgroundPosition, setBackgroundPosition] = useState('center center');
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const autoScrollIntervalRef = useRef<number | null>(null);

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

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Auto-scroll on mobile only
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile && carouselApi) {
      autoScrollIntervalRef.current = window.setInterval(() => {
        carouselApi.scrollNext();
      }, 2000);

      const carouselElement = document.querySelector('#testimonials .carousel-container');
      const pauseScroll = () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
          autoScrollIntervalRef.current = null;
        }
      };
      const resumeScroll = () => {
        if (!autoScrollIntervalRef.current && isMobile && carouselApi) {
          autoScrollIntervalRef.current = window.setInterval(() => {
            carouselApi.scrollNext();
          }, 2000);
        }
      };

      carouselElement?.addEventListener('mouseenter', pauseScroll);
      carouselElement?.addEventListener('mouseleave', resumeScroll);

      return () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
        carouselElement?.removeEventListener('mouseenter', pauseScroll);
        carouselElement?.removeEventListener('mouseleave', resumeScroll);
      };
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [carouselApi]);

  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen">
      <style>{`
        /* Dotted background pattern */
        .testimonials-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0);
            background-size: 20px 20px;
            opacity: 0.5;
            z-index: -1;
        }

        /* Gradient border for the first card */
        .card-gradient-border {
            position: relative;
            overflow: hidden;
        }
        
        .card-gradient-border::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 6px;
            background-image: linear-gradient(to right, #C89B6C, #E6CFAA);
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
      `}</style>
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
                <span>Client Testimonials</span>
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
              Discover what our clients have to say about their experience with Abhay Bharadwaj & Associates. Their success stories reflect our commitment to excellence and client satisfaction.
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
                  Share Your Experience
                  <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'rgb(61,58,57)' }} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className="testimonials-container relative py-12 sm:py-16 md:py-24 w-full flex items-center justify-center px-4 lg:px-16 text-gray-800" 
        style={{ backgroundColor: 'rgb(255,249,233)' }}
      >
        {/* Background SVG */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none z-0"
          style={{backgroundImage: `url(${testimonialBg})`}}
        ></div>
        <div className="max-w-7xl w-full mx-auto relative z-10">
          {/* Header and Navigation */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-8 md:mb-10 lg:mb-12">
            {/* Header Text */}
            <div>
              <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-amber-800 mb-2">
                Client Testimonials
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                <span className="relative inline-block group cursor-default">
                  What Our Clients Say
                  {/* Curved underline SVG */}
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
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-0">
              <button 
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-amber-800/20 text-amber-900 hover:bg-amber-800/30 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-amber-800/20 text-amber-900 hover:bg-amber-800/30 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "end",
              loop: true,
              slidesToScroll: 2,
            }}
            className="w-full ml-auto overflow-hidden carousel-container"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2 flex-shrink-0">
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Background SVG */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-10 z-0"
          style={{
            backgroundImage: `url(${footerCorner})`,
            backgroundSize: '75%',
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
                Ready to Share Your Success Story?
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
              Join our satisfied clients and experience the difference that expert legal representation can make. Contact us today to discuss your legal needs.
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

export default TestimonialsPage;

