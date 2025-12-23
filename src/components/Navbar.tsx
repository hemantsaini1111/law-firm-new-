import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';

// Define navigation items for easy mapping
const navItems = ['Home', 'Practice Areas', 'About', 'Team', 'Testimonials', 'Contact'];

/**
 * A component to inject the complex custom styles needed for this design.
 */
const NavbarStyles = () => (
  <style>{`
    /* Use Inter font */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    /* Apply font to the whole app */
    .font-inter {
        font-family: 'Inter', sans-serif;
    }

    /* 1. Header Styling */
    #navbar-header {
        /* Dark semi-transparent bg with blur */
        background-color: rgba(28, 25, 23, 0.85); /* stone-900 with opacity */
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        /* Bottom border as seen in image */
        border-bottom: 1px solid #44403c; /* stone-700 */
    }

    /* 2. Diagonal Line Pattern */
    #pattern-fill {
        background-image: linear-gradient(
            45deg, 
            rgba(255, 255, 255, 0.03) 25%, 
            transparent 25%, 
            transparent 50%, 
            rgba(255, 255, 255, 0.03) 50%, 
            rgba(255, 255, 255, 0.03) 75%, 
            transparent 75%, 
            transparent
        );
        background-size: 15px 15px;
        border-right: 1px solid #44403c; /* stone-700 */
    }
    
    /* 3. Link Divider */
    .nav-link {
        border-left: 1px solid #44403c; /* stone-700 */
        transform-origin: center center;
        position: relative;
        will-change: transform;
        transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                    background-color 0.3s ease-in-out,
                    color 0.3s ease-in-out,
                    box-shadow 0.3s ease-in-out;
    }

    /* Active link style */
    .nav-link.active {
        color: #fff;
        background-color: rgba(68, 64, 60, 0.5); /* stone-700 with opacity */
        box-shadow: inset 0 -2px 0 #fff; /* Inset white underline */
        transform: scaleX(1.15) scaleY(1.05);
        transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                    background-color 0.3s ease-in-out,
                    color 0.3s ease-in-out,
                    box-shadow 0.3s ease-in-out;
    }
    
    /* 4. Mobile Menu Transition */
    #mobile-menu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        /* Match header bg for seamless look */
        background-color: rgba(28, 25, 23, 0.85); /* stone-900 with opacity */
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    #mobile-menu.open {
        max-height: 500px; /* Adjust as needed to fit links */
    }

    /* Mobile active style */
    #mobile-menu .mobile-nav-link.active {
        background-color: #44403c; /* stone-700 */
        color: #fff;
        transform: scaleX(1.1) scaleY(1.03);
    }
  `}</style>
);

/**
 * Navbar Component
 */
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track the active navigation link
  const [activeLink, setActiveLink] = useState('Home');

  // Update active link based on current route
  useEffect(() => {
    if (location.pathname === '/practice-areas') {
      setActiveLink('Practice Areas');
    } else if (location.pathname === '/about') {
      setActiveLink('About');
    } else if (location.pathname === '/team') {
      setActiveLink('Team');
    } else if (location.pathname === '/testimonials') {
      setActiveLink('Testimonials');
    } else if (location.pathname === '/contact') {
      setActiveLink('Contact');
    } else if (location.pathname === '/') {
      // Will be updated by scroll handler on home page
    }
  }, [location.pathname]);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Map nav items to section IDs
  const getSectionId = (item: string): string => {
    const mapping: Record<string, string> = {
      'Home': 'home',
      'Practice Areas': 'practice-areas',
      'About': 'about',
      'Team': 'team',
      'Testimonials': 'testimonials',
      'Contact': 'contact',
    };
    return mapping[item] || item.toLowerCase().replace(' ', '-');
  };

  // Reverse mapping: section ID to nav item
  const getNavItemFromSectionId = (sectionId: string): string | null => {
    const mapping: Record<string, string> = {
      'home': 'Home',
      'practice-areas': 'Practice Areas',
      'about': 'About',
      'team': 'Team',
      'testimonials': 'Testimonials',
      'contact': 'Contact',
    };
    return mapping[sectionId] || null;
  };

  // Effect to track scroll position and update active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height + some padding
      let currentSection = 'Home';

      // Check each section to see which one is in view
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const sectionId = getSectionId(item);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          // If scroll position has passed the top of this section
          if (scrollPosition >= elementTop - 100) {
            currentSection = item;
            break;
          }
        }
      }

      // Only update if changed to avoid unnecessary re-renders
      setActiveLink((prev) => {
        return prev !== currentSection ? currentSection : prev;
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  // Handler for desktop link clicks
  const handleNavClick = (item: string) => {
    setActiveLink(item);
    if (item === 'Practice Areas') {
      navigate('/practice-areas');
    } else if (item === 'About') {
      navigate('/about');
    } else if (item === 'Team') {
      navigate('/team');
    } else if (item === 'Testimonials') {
      navigate('/testimonials');
    } else if (item === 'Contact') {
      navigate('/contact');
    } else {
      // If not on home page, navigate to home first, then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(getSectionId(item));
        }, 100);
      } else {
        scrollToSection(getSectionId(item));
      }
    }
  };

  // Handler for mobile link clicks (also closes the menu)
  const handleMobileNavClick = (item: string) => {
    setActiveLink(item);
    setIsMobileMenuOpen(false);
    if (item === 'Practice Areas') {
      navigate('/practice-areas');
    } else if (item === 'About') {
      navigate('/about');
    } else if (item === 'Team') {
      navigate('/team');
    } else if (item === 'Testimonials') {
      navigate('/testimonials');
    } else if (item === 'Contact') {
      navigate('/contact');
    } else {
      // If not on home page, navigate to home first, then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(getSectionId(item));
        }, 100);
      } else {
        scrollToSection(getSectionId(item));
      }
    }
  };

  return (
    <div className="font-inter text-stone-300">
      <NavbarStyles />
      
      {/* Header */}
      <header id="navbar-header" className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
            
            {/* Left: Logo */}
            <a 
              href="#" 
              className="flex-shrink-0 flex items-center space-x-3 pr-6 h-full cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setActiveLink('Home');
              }}
            >
                <Scale className="w-6 h-6 text-white" />
                <span className="text-xl font-bold text-white tracking-wide">Abhay Bharadwaj & Associates</span>
            </a>

            {/* Center: Pattern Fill (Desktop) */}
            <div id="pattern-fill" className="flex-grow h-full hidden lg:block">
                {/* This div just creates the patterned empty space */}
            </div>

            {/* Right: Actions (Desktop) - Mapped from array */}
            <div className="hidden lg:flex items-center h-full">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`nav-link flex items-center h-full px-5 text-sm font-medium uppercase tracking-wider text-stone-400 hover:text-white transition-colors ${
                            activeLink === item ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item);
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="lg:hidden">
                <button
                    id="hamburger-btn"
                    className="p-2 rounded-md focus:outline-none text-stone-300 hover:text-white"
                    aria-label="Open menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        <div
          id="mobile-menu"
          className={`lg:hidden ${isMobileMenuOpen ? 'open' : ''}`}
        >
            <nav className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`mobile-nav-link block px-4 py-3 rounded-md text-base font-medium text-stone-300 hover:bg-stone-700 hover:text-white transition-transform duration-200 ${
                            activeLink === item ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleMobileNavClick(item);
                        }}
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;