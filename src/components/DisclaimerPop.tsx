import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Scale, X } from 'lucide-react';

const DisclaimerPop: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  // Check if user has already agreed
  const hasAgreed = localStorage.getItem('disclaimerAgreed') === 'true';

  // Determine if we're on home page
  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  // Show popup on home page if user hasn't agreed
  useEffect(() => {
    if (isHomePage && !hasAgreed) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHomePage, hasAgreed]);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsVisible(false);
  };

  const handleDisagree = () => {
    // You can redirect to a different page or show a message
    // For now, we'll just close the popup but they won't be able to access content
    setIsVisible(false);
    
    // Option 1: Show an alert
    alert('You must agree to the disclaimer to access this website.');
    
    // Option 2: Redirect to external page (uncomment if needed)
    // window.location.href = 'https://google.com';
  };

  const handleClose = () => {
    // If they try to close without agreeing, treat it as disagree
    handleDisagree();
  };

  if (!isVisible || !isHomePage || hasAgreed) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998] bg-stone-900/10 backdrop-blur-sm" />
      
      {/* Popup Container */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-inter">
        <div 
          className="relative w-full max-w-4xl bg-stone-800/90 backdrop-blur border border-stone-700 shadow-2xl overflow-hidden"
          style={{
            // backgroundImage: `linear-gradient(
            //   45deg, 
            //   rgba(255, 255, 255, 0.03) 25%, 
            //   transparent 25%, 
            //   transparent 50%, 
            //   rgba(255, 255, 255, 0.03) 50%, 
            //   rgba(255, 255, 255, 0.03) 75%, 
            //   transparent 75%, 
            //   transparent
            // )`,
            backgroundSize: '20px 20px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors z-10"
            aria-label="Close disclaimer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="relative border-b border-stone-700 bg-stone-900/80 px-6 py-4">
            <div className="flex items-center space-x-3">
              {/* <Scale className="w-6 h-6 text-white" /> */}
              <h2 className="text-2xl font-bold mx-auto text-white">Disclaimer</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 max-h-[60vh] text-sm overflow-y-auto">
            <div className="space-y-4 text-stone-300">
              <p className="leading-relaxed">
                As per the rules of the Bar Council of India, law firms are not permitted to solicit
                their work or advertise in any manner. By clicking on the "<span className="font-medium text-white">I Agree</span>" button, the user/reader
                agrees and acknowledges as under:
              </p>
              
              <div className="space-y-3 pl-4 border-l-2 border-stone-700">
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">1.</span> The Firm or any of its members have not, in any manner whatsoever, issued any
                  advertisement, personal communication, solicitation, invitation, or inducement to
                  solicit work or promote the firm's services through this website.
                </p>
                
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">2.</span> That the information contained in this website is intended for informational
                  purposes only and not legal advice.
                </p>
                
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">3.</span> The information about the firm, services, or the advocates is provided to the
                  user/reader on his/her specific request only. It should not be interpreted as a
                  solicitation or advertisement.
                </p>
                
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">4.</span> The firm is not liable for the interpretation and/or use of the information available
                  on this website, nor for the consequences arising out of any action/omission taken
                  by the user/reader relying on the material/information provided on the website.
                </p>
              </div>
            </div>
          </div>

          {/* Footer with Buttons */}
          <div className="border-t border-stone-700 bg-stone-900/50 px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleAgree}
                className={`
                  w-full sm:w-auto px-8 py-3 font-semibold uppercase tracking-wider
                  border border-stone-600
                  transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  hover:scale-105 active:scale-95
                  bg-stone-700 text-white hover:bg-stone-600 hover:text-white
                  shadow-lg hover:shadow-xl
                `}
              >
                I AGREE
              </button>
              
              <button
                onClick={handleDisagree}
                className={`
                  w-full sm:w-auto px-8 py-3 font-semibold uppercase tracking-wider
                  border border-stone-600
                  transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  hover:scale-105 active:scale-95
                  bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-300
                  shadow-lg hover:shadow-xl
                `}
              >
                I DO NOT AGREE
              </button>
            </div>
            
            <p className="mt-4 text-center text-sm text-stone-400">
              You must agree to the disclaimer to access this website
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisclaimerPop;