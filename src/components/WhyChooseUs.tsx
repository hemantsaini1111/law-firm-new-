import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Award, Shield, Users, TrendingUp } from "lucide-react";
import whyChooseUsBg from "@/assets/svg/whychooseusbg2.svg";

const features = [
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Over 30 years of legal excellence with hundreds of successful cases and satisfied clients."
  },
  {
    icon: Shield,
    title: "Client-Focused Approach",
    description: "Your success is our priority. We provide personalized strategies tailored to your unique needs."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our diverse team of specialists brings deep expertise across multiple practice areas."
  },
  {
    icon: TrendingUp,
    title: "Outstanding Results",
    description: "98% success rate with over $500M recovered for our clients throughout our history."
  }
];

const WhyChooseUs = () => {
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
    <section className="py-24 bg-gradient-to-br from-[#5C3317] via-[#6B4423] to-[#FFE4E1] text-white relative overflow-hidden">
      {/* Background SVG */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none"
        style={{backgroundImage: `url(${whyChooseUsBg})`}}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Why Choose Sterling & Associates
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
            Experience the difference that dedication, expertise, and personalized service can make
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden w-full max-w-7xl mx-auto">
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
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={index} className="pl-2 basis-full">
                    <Card className="bg-white backdrop-blur-sm border-0 border-l-[5px] border-l-gray-500 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-none rounded-tr-lg rounded-br-lg aspect-square">
                      <CardContent className="pt-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3 text-[#5C3317]">{feature.title}</h3>
                        <p className="text-[#5C3317]/80 leading-relaxed">{feature.description}</p>
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
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white backdrop-blur-sm border-0 border-l-[5px] border-l-gray-500 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-none rounded-tr-lg rounded-br-lg aspect-square">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#5C3317]">{feature.title}</h3>
                  <p className="text-[#5C3317]/80 leading-relaxed">{feature.description}</p>
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
