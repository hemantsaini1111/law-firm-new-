import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Building } from "lucide-react";
import courthouseInterior from "@/assets/courthouse-interior.jpg";

const stats = [
  {
    icon: Award,
    value: "30+",
    label: "Years Experience",
    description: "Decades of proven legal excellence"
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Clients Served",
    description: "Trusted by individuals and businesses"
  },
  {
    icon: TrendingUp,
    value: "$500M+",
    label: "Recovered",
    description: "In settlements and verdicts"
  },
  {
    icon: Building,
    value: "98%",
    label: "Success Rate",
    description: "Outstanding results for our clients"
  }
];

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: ` url(${courthouseInterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every case we handle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
              >
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="text-5xl font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-accent mb-2">{stat.label}</div>
                  <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
