import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Robert Johnson",
    case: "Corporate Litigation",
    text: "Sterling & Associates provided exceptional legal counsel during our merger. Their expertise and attention to detail were invaluable."
  },
  {
    name: "Maria Garcia",
    case: "Family Law",
    text: "Sarah Mitchell handled my divorce with such compassion and professionalism. She fought for my rights every step of the way."
  },
  {
    name: "David Thompson",
    case: "Real Estate",
    text: "Michael Chen's knowledge of real estate law saved us from a costly mistake. Highly recommend their services."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.02),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.02),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from clients who trusted us with their legal matters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-background/90 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[100px] font-serif text-accent/5 leading-none">"</div>
              <CardContent className="pt-6 relative z-10">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic text-base min-h-[120px]">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.case}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
