import { CheckCircle } from "lucide-react";
import consultationMeeting from "@/assets/consultation-meeting.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              About Sterling & Associates
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over three decades, Sterling & Associates has been a pillar of legal excellence in our community. Our firm was built on a foundation of integrity, dedication, and an unwavering commitment to our clients' success.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that every client deserves personalized attention and strategic legal counsel. Our team combines deep legal expertise with a practical understanding of your goals to deliver results that matter.
            </p>
            
            <div className="space-y-4">
              {[
                "Personalized legal strategies",
                "Transparent communication",
                "Proven track record of success",
                "Compassionate client service"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden mb-8 shadow-elegant hover:shadow-hover transition-shadow duration-500">
              <img 
                src={consultationMeeting} 
                alt="Sterling & Associates professional legal consultation"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border shadow-soft backdrop-blur-sm">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-serif font-bold text-accent mb-2">30+</div>
                  <div className="text-foreground font-medium">Years of Legal Excellence</div>
                  <p className="text-muted-foreground mt-2">
                    Three decades serving our community with dedication and expertise
                  </p>
                </div>
                
                <div>
                  <div className="text-5xl font-serif font-bold text-accent mb-2">15</div>
                  <div className="text-foreground font-medium">Expert Attorneys</div>
                  <p className="text-muted-foreground mt-2">
                    A diverse team of specialized legal professionals
                  </p>
                </div>
                
                <div>
                  <div className="text-5xl font-serif font-bold text-accent mb-2">$500M+</div>
                  <div className="text-foreground font-medium">Recovered for Clients</div>
                  <p className="text-muted-foreground mt-2">
                    Significant results in settlements and verdicts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
