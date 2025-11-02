import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, TrendingUp } from "lucide-react";

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
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary-light text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-elegant-hover hover:scale-105">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
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
