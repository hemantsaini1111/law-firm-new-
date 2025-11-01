import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import handshakeAgreement from "@/assets/handshake-agreement.jpg";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 30, 50, 0.95), rgba(20, 40, 65, 0.92)), url(${handshakeAgreement})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Don't navigate your legal challenges alone. Our experienced attorneys are here to help you achieve the best possible outcome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 shadow-glow hover:shadow-elegant-hover transition-all duration-300 hover:scale-110 font-semibold"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-10 py-7 backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:5551234567'}
            >
              <Phone className="mr-2 w-5 h-5" />
              (555) 123-4567
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            Available 24/7 for urgent matters • Free initial consultation • No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
