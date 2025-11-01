import { Card, CardContent } from "@/components/ui/card";
import { Phone, FileText, Users, Scale } from "lucide-react";
import officeCollaboration from "@/assets/office-collaboration.jpg";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your case and legal needs"
  },
  {
    icon: FileText,
    number: "02",
    title: "Case Evaluation",
    description: "Our experts thoroughly review your case and develop a strategic plan"
  },
  {
    icon: Users,
    number: "03",
    title: "Dedicated Representation",
    description: "Your assigned attorney works tirelessly to protect your interests"
  },
  {
    icon: Scale,
    number: "04",
    title: "Resolution",
    description: "We fight for the best possible outcome through negotiation or trial"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img 
          src={officeCollaboration} 
          alt="Office collaboration background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            How We Work With You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, client-focused approach from consultation to resolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-[120px] font-serif font-bold text-accent/5 leading-none p-4">
                  {step.number}
                </div>
                <CardContent className="pt-8 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-soft">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
