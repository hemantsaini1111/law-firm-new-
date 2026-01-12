import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/svg/herobg8.svg";
import aboutSectionBg from "@/assets/svg/aboutsection3.svg";
import handshakeSvg from "@/assets/svg/workingareasbg.svg";
import workingAreasBg from "@/assets/svg/workingareasbg.svg";
import p1 from "@/assets/images/gallery.png";
import civil from "@/assets/images/Civil.jpeg";
import company from "@/assets/images/Company.jpeg";
import criminal from "@/assets/images/criminal.jpeg";
import family from "@/assets/images/Untitled design (3).png";
import motor from "@/assets/images/Motor.jpeg";
import inte from "@/assets/images/Inte.jpeg";
import founder from "@/assets/images/team-meeting.png";

const GalleryPage = () => {
  const navigate = useNavigate();
  const [backgroundPosition, setBackgroundPosition] = useState("center center");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToContact = () => {
    navigate("/contact");
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (window.innerWidth < 768) {
        setBackgroundPosition("right center");
      } else {
        setBackgroundPosition("center center");
      }
    };

    updateBackgroundPosition();
    window.addEventListener("resize", updateBackgroundPosition);

    return () => {
      window.removeEventListener("resize", updateBackgroundPosition);
    };
  }, []);

  // Gallery images - Fixed square size for mobile, refined Bento for desktop
  const galleryImages = [
    { id: 1, src: p1, alt: "Law Firm Excellence", category: "Featured Milestone", span: "aspect-square md:aspect-[2/1.1] md:col-span-2" },
    { id: 2, src: civil, alt: "Civil Law Practice", category: "Legal Practice", span: "aspect-square md:col-span-1" },
    { id: 3, src: company, alt: "Corporate Law", category: "Legal Practice", span: "aspect-square md:col-span-1" },
    { id: 4, src: criminal, alt: "Criminal Defense", category: "Success Stories", span: "aspect-square md:col-span-1" },
    { id: 5, src: family, alt: "Family Law Matters", category: "Family Law", span: "aspect-square md:col-span-1" },
    { id: 6, src: motor, alt: "Motor Vehicle Cases", category: "Practice Area", span: "aspect-square md:col-span-1" },
    { id: 7, src: inte, alt: "IP Rights", category: "Precision Law", span: "aspect-square md:col-span-1" },
    { id: 8, src: founder, alt: "Our Leadership", category: "Legacy & Vision", span: "aspect-square md:aspect-[4/1.2] md:col-span-4" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Synchronized with Practice Areas */}
      <section
        className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: backgroundPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/80 md:hidden z-0"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block relative group cursor-pointer mb-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-slide-up inline-block relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <span>Curated Legacy</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ width: "100%" }}
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 0,15 Q 150,5 300,15" stroke="currentColor" strokeWidth="3" fill="none" className="text-accent" />
                </svg>
              </h1>
            </div>
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed animate-slide-up max-w-3xl"
              style={{
                animationDelay: "0.1s",
                background:
                  "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                opacity: 0.85,
              }}
            >
              A visual narrative of our commitment to legal excellence, client advocacy, and the milestones that define our firm's legacy since 1980.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - Refined Small 4-Column Grid */}
      <section
        className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        {/* Gallery Background SVG Pattern */}

        {/* Brand Accents - Repositioned to Top-Left and Bottom-Right */}
        <div className="absolute top-[-20%] left-[5%] w-[80%] h-[80%] opacity-[0.3] pointer-events-none z-0">
          <img
            src={workingAreasBg}
            alt="Decoration"
            className="w-full h-full object-contain transform  scale-110"
          />
        </div>

        <div className="absolute bottom-[-15%] right-[-5%] w-[80%] h-[80%] opacity-[0.3] pointer-events-none z-0">
          <img
            src={aboutSectionBg}
            alt="Decoration"
            className="w-full h-full object-contain transform  scale-110"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Elegant Small Scale Grid - Now 2-column on mobile, 4-column on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-24">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`${image.span} group relative overflow-hidden rounded-2xl bg-white shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(101,67,33,0.3)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer border border-stone-200/50 animate-fade-in`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                    loading="lazy"
                  />

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>






      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-stone-950/98 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white/50 hover:text-white transition-all duration-300 flex items-center gap-3 group p-2"
            >
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">Dismiss</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:rotate-90 transition-all duration-500">
                <span className="text-xl font-light">✕</span>
              </div>
            </button>

            <div className="bg-stone-900 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative aspect-video sm:aspect-auto max-h-[75vh] overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Gallery"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-stone-900 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1px] bg-[#8B5A2B]"></span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B5A2B] font-semibold">
                      {galleryImages.find(img => img.src === selectedImage)?.category || "Firm Gallery"}
                    </span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-serif font-bold">
                    {galleryImages.find(img => img.src === selectedImage)?.alt || "Law Firm Excellence"}
                  </h3>
                </div>

                <button
                  className="px-8 py-3 bg-[#8B5A2B] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#A67B45] transition-colors duration-300 shadow-lg shadow-black/20"
                  onClick={() => setSelectedImage(null)}
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center z-0"
          style={{
            backgroundImage: `url(${handshakeSvg})`,
            backgroundSize: "70%",
            backgroundPosition: "30% center",
            opacity: 0.25,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block relative group cursor-pointer mb-4 md:mb-6">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(61,58,57) 0%, rgb(101,67,33) 25%, rgb(139,90,43) 50%, rgb(101,67,33) 75%, rgb(61,58,57) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Experience Our Legacy
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              These images represent our commitment to excellence, our team's dedication, and the trust our clients place in us. Join us in our mission to deliver justice.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
