import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    title: "Corporate Law",
    description: "Comprehensive legal services for businesses, mergers, acquisitions, and corporate governance."
  },
  {
    iconImage: civilLawIcon,
    title: "Civil Litigation",
    description: "Expert representation in complex civil disputes and courtroom litigation."
  },
  {
    iconImage: realEstateLawIcon,
    title: "Real Estate Law",
    description: "Full-service real estate legal support for transactions, disputes, and development."
  },
  {
    iconImage: familyLawIcon,
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, and family legal matters."
  },
  {
    iconImage: employmentLawIcon,
    title: "Employment Law",
    description: "Protecting your rights in workplace disputes and employment contracts."
  },
  {
    iconImage: estatePlanningIcon,
    title: "Estate Planning",
    description: "Secure your legacy with wills, trusts, and comprehensive estate planning."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${workingAreasBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)]"></div>
      <div className="container mx-auto pl-4 pr-0 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas
          </p>
        </div>

        <div className="flex justify-end w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl -mr-12">
            {practiceAreas.map((area, index) => {
              return (
                <Card 
                  key={index} 
                  className="border-l-2 border-r-2 border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm"
                  style={{
                    borderLeftColor: 'rgb(48,35,26)',
                    borderRightColor: 'rgb(48,35,26)'
                  }}
                >
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
