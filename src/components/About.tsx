import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import aboutSectionBg from "@/assets/svg/aboutsection3.svg";
import firmBuilding from "@/assets/images/founder.png";
import courtRoom from "@/assets/images/court-room.png";
import teamMeeting from "@/assets/images/team-meeting.png";
import lawyerDiscussion from "@/assets/images/prize.png";

const aboutImages = [
  firmBuilding,
  courtRoom,
  teamMeeting,
  lawyerDiscussion
];

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
      className="py-32 bg-background relative overflow-hidden" 
      style={{ backgroundColor: '#FFF8E7', minHeight: '500px' }}
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
      <div className="container px-4 md:pr-4 md:ml-0 md:pl-10 relative">
        <div className="max-w-4xl">
          {/* Text Content */}
          <div className="mb-12">
            <div className="inline-block relative group cursor-pointer mb-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                About Abhay Bharadwaj & Associates
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
              We are a four-and-a-half-decade-old law firm based out of Rajkot, Gujarat. Established by Late Shri Abhay Bharadwaj, a former member of the Law Commission of India, in the year 1980. We have gradually cemented our position as a pillar of legal excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AB & A, with a team of over 50 skilled lawyers led by Adv. Ansh Bharadwaj has his work spread across Gujarat, specifically in the Saurashtra-Kutch region.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our expertise spans diverse areas, including Criminal Law, Civil Law, Family Law, Motor Vehicle Law, Company Law, and IPR Law, making our firm a one-stop solution for clients' wide range of legal challenges.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AB & A has built an unwavering reputation for excellence, guiding clients through intricate legal landscapes with unwavering dedication and an unwavering commitment to justice.
            </p>
            
            <div className="space-y-4">
              {[
                "Personalized legal strategies",
                "Transparent communication",
                "Proven track record of success",
                "Compassionate client service",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Image Grid positioned on the right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[-130px] md:top-[350px] hidden md:block">
          <div className="grid grid-cols-2 gap-4 w-80 lg:w-96 xl:w-[500px] 2xl:w-[600px]">
            {aboutImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden shadow-lg border-2 border-accent">
                <img 
                  src={image} 
                  alt={`About AB & A ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
