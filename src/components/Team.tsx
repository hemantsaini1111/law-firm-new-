import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import jamesSterling from "@/assets/team/james-sterling.jpg";
import sarahMitchell from "@/assets/team/sarah-mitchell.jpg";
import michaelChen from "@/assets/team/michael-chen.jpg";
import emilyRodriguez from "@/assets/team/emily-rodriguez.jpg";

const team = [
  {
    name: "James Sterling",
    role: "Senior Partner",
    specialty: "Corporate Law & Litigation",
    description: "30+ years of experience in complex corporate matters and trial litigation.",
    image: jamesSterling
  },
  {
    name: "Sarah Mitchell",
    role: "Partner",
    specialty: "Family Law",
    description: "Compassionate advocate with expertise in divorce and custody cases.",
    image: sarahMitchell
  },
  {
    name: "Michael Chen",
    role: "Partner",
    specialty: "Real Estate Law",
    description: "Expert in commercial real estate transactions and property disputes.",
    image: michaelChen
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Attorney",
    specialty: "Employment Law",
    description: "Dedicated to protecting workers' rights and workplace justice.",
    image: emilyRodriguez
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.03),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">Expert Attorneys</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Legal Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced attorneys dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/5 to-transparent"></div>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-accent/20 group-hover:border-accent/40 transition-colors shadow-elegant relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-serif text-center group-hover:text-accent transition-colors relative z-10">{member.name}</CardTitle>
                <CardDescription className="text-center font-medium text-accent relative z-10">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-medium text-foreground mb-2">{member.specialty}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
