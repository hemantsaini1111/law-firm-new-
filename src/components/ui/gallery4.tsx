import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import galleryBg from "@/assets/svg/gallarybg.svg";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScrollIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
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
      const carouselElement = document.querySelector('.gallery4-carousel');
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
    <section className="py-32 relative overflow-hidden">
      {/* Background SVG */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none"
        style={{backgroundImage: `url(${galleryBg})`}}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              <span className="relative inline-block group cursor-default">
                {title}
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
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
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
      <div className="w-full relative gallery4-carousel">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
                loop: true,
              },
            },
          }}
        >
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm border-2 hover:bg-background shadow-lg disabled:opacity-50"
            >
              <ArrowLeft className="size-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm border-2 hover:bg-background shadow-lg disabled:opacity-50"
            >
              <ArrowRight className="size-6" />
            </Button>
          </div>
          
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Mobile Navigation Buttons */}
          <div className="flex gap-3 md:hidden">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full h-10 w-10 disabled:opacity-50"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full h-10 w-10 disabled:opacity-50"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };

