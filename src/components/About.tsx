import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import aboutSectionBg from "@/assets/svg/aboutsection3.svg";

const About = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (window.innerWidth < 768) {
        setBackgroundPosition('70% center');
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

  return (
    <section 
      id="about" 
      className="py-48 bg-background relative overflow-hidden" 
      style={{ backgroundColor: '#FFF8E7', minHeight: '600px' }}
    >
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${aboutSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* White overlay for mobile view only */}
      <div className="absolute inset-0 bg-white/80 md:hidden z-[1]"></div>
      
      <div className="relative z-10">
      <div className="container px-4 md:pr-4 md:ml-0 md:pl-10">
        <div className="max-w-4xl">
          {/* Text Content */}
          <div className="mb-12">
            <div className="inline-block relative group cursor-pointer mb-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                About Sterling & Associates
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
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over three decades, Sterling & Associates has been a pillar of legal excellence in our community. Our firm was built on a foundation of integrity, dedication, and an unwavering commitment to our clients' success.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that every client deserves personalized attention and strategic legal counsel. Our team combines deep legal expertise with a practical understanding of your goals to deliver results that matter.
            </p>
            
            <div className="space-y-4">
              {[
                "Personalized legal strategies",
                "Transparent communication",
                "Proven track record of success",
                "Compassionate client service"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
