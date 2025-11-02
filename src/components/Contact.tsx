import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.03),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.02),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              Contact Us
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your free consultation today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-border mb-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 bg-background/90 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-input h-12 focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-input h-12 focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-input h-12 focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your legal needs"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="border-input focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-lg shadow-glow hover:shadow-elegant-hover transition-all hover:scale-105 font-semibold">
                    Submit Consultation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300 bg-background/90 backdrop-blur-sm group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Office Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Legal Plaza, Suite 500<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300 bg-background/90 backdrop-blur-sm group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Phone</h3>
                    <p className="text-muted-foreground text-lg">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300 bg-background/90 backdrop-blur-sm group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Email</h3>
                    <p className="text-muted-foreground">info@sterlinglaw.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300 bg-background/90 backdrop-blur-sm group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Office Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
