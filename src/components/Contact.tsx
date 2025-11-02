import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactFormImage from '@/assets/svg/contactformimage.svg';
import contactSection from '@/assets/svg/contactsection.svg';

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
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#5C3317]">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
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

/**
 * Main Contact Component
 */
const Contact = () => {
  // === State ===
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  // === Render ===
  return (
    <section id="contact" className="relative antialiased text-gray-900 py-12 w-full flex items-center justify-center px-4 sm:px-8" style={{ backgroundColor: 'rgb(255,249,233)', backgroundImage: `url(${contactSection})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
        <div className="relative p-6 md:p-8">
          <div className="absolute right-0 top-4 bottom-4 w-[4px] bg-gradient-to-b from-gray-400 to-gray-200"></div>
          
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-base text-gray-600 mt-1">We're here to help. Reach out to us anytime.</p>
          </div>
            
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[200px] bg-[#F4E6D7] text-[#5C3317] rounded-lg p-6">
              <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <h3 className="text-2xl font-semibold">Thank You!</h3>
              <p className="text-lg mt-2">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-3">
              <InfoRow
                icon={<Mail size={20} />}
                text="hello@company.com"
                href="mailto:hello@company.com"
              />
              <InfoRow
                icon={<Phone size={20} />}
                text="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <InfoRow
                icon={<MapPin size={20} />}
                text="123 Main Street, Anytown, USA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
