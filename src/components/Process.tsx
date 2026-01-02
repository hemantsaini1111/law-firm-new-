import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import p3Image from "@/assets/images/p3.jpeg";
import p4Image from "@/assets/images/P4.jpeg";
import p5Image from "@/assets/images/p5.jpeg";
import handshakeSvg from "@/assets/svg/handshake2.svg";
import excellenceIcon from "@/assets/icons/guidance.png";
import dedicationIcon from "@/assets/icons/mission.png";
import trustIcon from "@/assets/icons/ethical.png";

const principles = [
  {
    icon: excellenceIcon,
    title: "Our Approach",
    description: "At AB & A, we aim to provide exceptional legal services tailored to meet the needs of our clients. Our dedicated team of professionals is committed to ensuring justice and legal support across Gujarat."
  },
  {
    icon: dedicationIcon,
    title: "Our Mission",
    description: "At AB & A, our mission is to provide high-quality legal services to our clients. We strive to achieve the best possible outcome for our clients, and we are dedicated to helping them navigate the complex legal system with ease."
  },
  {
    icon: trustIcon,
    title: "Our Values",
    description: "At AB & A, we believe in treating our clients with respect, compassion, and understanding. We understand that every client is unique and has different needs, and we work hard to tailor our approach accordingly."
  }
];

const Process = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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



  return (
    <section className="pt-2.5 pb-16 md:pb-[116px] relative overflow-hidden">
      {/* Handshake SVG on the left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 hidden lg:block">
        <img 
          src={handshakeSvg} 
          alt="Handshake" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 pt-4 md:pt-8 lg:pt-12">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Firm's Guiding Principles
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
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence, integrity, and client-centered service
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
              {principles.map((principle, index) => {
                return (
                  <CarouselItem key={index} className="pl-2 basis-full">
                    <Card className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute bottom-0 left-4 right-4 h-1 bg-accent"></div>
                      <CardContent className="pt-6 pb-4 md:pt-8 md:pb-6 relative z-10">
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft">
                            <img
                              src={principle.icon}
                              alt={principle.title}
                              className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            />
                          </div>
                          <h3 className="text-lg md:text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                            {principle.title}
                          </h3>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{principle.description}</p>
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
                className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Images */}
          <div className="md:hidden mt-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Main Image */}
              <img
                src={p3Image}
                alt="Firm's Guiding Principles"
                className="w-full max-w-xl rounded-none shadow-lg object-cover"
              />
              {/* Two Images Side by Side */}
              <div className="flex gap-4 w-full max-w-xl mr-4">
                <img
                  src={p4Image}
                  alt="Firm's Guiding Principles"
                  className="w-1/2 rounded-none shadow-lg object-cover"
                />
                <img
                  src={p5Image}
                  alt="Firm's Guiding Principles"
                  className="w-1/2 rounded-none shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

        {/* Desktop Layout - Image on left, 3 cards on right */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto -mt-8 items-center">
          {/* Left Side - Images */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Main Image */}
            <img 
              src={p3Image} 
              alt="Firm's Guiding Principles" 
              className="w-full max-w-xl lg:max-w-2xl rounded-lg shadow-lg object-cover rounded-none"
            />
            {/* Two Images Side by Side */}
            <div className="flex gap-4 w-full max-w-xl lg:max-w-2xl mr-4">
              <img 
                src={p4Image} 
                alt="Firm's Guiding Principles" 
                className="w-1/2 rounded-lg shadow-lg object-cover rounded-none"
              />
              <img 
                src={p5Image} 
                alt="Firm's Guiding Principles" 
                className="w-1/2 rounded-lg shadow-lg object-cover rounded-none"
              />
            </div>
          </div>
          
          {/* Right Side - 3 Cards */}
          <div className="space-y-6">
            {/* First Row - 2 Cards */}
            <div className="grid grid-cols-2 gap-6">
              {principles.slice(0, 2).map((principle, index) => {
                return (
                  <Card 
                    key={index} 
                    className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm relative overflow-hidden rounded-none"
                  >
                    <div className="absolute bottom-0 left-4 right-4 h-1 bg-accent"></div>
                    <CardContent className="pt-6 pb-6 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft">
                          <img 
                            src={principle.icon} 
                            alt={principle.title}
                            className="w-9 h-9 object-contain"
                          />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Second Row - 1 Centered Card */}
            <div className="flex justify-center">
              <Card 
                className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm relative overflow-hidden max-w-md rounded-none"
              >
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-accent"></div>
                <CardContent className="pt-6 pb-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft">
                      <img 
                        src={principles[2].icon} 
                        alt={principles[2].title}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                      {principles[2].title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principles[2].description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
