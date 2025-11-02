import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Home, Heart, Briefcase, FileText } from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive legal services for businesses, mergers, acquisitions, and corporate governance."
  },
  {
    icon: Users,
    title: "Civil Litigation",
    description: "Expert representation in complex civil disputes and courtroom litigation."
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Full-service real estate legal support for transactions, disputes, and development."
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, and family legal matters."
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Protecting your rights in workplace disputes and employment contracts."
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Secure your legacy with wills, trusts, and comprehensive estate planning."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)]"></div>
      <div className="container mx-auto pl-4 pr-0 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas
          </p>
        </div>

        <div className="flex justify-end w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl -mr-12">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft group-hover:shadow-glow">
                    <Icon className="w-8 h-8 text-accent" />
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
