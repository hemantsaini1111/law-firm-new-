import { Scale, MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import lawLibrary from "@/assets/law-library.jpg";
import footerCorner from "@/assets/svg/footercorner.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="relative" style={{ backgroundImage: `url(${footerCorner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img src={lawLibrary} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-primary/70 backdrop-blur-sm text-primary-foreground py-12 sm:py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-accent flex-shrink-0" />
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold">Abhay Bharadwaj & Associates</span>
            </div>
            <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
              Trusted legal counsel serving our community for over 45 years. We combine experience, dedication, and personalized service to deliver outstanding results for our clients.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.linkedin.com/company/abhay-bharadwajassociates/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/abalawfirm/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile: Quick Links and Get In Touch side by side, Desktop: separate columns */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:contents">
            <div>
              <h3 className="font-serif font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <button 
                    onClick={() => navigate('/')} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all cursor-pointer text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/about-ab-a')} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/key-pillars/abhay')} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all cursor-pointer text-left"
                  >
                    Key Pillars
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/practice-areas')} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all cursor-pointer text-left"
                  >
                    Practice Areas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/careers/jobs')} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all cursor-pointer text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/contact')} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:pl-2 inline-block transition-all cursor-pointer text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Get In Touch</h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-primary-foreground/80">
                <li className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">150 Feet Ring Road, Office 401, The Spire-2, Sheetal Park Chowk, Rajkot, Gujarat 360007, INDIA</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <a href="tel:9727473730" className="hover:text-accent transition-colors break-all">+91 9316705993</a>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <a href="tel:9727473730" className="hover:text-accent transition-colors break-all">+91 9727473730</a>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <a href="mailto:abalegal@outlook.com" className="hover:text-accent transition-colors break-all text-xs sm:text-sm">abalegal@outlook.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Abhay Bharadwaj & Associates. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
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
