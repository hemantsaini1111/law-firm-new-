import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Phone, FileText, Users, Scale } from "lucide-react";
import handshakeSvg from "@/assets/svg/handshake2.svg";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your case and legal needs"
  },
  {
    icon: FileText,
    number: "02",
    title: "Case Evaluation",
    description: "Our experts thoroughly review your case and develop a strategic plan"
  },
  {
    icon: Users,
    number: "03",
    title: "Dedicated Representation",
    description: "Your assigned attorney works tirelessly to protect your interests"
  },
  {
    icon: Scale,
    number: "04",
    title: "Resolution",
    description: "We fight for the best possible outcome through negotiation or trial"
  }
];

const Process = () => {
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
      const carouselElement = document.querySelector('.process-carousel');
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
    <section className="pt-2.5 pb-[116px] relative overflow-hidden">
      {/* Handshake SVG on the left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 hidden lg:block">
        <img 
          src={handshakeSvg} 
          alt="Handshake" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              How We Work With You
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, client-focused approach from consultation to resolution
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden w-full max-w-7xl mx-auto -mt-8 process-carousel">
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
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <CarouselItem key={index} className="pl-2 basis-full">
                    <Card className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm relative overflow-hidden">
                      {/* Bottom border with inset from edges */}
                      <div className="absolute bottom-0 left-4 right-4 h-1 bg-accent"></div>
                      <div className="absolute top-0 right-0 text-[120px] font-serif font-bold text-accent/5 leading-none p-4">
                        {step.number}
                      </div>
                      <CardContent className="pt-8 relative z-10">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <div className="text-sm font-bold text-accent mb-2">STEP {step.number}</div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl md:ml-auto md:mr-0 md:-mr-24 lg:-mr-40 xl:-mr-60 -mt-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Bottom border with inset from edges */}
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-accent"></div>
                <div className="absolute top-0 right-0 text-[120px] font-serif font-bold text-accent/5 leading-none p-4">
                  {step.number}
                </div>
                <CardContent className="pt-8 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
