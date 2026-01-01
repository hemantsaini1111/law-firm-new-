import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamsectionSvg from '../assets/svg/teamsection2.svg';
import p6Image from '@/assets/images/p6.jpeg';
import p7Image from '@/assets/images/p7.jpeg';
import employmentLawIcon from '@/assets/icons/employment-law.png';
import learningIcon from '@/assets/icons/learning.png';

// --- Type Definitions --
interface Career {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
  path: string;
}

// --- Career Data ---
const careers: Career[] = [
  {
    id: 1,
    title: 'Job',
    description: 'Join our team of skilled legal professionals and advance your career in a dynamic, supportive environment.',
    imageUrl: p6Image,
    iconUrl: employmentLawIcon,
    path: '/careers/jobs'
  },
  {
    id: 2,
    title: 'Internship',
    description: 'Gain valuable hands-on experience in a real legal practice setting and build your professional network.',
    imageUrl: p7Image,
    iconUrl: learningIcon,
    path: '/careers/internships'
  },
];

// --- Career Card Component ---
interface CareerCardProps {
  career: Career;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(career.path);
  };

  return (
    <div className="w-full h-full">
      <div className="relative bg-gradient-to-t from-[#FFF8E7] to-[#FFF8E7] border-2 border-[#b08d57]/40 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Image Section */}
        <div className="w-full h-32 md:h-36 relative overflow-hidden rounded-t-2xl flex-shrink-0">
          <img
            src={career.imageUrl}
            alt={career.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/400x300/cccccc/333333?text=Image+Error&font=inter';
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8E7]/80 to-transparent"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-3 md:p-4 flex flex-col flex-grow">
           <div className="flex items-center gap-2 mb-1.5">
             <img
               src={career.iconUrl}
               alt={career.title}
               className="w-5 h-5 md:w-6 md:h-6 object-contain"
               onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 target.src = 'https://placehold.co/24x24/cccccc/333333?text=Icon&font=inter';
               }}
             />
             <h3 className="text-primary text-base md:text-lg font-serif font-bold">{career.title}</h3>
           </div>
           <p className="text-muted-foreground text-xs md:text-sm mb-3 leading-relaxed flex-grow">{career.description}</p>
          
          {/* Important Note for Internship */}
          {career.title === 'Internship' && (
            <div className="mb-3 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-800 p-2 rounded-lg">
              <p className="text-xs md:text-sm text-red-700 font-medium">
                <strong>Note:</strong> We only offer offline internship.
              </p>
            </div>
          )}
          
          {/* Apply Now Button */}
           <button
             onClick={handleApply}
             className="w-full flex items-center justify-center bg-[#b08d57] text-white py-2 px-4 rounded-lg font-semibold text-xs md:text-sm shadow-md hover:bg-[#c09d67] transition-all duration-300 transform hover:scale-105 group"
           >
            Apply Now
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Team Component ---
const Team = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const autoScrollIntervalRef = useRef<number | null>(null);

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
      // Start auto-scroll (2 second interval)
      autoScrollIntervalRef.current = window.setInterval(() => {
        carouselApi.scrollNext();
      }, 2000);

      // Pause on hover
      const carouselElement = document.querySelector('.team-carousel');
      const pauseScroll = () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
          autoScrollIntervalRef.current = null;
        }
      };
      const resumeScroll = () => {
        if (!autoScrollIntervalRef.current && window.innerWidth < 768) {
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

  return (
    <section id="careers" className="w-full overflow-hidden relative" style={{ backgroundColor: '#FFF8E7' }}>
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
      {/* Background SVG */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10"
        style={{backgroundImage: `url(${teamsectionSvg})`}}
      ></div>

      <div className="relative w-full pl-4 pr-0 py-12 md:py-16 lg:py-24" style={{ maxWidth: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* --- Left Text Content --- */}
          <div className="flex flex-col justify-center z-10 lg:order-1 order-1">
            <span className="text-[#b08d57] text-sm font-semibold uppercase tracking-wider mb-2">
              Career Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary leading-tight mb-6">
              <span className="relative inline-block group cursor-default">
                Careers
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
             <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
               Explore career opportunities and join our team of dedicated legal professionals. At AB & A, we believe in fostering a collaborative and supportive work environment where talent thrives and expertise is valued.
             </p>
             <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
               Whether you're an experienced legal professional looking for a new challenge or a fresh graduate seeking to launch your legal career, we offer opportunities for growth, learning, and meaningful contribution to our firm's legacy of excellence.
             </p>
          </div>

          {/* --- Right Cards Content --- */}
          <div className="relative w-full lg:order-2 order-2">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl md:max-w-3xl auto-rows-fr mr-4 md:ml-8">
              {careers.map((career) => (
                <CareerCard key={career.id} career={career} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
