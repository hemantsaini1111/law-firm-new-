import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import corporateLawIcon from "@/assets/icons/corporate-laws.png";
import civilLawIcon from "@/assets/icons/civil-law.png";
import realEstateLawIcon from "@/assets/icons/real-estate-law.png";
import familyLawIcon from "@/assets/icons/family-law.png";
import employmentLawIcon from "@/assets/icons/employment-law.png";
import estatePlanningIcon from "@/assets/icons/estate-planning.png";
import workingAreasBg from "@/assets/svg/workingareasbg.svg";

const practiceAreas = [
  {
    iconImage: corporateLawIcon,
    title: "Criminal Law",
    description: "Comprehensive legal representation for criminal cases, defending your rights with professionalism and care."
  },
  {
    iconImage: civilLawIcon,
    title: "Civil Law",
    description: "Expert legal services in property disputes, contract enforcement, money recovery, landlord-tenant issues, and injunctions."
  },
  {
    iconImage: realEstateLawIcon,
    title: "Family Law",
    description: "Compassionate legal support for divorce, child custody, and alimony cases, protecting your rights through a smooth legal process."
  },
  {
    iconImage: familyLawIcon,
    title: "Motor Vehicle Law",
    description: "Legal representation in motor vehicle accident cases, including personal injury claims, property damage, and fatal accident claims under MACT proceedings."
  },
  {
    iconImage: employmentLawIcon,
    title: "Company Law",
    description: "Skilled representation in company law matters, from regulatory compliance to business structuring, ensuring your legal obligations are met."
  },
  {
    iconImage: estatePlanningIcon,
    title: "Intellectual Property Law",
    description: "Expert handling of intellectual property rights and legal issues, including compliance and litigation."
  }
];

const PracticeAreas = () => {

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

  return (
    <section id="practice-areas" className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)]"></div>
      <div
        className="absolute inset-0 z-0 opacity-40 sm:opacity-100"
        style={{
          backgroundImage: `url(${workingAreasBg})`,
          backgroundSize: 'cover',
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Practice Areas
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
            We provide comprehensive legal services across multiple practice areas
          </p>
        </div>

        <div className="w-full">
          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:hidden mb-12">
            {practiceAreas.map((area, index) => {
              const isEven = index % 2 === 0;
              const borderColor = 'rgb(48,35,26)';

              return (
                <Card
                  key={index}
                  className="relative hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm overflow-visible"
                >
                  {isEven ? (
                    <>
                      <div
                        className="absolute left-0 border-l-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderLeftColor: borderColor,
                          top: '12px',
                          bottom: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      <div
                        className="absolute top-0 border-t-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderTopColor: borderColor,
                          left: '12px',
                          right: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      <div
                        className="absolute right-0 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderRightColor: borderColor,
                          top: '12px',
                          bottom: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      <div
                        className="absolute bottom-0 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderBottomColor: borderColor,
                          left: '12px',
                          right: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div
                        className="absolute right-0 border-r-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderRightColor: borderColor,
                          top: '12px',
                          bottom: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      <div
                        className="absolute bottom-0 border-b-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderBottomColor: borderColor,
                          left: '12px',
                          right: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      <div
                        className="absolute left-0 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderLeftColor: borderColor,
                          top: '12px',
                          bottom: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      <div
                        className="absolute top-0 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderTopColor: borderColor,
                          left: '12px',
                          right: '12px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                    </>
                  )}
                  <CardHeader className="p-3 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-2 sm:mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft group-hover:shadow-glow">
                      <img src={area.iconImage} alt={area.title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    </div>
                    <CardTitle className="text-sm sm:text-lg font-serif group-hover:text-accent transition-colors leading-tight">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
                    <CardDescription className="text-[10px] sm:text-sm leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl md:ml-auto md:mr-0 md:-mr-12">
            {practiceAreas.map((area, index) => {
              const isEven = index % 2 === 0;
              const borderColor = 'rgb(48,35,26)';

              return (
                <Card
                  key={index}
                  className="relative hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm overflow-visible"
                >
                  {isEven ? (
                    <>
                      {/* Left border - starts and ends away from corners - visible by default, hidden on hover */}
                      <div
                        className="absolute left-0 border-l-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderLeftColor: borderColor,
                          top: '16px',
                          bottom: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      {/* Top border - starts and ends away from corners - visible by default, hidden on hover */}
                      <div
                        className="absolute top-0 border-t-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderTopColor: borderColor,
                          left: '16px',
                          right: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      {/* Right border - starts and ends away from corners - hidden by default, visible on hover */}
                      <div
                        className="absolute right-0 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderRightColor: borderColor,
                          top: '16px',
                          bottom: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      {/* Bottom border - starts and ends away from corners - hidden by default, visible on hover */}
                      <div
                        className="absolute bottom-0 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderBottomColor: borderColor,
                          left: '16px',
                          right: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                    </>
                  ) : (
                    <>
                      {/* Right border - starts and ends away from corners - visible by default, hidden on hover */}
                      <div
                        className="absolute right-0 border-r-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderRightColor: borderColor,
                          top: '16px',
                          bottom: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      {/* Bottom border - starts and ends away from corners - visible by default, hidden on hover */}
                      <div
                        className="absolute bottom-0 border-b-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        style={{
                          borderBottomColor: borderColor,
                          left: '16px',
                          right: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      {/* Left border - starts and ends away from corners - hidden by default, visible on hover */}
                      <div
                        className="absolute left-0 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderLeftColor: borderColor,
                          top: '16px',
                          bottom: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                      {/* Top border - starts and ends away from corners - hidden by default, visible on hover */}
                      <div
                        className="absolute top-0 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderTopColor: borderColor,
                          left: '16px',
                          right: '16px',
                          pointerEvents: 'none'
                        }}
                      ></div>
                    </>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft group-hover:shadow-glow">
                      <img src={area.iconImage} alt={area.title} className="w-8 h-8 object-contain" />
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
