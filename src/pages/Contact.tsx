import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Calendar, Video, Building2, Upload, MessageCircle, Linkedin, Instagram, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/svg/herobg8.svg";
import contactSection from "@/assets/svg/contactsection.svg";
import footerCorner from "@/assets/svg/workingareasbg.svg";

// === Type Definitions ===
type FormState = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  attachment: File | null;
};

type AppointmentType = 'offline' | 'online' | null;

// === Helper Components ===
const FormInput: React.FC<{
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ id, label, type = 'text', placeholder, value, onChange, required = false }) => (
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
      <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-75">
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
    phone: '',
    message: '',
    attachment: null,
  });
  const [appointmentType, setAppointmentType] = useState<AppointmentType>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'inquiry' | 'appointment'>('inquiry');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setFormState((prevState) => ({
          ...prevState,
          attachment: file,
        }));
      } else {
        alert('Please upload only PDF or Word documents');
      }
    }
  };

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Prepare WhatsApp message
    const whatsappMessage = `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone || 'Not provided'}\nMessage: ${formState.message}`;
    const whatsappUrl = `https://wa.me/919316705993?text=${encodeURIComponent(whatsappMessage)}`;
    
    // For email, we'll use mailto (in production, you'd use an API)
    const emailSubject = `Inquiry from ${formState.name}`;
    const emailBody = `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone || 'Not provided'}\nMessage: ${formState.message}`;
    const emailUrl = `mailto:abalegal@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Option to send via WhatsApp or Email
      const sendMethod = window.confirm('Choose OK to send via WhatsApp, or Cancel to send via Email');
      if (sendMethod) {
        window.open(whatsappUrl, '_blank');
      } else {
        window.location.href = emailUrl;
      }
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
          attachment: null,
        });
      }, 3000);
    }, 1000);
  };

  const handleOfflineAppointment = () => {
    const address = "Fourth Floor, The Spire 2, 401, Chowk, 150 Feet Ring Rd, Sheetal Park, Rajkot, Gujarat 360007";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, '_blank');
  };

  const handleOnlineAppointment = () => {
    // In production, this would integrate with a calendar booking system
    alert('Online appointment booking via Zoom will be available soon. Please contact us at +919316705993 or abalegal@outlook.com to schedule.');
  };

  const officeAddress = "Fourth Floor, The Spire 2, 401, Chowk, 150 Feet Ring Rd, Sheetal Park, Rajkot, Gujarat 360007";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

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

      {/* Get In Touch Section */}
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
        <div className="max-w-6xl w-full mx-auto relative z-10">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'inquiry' 
                    ? 'bg-[#5C3317] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Inquiry Box
              </button>
              <button
                onClick={() => setActiveTab('appointment')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'appointment' 
                    ? 'bg-[#5C3317] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Inquiry Box */}
          {activeTab === 'inquiry' && (
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Inquiry Box</h2>
                <p className="text-sm sm:text-base text-gray-600">Send us a message via email or WhatsApp. You can attach PDFs and Word documents.</p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center min-h-[200px] bg-[#F4E6D7] text-[#5C3317] rounded-lg p-6">
                  <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-lg">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
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
                  <FormInput
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 9316705993"
                    value={formState.phone || ''}
                    onChange={handleInputChange}
                  />
                  <FormTextarea
                    id="message"
                    label="Message"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  />
                  
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Attach Document (PDF, Word)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#5C3317] transition-colors">
                      <input
                        type="file"
                        id="attachment"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="attachment" className="cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Click to upload PDF or Word document</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                        {formState.attachment && (
                          <p className="text-sm text-green-600 mt-2">{formState.attachment.name}</p>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-[#5C3317] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#4A2812] focus:outline-none focus:ring-2 focus:ring-[#5C3317] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          Send via Email
                        </>
                      )}
                    </button>
                    <a
                      href={`https://wa.me/919316705993?text=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#20BA5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Book Appointment */}
          {activeTab === 'appointment' && (
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Book an Appointment</h2>
                <p className="text-sm sm:text-base text-gray-600">Choose between offline or online consultation</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Offline Appointment */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#5C3317] transition-all">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-8 h-8 text-[#5C3317] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Offline Appointment</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Visit our office for an in-person consultation</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Office Address:</p>
                    <p className="text-sm text-gray-600">{officeAddress}</p>
                  </div>
                  <button
                    onClick={handleOfflineAppointment}
                    className="w-full bg-[#5C3317] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#4A2812] flex items-center justify-center"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </button>
                </div>

                {/* Online Appointment */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#5C3317] transition-all">
                  <div className="flex items-center mb-4">
                    <Video className="w-8 h-8 text-[#5C3317] mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Online Appointment</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Schedule a virtual consultation via Zoom</p>
                  <p className="text-sm text-gray-500 mb-4">Book your Zoom meeting appointment with us</p>
                  <button
                    onClick={handleOnlineAppointment}
                    className="w-full bg-[#5C3317] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#4A2812] flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Zoom Meeting
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reach Out for Legal Consultation */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF8E7' }}>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block relative group cursor-pointer mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                  Reach out to us for Legal Consultation
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
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <InfoRow
                    icon={<MapPin size={20} />}
                    text={officeAddress}
                  />
                  <div className="space-y-2">
                    <InfoRow
                      icon={<Phone size={20} />}
                      text="+919316705993"
                      href="tel:+919316705993"
                    />
                    <InfoRow
                      icon={<Phone size={20} />}
                      text="+919727473730"
                      href="tel:+919727473730"
                    />
                  </div>
                  <InfoRow
                    icon={<Mail size={20} />}
                    text="abalegal@outlook.com"
                    href="mailto:abalegal@outlook.com"
                  />
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-[#5C3317] font-semibold hover:underline"
                >
                  View on Google Maps <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(officeAddress)}&hl=en-US&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '400px', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-[#5C3317] mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Availability</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Monday - Friday</p>
                  <p className="text-gray-600">5:00 PM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">2nd & 4th Saturday</p>
                  <p className="text-gray-600">10:30 AM - 1:00 PM</p>
                  <p className="text-gray-600">5:00 PM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Other Saturdays</p>
                  <p className="text-gray-600">5:00 PM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="p-6 md:p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/abhay-bharadwajassociates/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#5C3317] text-white rounded-lg font-semibold hover:bg-[#4A2812] transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/abalawfirm/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#5C3317] text-white rounded-lg font-semibold hover:bg-[#4A2812] transition-all"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                    Instagram
                  </a>
                </div>
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
