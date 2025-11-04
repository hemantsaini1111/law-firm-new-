import { Scale, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import lawLibrary from "@/assets/law-library.jpg";
import footerCorner from "@/assets/svg/footercorner.svg";

const Footer = () => {
  return (
    <footer className="relative" style={{ backgroundImage: `url(${footerCorner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img src={lawLibrary} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-primary/70 backdrop-blur-sm text-primary-foreground py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-accent" />
              <span className="text-2xl font-serif font-bold">Abhay Bharadwaj & Associates</span>
            </div>
            <p className="text-primary-foreground/80 text-base leading-relaxed mb-6 max-w-md">
              Trusted legal counsel serving our community for over 45 years. We combine experience, dedication, and personalized service to deliver outstanding results for our clients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Twitter className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Facebook className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all">Home</a></li>
              <li><a href="#practice-areas" className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all">Practice Areas</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all">About Us</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all">Our Team</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all">Testimonials</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>150 Feet Ring Road, Office 401, The Spire-2, Sheetal Park Chowk, Rajkot, Gujarat 360007, INDIA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:9727473730" className="hover:text-accent transition-colors">9727473730</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@sterlinglaw.com" className="hover:text-accent transition-colors">info@company@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Abhay Bharadwaj & Associates. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
          {/* <p className="mt-4 text-center text-xs text-primary-foreground/50"> */}
            {/* Attorney Advertising. Prior results do not guarantee a similar outcome. */}
          {/* </p> */}
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
