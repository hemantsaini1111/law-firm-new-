import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/images/logo.jpg';

const NavbarStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    .font-inter { font-family: 'Inter', sans-serif; }

    #navbar-header {
      background-color: rgba(28, 25, 23, 0.85);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid #44403c;
    }

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
      border-right: 1px solid #44403c;
    }

    .nav-link {
      border-left: 1px solid #44403c;
      transition: all 0.3s ease;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: rgba(28, 25, 23, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid #44403c;
      border-radius: 0.5rem;
      min-width: 240px;
      z-index: 50;
    }

    .dropdown a {
      display: block;
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      color: #d6d3d1;
      cursor: pointer;
    }

    .dropdown a:hover {
      background-color: #44403c;
      color: white;
    }

    .submenu {
      position: absolute;
      top: 0;
      left: 100%;
    }

    #mobile-menu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
      background-color: rgba(28, 25, 23, 0.95);
    }

    #mobile-menu.open {
      max-height: 700px;
    }
  `}</style>
);

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [keyPillarsOpen, setKeyPillarsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <div className="font-inter text-stone-300">
      <NavbarStyles />

      <header id="navbar-header" className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-bold"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img 
              src={logo} 
              alt="Abhay Bharadwaj & Associates Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
            />
            <span className="text-sm sm:text-lg">Abhay Bharadwaj & Associates</span>
          </a>

          <div id="pattern-fill" className="hidden lg:block flex-grow h-full" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full">

            <a className="nav-link px-5 h-full flex items-center uppercase text-sm cursor-pointer" onClick={() => navigate('/')}>
              Home
            </a>

            {/* About */}
            <div
              className="relative nav-link px-5 h-full flex items-center cursor-pointer"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="flex items-center gap-1">
                About the Firm <ChevronDown className="w-4 h-4" />
              </span>

              {aboutOpen && (
                <div className="dropdown">
                  <a onClick={() => navigate('/about-ab-a')}>About AB & A</a>
                  <a onClick={() => navigate('/guiding-principles')}>Firm's Guiding Principles</a>
                </div>
              )}
            </div>

            {/* Key Pillars */}
            <div
              className="relative nav-link px-5 h-full flex items-center cursor-pointer"
              onMouseEnter={() => setKeyPillarsOpen(true)}
              onMouseLeave={() => setKeyPillarsOpen(false)}
            >
              <span className="flex items-center gap-1">
                Key Pillars <ChevronDown className="w-4 h-4" />
              </span>

              {keyPillarsOpen && (
                <div className="dropdown">
                  <a onClick={() => navigate('/key-pillars/abhay')}>Late Shree Abhay Bharadwaj</a>
                  <a onClick={() => navigate('/key-pillars/ansh')}>Adv. Ansh Bharadwaj</a>
                </div>
              )}
            </div>

            <a className="nav-link px-5 h-full flex items-center uppercase text-sm cursor-pointer" onClick={() => navigate('/practice-areas')}>
              Practice Areas
            </a>

            {/* Careers Dropdown */}
            <div
              className="relative nav-link px-5 h-full flex items-center cursor-pointer"
              onMouseEnter={() => setCareersOpen(true)}
              onMouseLeave={() => setCareersOpen(false)}
            >
              <span className="flex items-center gap-1">
                Careers <ChevronDown className="w-4 h-4" />
              </span>

              {careersOpen && (
                <div className="dropdown">
                  <a onClick={() => navigate('/careers/jobs')}>Jobs</a>
                  <a onClick={() => navigate('/careers/internships')}>Internships</a>
                </div>
              )}
            </div>

            <a className="nav-link px-5 h-full flex items-center uppercase text-sm cursor-pointer" onClick={() => navigate('/contact')}>
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`lg:hidden ${mobileOpen ? 'open' : ''}`}>
          <div className="p-4 space-y-2">

            <button onClick={() => navigate('/')} className="block w-full text-left py-2">Home</button>

            {/* About the Firm Mobile */}
            <button
              className="w-full flex justify-between items-center py-2"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              <span>About the Firm</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileAboutOpen && (
              <div className="ml-4">
                <button onClick={() => navigate('/about-ab-a')} className="block w-full text-left py-2">
                  About AB & A
                </button>
                <button onClick={() => navigate('/guiding-principles')} className="block w-full text-left py-2">
                  Firm's Guiding Principles
                </button>
              </div>
            )}

            {/* Key Pillars Mobile */}
            <button
              className="w-full flex justify-between items-center py-2"
              onClick={() => setKeyPillarsOpen(!keyPillarsOpen)}
            >
              <span>Key Pillars</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${keyPillarsOpen ? 'rotate-180' : ''}`} />
            </button>

            {keyPillarsOpen && (
              <div className="ml-4">
                <button onClick={() => navigate('/key-pillars/abhay')} className="block w-full text-left py-2">
                  Late Shree Abhay Bharadwaj
                </button>
                <button onClick={() => navigate('/key-pillars/ansh')} className="block w-full text-left py-2">
                  Adv. Ansh Bharadwaj
                </button>
              </div>
            )}

            {/* Careers Mobile */}
            <button
              className="w-full flex justify-between items-center py-2"
              onClick={() => setCareersOpen(!careersOpen)}
            >
              <span>Careers</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${careersOpen ? 'rotate-180' : ''}`} />
            </button>

            {careersOpen && (
              <div className="ml-4">
                <button onClick={() => navigate('/careers/jobs')} className="block w-full text-left py-2">
                  Jobs
                </button>
                <button onClick={() => navigate('/careers/internships')} className="block w-full text-left py-2">
                  Internships
                </button>
              </div>
            )}

            <button onClick={() => navigate('/practice-areas')} className="block w-full text-left py-2">
              Practice Areas
            </button>

            <button onClick={() => navigate('/contact')} className="block w-full text-left py-2">
              Contact Us
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
//edit 