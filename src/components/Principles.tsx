import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import courtRoom from "@/assets/images/court-room.png";
import teamMeeting from "@/assets/images/team-meeting.png";
import firmBuilding from "@/assets/images/firm-building.png";

function Principles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="relative min-h-screen py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        <Navbar />

        {/* Subtle background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(180,140,90,0.08),transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(90,60,30,0.06),transparent_50%)]"></div>

        {/* Soft pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="mb-14 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight">
                Firm&apos;s Guiding Principles
              </h1>
              <div className="w-24 h-1 bg-accent rounded-full mx-auto"></div>
              <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
                The foundational values that guide our practice, shape our culture,
                and define our commitment to excellence in legal service.
              </p>
            </div>

            {/* PRINCIPLES GRID WITH IMAGES */}
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  number: "01",
                  title: "Our Approach",
                  text:
                    "At AB & A, we aim to provide exceptional legal services tailored to meet the specific needs of each client. Our dedicated team of professionals combines deep legal expertise with strategic thinking to ensure justice and comprehensive legal support across Gujarat and beyond.",
                  quote: "Strategic, client-centered legal solutions",
                  image: courtRoom,
                  imagePosition: "left",
                },
                {
                  number: "02",
                  title: "Our Mission",
                  text:
                    "To deliver high-quality legal services that achieve the best possible outcomes for our clients. We are dedicated to helping clients navigate complex legal systems with confidence, clarity, and efficiency, upholding the highest standards of professional excellence.",
                  quote: "Excellence in advocacy and client success",
                  image: teamMeeting,
                  imagePosition: "right",
                },
                {
                  number: "03",
                  title: "Our Values",
                  text:
                    "We believe in treating every client with respect, compassion, and understanding. Recognizing that each case and client is unique, we tailor our approach to meet specific needs while maintaining unwavering commitment to integrity, ethics, and the rule of law.",
                  quote: "Integrity, compassion, and personalized service",
                  image: firmBuilding,
                  imagePosition: "left",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className={`grid md:grid-cols-2 gap-6 lg:gap-8 items-center ${
                    item.imagePosition === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative rounded-none overflow-hidden shadow-2xl group ${
                      item.imagePosition === "right" ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C3317]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-serif font-bold text-primary">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={` p-6 md:p-8 flex flex-col  hover:shadow-xl transition-all duration-300 ${
                      item.imagePosition === "right" ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="relative mb-6">
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3">
                        {item.title}
                      </h2>
                      <div className="w-16 h-1 bg-accent rounded-full"></div>
                    </div>

                    <div className="relative flex-grow mb-6">
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        {item.text}
                      </p>
                    </div>

                    <div className="relative pt-6 border-t border-stone-100">
                      <p className="text-sm sm:text-base text-primary italic font-medium">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* UNIFYING STATEMENT */}
            <div className="mt-12 bg-white rounded-xl border border-stone-200 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-4">
                  A Legacy of Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  These principles are not just statements—they are the living foundation
                  of our practice, inherited from our founder&apos;s vision and continuously
                  reinforced through our daily work. They guide every interaction, strategy,
                  and decision we make on behalf of our clients.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <p className="text-accent font-semibold tracking-wide text-base">
                    Abhay Bharadwaj & Associates • Since 1980
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Principles;
