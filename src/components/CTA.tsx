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
      <style>{`
        @keyframes drawLine {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .group .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .group:hover .animate-draw {
          animation: drawLine 0.6s ease-in-out forwards;
        }
      `}</style>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 30, 50, 0.6), rgba(20, 40, 65, 0.55)), url(${handshakeAgreement})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block relative group cursor-pointer mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="relative inline-block">
                Ready to Discuss
                {/* Curved underline SVG for first row */}
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out overflow-visible"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 0 15 Q 75 5, 150 15 T 300 15" 
                    stroke="#b08d57" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
              <br />
              <span className="relative inline-block">
                Your Legal Matter?
                {/* Curved underline SVG for second row */}
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out overflow-visible"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 0 15 Q 75 5, 150 15 T 300 15" 
                    stroke="#b08d57" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h2>
          </div>
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
              onClick={() => window.location.href = 'tel:9727473730'}
            >
              <Phone className="mr-2 w-5 h-5" />
              9727473730
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
