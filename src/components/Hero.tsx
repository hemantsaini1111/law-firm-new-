import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/svg/herobg8.svg";

const Hero = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

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
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* White overlay for mobile view only */}
      <div className="absolute inset-0 bg-white/80 md:hidden z-0"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-slide-up"
            style={{
              background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Trusted Legal Counsel for Over 30 Years
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 leading-relaxed animate-slide-up" 
            style={{ 
              animationDelay: '0.1s',
              background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}
          >
            Expert legal representation with a proven track record of success. We fight for your rights with integrity and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'rgb(61,58,57)' }} />
              </span>
            </Button>
            <Button 
              onClick={() => document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 hover:bg-white/20 text-lg px-8 py-7 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Our Services
              </span>
            </Button>
          </div>
          
          {/* <div className="flex flex-wrap gap-8 mt-12 text-white animate-slide-up" style={{ animationDelay: '0.3s' }}> */}
            {/* <div className="group"> */}
              {/* <div className="text-4xl font-serif font-bold text-accent group-hover:scale-110 transition-transform">30+</div> */}
              {/* <div className="text-sm text-white/80">Years Experience</div> */}
            {/* </div> */}
            {/* <div className="group"> */}
              {/* <div className="text-4xl font-serif font-bold text-accent group-hover:scale-110 transition-transform">500+</div> */}
              {/* <div className="text-sm text-white/80">Cases Won</div> */}
            {/* </div> */}
            {/* <div className="group"> */}
              {/* <div className="text-4xl font-serif font-bold text-accent group-hover:scale-110 transition-transform">98%</div> */}
              {/* <div className="text-sm text-white/80">Success Rate</div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
