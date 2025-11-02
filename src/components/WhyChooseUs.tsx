import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, TrendingUp } from "lucide-react";
import whyChooseUsBg from "@/assets/svg/whychooseusbg2.svg";

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
    <section className="py-24 bg-gradient-to-br from-[#5C3317] via-[#6B4423] to-[#FFE4E1] text-white relative overflow-hidden">
      {/* Background SVG */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none"
        style={{backgroundImage: `url(${whyChooseUsBg})`}}
      ></div>
      
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
              <Card key={index} className="bg-white backdrop-blur-sm border-0 border-l-[5px] border-l-gray-500 hover:bg-white transition-all duration-300 hover:shadow-elegant-hover hover:scale-105 rounded-none rounded-tr-lg rounded-br-lg aspect-square">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#5C3317]">{feature.title}</h3>
                  <p className="text-[#5C3317]/80 leading-relaxed">{feature.description}</p>
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
