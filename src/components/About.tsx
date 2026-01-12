import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import aboutSectionBg from "@/assets/svg/aboutsection3.svg";
import courtRoom from "@/assets/images/court-room.png";

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
      className="py-16 md:py-32 bg-background relative overflow-hidden"
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
            <div className="mb-8 md:mb-12">
              <div className="inline-block relative group cursor-pointer mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
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
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                We are a four-and-a-half-decade-old law firm based out of Rajkot, Gujarat. Established by Late Shri Abhay Bharadwaj, a former member of the Law Commission of India, in the year 1980. We have gradually cemented our position as a pillar of legal excellence.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                AB & A, with a team of over 50 skilled lawyers led by Adv. Ansh Bharadwaj has his work spread across Gujarat, specifically in the Saurashtra-Kutch region.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Our expertise spans diverse areas, including Criminal Law, Civil Law, Family Law, Motor Vehicle Law, Company Law, and IPR Law, making our firm a one-stop solution for clients' wide range of legal challenges.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed hidden md:block">
                AB & A has built an unwavering reputation for excellence, guiding clients through intricate legal landscapes with unwavering dedication and an unwavering commitment to justice.
              </p>

              <div className="space-y-4 hidden md:block">
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

              {/* Mobile Bullet Points */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 md:hidden">
                {[
                  "Personalized legal strategies",
                  "Transparent communication",
                  "Proven track record of success",
                  "Compassionate client service",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Image - Single Focus */}
            <div className="md:hidden mt-8">
              <div className="relative overflow-hidden rounded-none shadow-xl border border-gray-200">
                <img
                  src={courtRoom}
                  alt="Court Room"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Single Image Focus on Right */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[-80px] lg:right-[-60px] xl:right-[-40px] md:top-[300px] hidden md:block">
            <div className="w-80 lg:w-96 xl:w-[480px]">
              <div className="relative overflow-hidden rounded-none shadow-2xl border border-gray-200/50 group">
                <img
                  src={courtRoom}
                  alt="Court Room"
                  className="w-full h-[400px] lg:h-[450px] xl:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5C3317] via-[#8B5A2B] to-[#5C3317] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
