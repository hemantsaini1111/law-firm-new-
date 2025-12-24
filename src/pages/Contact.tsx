import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/svg/herobg8.svg";
import contactFormImage from "@/assets/svg/contactformimage.svg";
import contactSection from "@/assets/svg/contactsection.svg";
import footerCorner from "@/assets/svg/workingareasbg.svg";

// === Type Definitions ===
type FormState = {
  name: string;
  email: string;
  message: string;
};

// === Helper Components ===

/**
 * A reusable component for a form input field with a visible label.
 */
const FormInput: React.FC<{
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5C3317] focus:border-transparent"
    />
  </div>
);

/**
 * A reusable component for a form textarea with a visible label.
 */
const FormTextarea: React.FC<{
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}> = ({ id, label, placeholder, value, onChange, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      rows={4}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5C3317] focus:border-transparent"
    />
  </div>
);

/**
 * A reusable component for the contact info rows
 */
const InfoRow: React.FC<{
  icon: React.ReactNode;
  text: string;
  href?: string;
}> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-start gap-2 sm:gap-3">
      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#5C3317] mt-0.5">
        {icon}
      </div>
      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity duration-300 hover:opacity-75">
        {content}
      </a>
    );
  }

  return content;
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [backgroundPosition, setBackgroundPosition] = useState('center center');
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (window.innerWidth < 768) {
        setBackgroundPosition('right center');
      } else {
        setBackgroundPosition('center center');
      }
    };

    updateBackgroundPosition();
    window.addEventListener('resize', updateBackgroundPosition);
    
    return () => {
      window.removeEventListener('resize', updateBackgroundPosition);
    };
  }, []);

  // === Event Handlers ===
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    console.log('Form Data:', formState);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after a short delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/80 md:hidden z-0"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-slide-up inline-block relative"
                style={{
                  background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                <span>Contact Us</span>
                <svg 
                  className="absolute -bottom-2 left-0 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ width: '100%' }}
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
              </h1>
            </div>
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed animate-slide-up max-w-3xl" 
              style={{ 
                animationDelay: '0.1s',
                background: 'linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                opacity: 0.85
              }}
            >
              We're here to help. Reach out to us anytime and let's discuss how we can assist with your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="relative antialiased text-gray-900 py-12 sm:py-16 md:py-24 w-full flex items-center justify-center px-4 sm:px-8" 
        style={{ 
          backgroundColor: 'rgb(255,249,233)', 
          backgroundImage: `url(${contactSection})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className="absolute inset-0 bg-[rgb(255,249,233)]/60"></div>
        <div className="max-w-5xl w-full mx-auto md:ml-auto md:mr-20 lg:mr-32 xl:mr-40 bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative z-10">
          
          {/* Left Column: Image (hidden on mobile) */}
          <div className="hidden md:block">
            <img
              src={contactFormImage}
              alt="Contact form illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Form & Info */}
          <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="absolute right-0 top-4 bottom-4 w-[4px] bg-gradient-to-b from-gray-400 to-gray-200 hidden md:block"></div>
            
            {/* Header */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Get In Touch</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">We're here to help. Reach out to us anytime.</p>
            </div>
              
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[180px] sm:min-h-[200px] bg-[#F4E6D7] text-[#5C3317] rounded-lg p-4 sm:p-5 md:p-6">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <h3 className="text-xl sm:text-2xl font-semibold">Thank You!</h3>
                <p className="text-base sm:text-lg mt-2">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <FormInput
                  id="name"
                  label="Full Name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
                <FormTextarea
                  id="message"
                  label="Message"
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#5C3317] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#4A2812] focus:outline-none focus:ring-2 focus:ring-[#5C3317] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Contact Info Section */}
            <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200">
              <div className="space-y-2 sm:space-y-3">
                <InfoRow
                  icon={<Mail size={18} />}
                  text="hello@company.com"
                  href="mailto:hello@company.com"
                />
                <InfoRow
                  icon={<Phone size={18} />}
                  text="9727473730"
                  href="tel:9727473730"
                />
                <InfoRow
                  icon={<MapPin size={18} />}
                  text="150 Feet Ring Road, Office 401, The Spire-2, Sheetal Park Chowk, Rajkot, Gujarat 360007, INDIA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Background SVG */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-10 z-0"
          style={{
            backgroundImage: `url(${footerCorner})`,
            backgroundSize: '80%',
            backgroundPosition: 'center center',
            opacity: 0.25
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block relative group cursor-pointer mb-3 md:mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                  Why Contact Us?
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
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing exceptional legal services and personalized attention to every client
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-1 sm:mb-2">24/7 Availability</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">We're always here to help when you need us most</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-1 sm:mb-2">Quick Response</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-1 sm:mb-2">Convenient Location</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Visit our office or schedule a virtual consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

