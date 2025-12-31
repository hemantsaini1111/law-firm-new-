import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import whyChooseUsBg from "@/assets/svg/whychooseusbg2.svg";
import lateAbhayImage from "@/assets/images/LateAbhat.jpeg";
import anshImage from "@/assets/images/Ansh.jpg";

const pillars = [
  {
    image: lateAbhayImage,
    name: "Late Shree Abhaykumar Bharadwaj",
    link: "/key-pillars/abhay"
  },
  {
    image: anshImage,
    name: "Adv. Ansh Bharadwaj",
    link: "/key-pillars/ansh"
  }
];

const WhyChooseUs = () => {
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
      const carouselElement = document.querySelector('.why-choose-us-carousel');
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
    <section className="py-16 bg-gradient-to-br from-[#5C3317] via-[#6B4423] to-[#FFE4E1] text-white relative overflow-hidden">
      {/* Background SVG */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none"
        style={{backgroundImage: `url(${whyChooseUsBg})`}}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Key Pillars of AB & A
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
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet our founding pillars
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden w-full max-w-7xl mx-auto why-choose-us-carousel">
          <Carousel 
            setApi={setCarouselApi} 
            opts={{ 
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {pillars.map((pillar, index) => {
                return (
                  <CarouselItem key={index} className="pl-2 basis-full">
                    <Card className="bg-white backdrop-blur-sm border-0 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-lg overflow-hidden max-w-xs mx-auto">
                      <CardContent className="p-0">
                        <div className="w-full aspect-[4/3] overflow-hidden">
                          <img 
                            src={pillar.image} 
                            alt={pillar.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <Link 
                            to={pillar.link}
                            className="text-lg font-serif font-bold text-[#5C3317] hover:text-accent transition-colors cursor-pointer"
                          >
                            {pillar.name}
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
              </CarouselContent>
            </Carousel>
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white shadow-lg hover:bg-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white shadow-lg hover:bg-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-32 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => {
            return (
              <Card key={index} className="bg-white backdrop-blur-sm border-0 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-lg overflow-hidden max-w-xs mx-auto">
                <CardContent className="p-0">
                  <div className="w-full aspect-[6/6] overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <Link 
                      to={pillar.link}
                      className="text-lg font-serif font-bold text-[#5C3317] hover:text-accent transition-colors cursor-pointer"
                    >
                      {pillar.name}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
