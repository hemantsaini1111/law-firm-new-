import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import teamsectionSvg from '../assets/svg/teamsection2.svg';
import emilyRodriguez from '../assets/team/emily-rodriguez.jpg';
import jamesSterling from '../assets/team/james-sterling.jpg';
import michaelChen from '../assets/team/michael-chen.jpg';
import sarahMitchell from '../assets/team/sarah-mitchell.jpg';

// --- Type Definitions ---
interface Attorney {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

// --- Team Member Data ---
// Using actual team member images
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
    <div className="flex-shrink-0 w-64 md:w-72 snap-start">
      <div className="relative bg-gradient-to-t from-[#FFF8E7] to-[#FFF8E7] border-2 border-[#b08d57]/40 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" style={{ backgroundColor: '#FFF8E7' }}>
        <img
          src={attorney.imageUrl}
          alt={attorney.name}
          className="w-full h-80 object-cover rounded-t-2xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/300x400/cccccc/333333?text=Image+Error&font=inter';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#FFF8E7] via-[#FFF8E7]/95 to-transparent rounded-b-2xl border-t-2 border-[#b08d57]/40">
          <h3 className="text-primary text-xl font-serif font-bold truncate">{attorney.name}</h3>
          <p className="text-[#b08d57] text-sm font-medium">{attorney.title}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Team Component ---
const Team = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null); // To store interval ID
  
  // Create infinite scroll by duplicating the attorneys array multiple times
  const duplicatedAttorneys = [...attorneys, ...attorneys, ...attorneys, ...attorneys];

  const scrollRightToLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollAmount = 300; // Based on card width + margin. Adjust as needed.
      
      // Calculate the width of one set (original attorneys array)
      // Card width is 288px (w-72) + gap 24px (space-x-6) = ~312px per card
      // Width calculation is dynamic based on attorneys.length
      const singleSetWidth = attorneys.length * (288 + 24); // w-72 (288px) + space-x-6 (24px)
      
      // If at the end of the visible set, jump to the start of a duplicate set invisibly
      const currentPositionInSet = scrollLeft % singleSetWidth;
      
      // If we're approaching the end of a set (within scrollAmount), jump to the next set
      if (currentPositionInSet + scrollAmount >= singleSetWidth - 50) {
        // Jump to the start of the next set (which looks like the first)
        const currentSet = Math.floor(scrollLeft / singleSetWidth);
        container.scrollTo({
          left: (currentSet + 1) * singleSetWidth,
          behavior: 'instant',
        });
      } else {
        // Scroll right (move content from right to left)
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  // Handle scroll event to detect when we need to loop
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth } = container;
      const singleSetWidth = attorneys.length * (288 + 24);
      
      // If we're in the last set (4th), jump to the second set
      if (scrollLeft >= singleSetWidth * 3) {
        container.scrollTo({
          left: singleSetWidth + (scrollLeft % singleSetWidth),
          behavior: 'instant',
        });
      }
      // If we're in the first set (at the very beginning), jump to the third set
      else if (scrollLeft < singleSetWidth) {
        container.scrollTo({
          left: (singleSetWidth * 2) + scrollLeft,
          behavior: 'instant',
        });
      }
    }
  };

  // --- Auto-scroll logic ---
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear existing interval
    intervalRef.current = window.setInterval(() => {
      scrollRightToLeft();
    }, 3000); // Scroll every 3 seconds
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Initialize scroll position to start from the right (show rightmost cards first)
    const initializeScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const singleSetWidth = attorneys.length * (288 + 24);
        const { scrollWidth, clientWidth } = container;
        
        // Start at the end of the second set, showing cards from the right side
        // This makes cards appear starting from the right edge of the screen
        const startPosition = singleSetWidth + singleSetWidth - clientWidth;
        container.scrollLeft = startPosition;
      }
    };
    
    // Initialize after layout is complete
    setTimeout(initializeScroll, 100);
    
    startAutoScroll(); // Start auto-scroll on mount
    
    // Get the container element
    const container = scrollContainerRef.current;

    // Add event listeners
    container?.addEventListener('mouseenter', stopAutoScroll);
    container?.addEventListener('mouseleave', startAutoScroll);
    container?.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      stopAutoScroll(); // Clear interval
      container?.removeEventListener('mouseenter', stopAutoScroll);
      container?.removeEventListener('mouseleave', startAutoScroll);
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="team" className="w-full overflow-hidden relative" style={{ backgroundColor: '#FFF8E7' }}>
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

      <div className="relative w-full pl-4 pr-0 py-16 md:py-24" style={{ maxWidth: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* --- Left Text Content --- */}
          <div className="flex flex-col justify-center z-10 lg:order-1 order-1">
            <span className="text-[#b08d57] text-sm font-semibold uppercase tracking-wider mb-2">
              Our Attorneys
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
              <span className="relative inline-block group cursor-default">
                Dedicated Lawyers
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
              ,
              <br />
              <span className="relative inline-block group cursor-default">
                Proven Results
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
            <button className="flex items-center justify-center w-fit bg-[#b08d57] text-white py-3 px-8 rounded-lg font-semibold text-base shadow-md hover:bg-[#c09d67] transition-all duration-300 transform hover:scale-105 group">
              More Attorney
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* --- Right Carousel Content --- */}
          <div className="relative w-full -mr-12 lg:order-2 order-2">
            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-6 w-full
                         [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {duplicatedAttorneys.map((attorney, index) => (
                <AttorneyCard key={`${attorney.id}-${index}`} attorney={attorney} />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => {
                scrollRightToLeft();
                // Reset interval on manual click
                stopAutoScroll();
                startAutoScroll();
              }}
              className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 
                         bg-[#b08d57]/90 text-white rounded-full p-3 
                         shadow-lg hover:bg-[#b08d57] transition-all duration-300 z-30
                         lg:-left-6"
              aria-label="Scroll"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
