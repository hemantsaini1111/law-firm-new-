import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Principles() {
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

            {/* PRINCIPLES GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* CARD */}
              {[
                {
                  number: "01",
                  title: "Our Approach",
                  text:
                    "At AB & A, we aim to provide exceptional legal services tailored to meet the specific needs of each client. Our dedicated team of professionals combines deep legal expertise with strategic thinking to ensure justice and comprehensive legal support across Gujarat and beyond.",
                  quote: "Strategic, client-centered legal solutions",
                },
                {
                  number: "02",
                  title: "Our Mission",
                  text:
                    "To deliver high-quality legal services that achieve the best possible outcomes for our clients. We are dedicated to helping clients navigate complex legal systems with confidence, clarity, and efficiency, upholding the highest standards of professional excellence.",
                  quote: "Excellence in advocacy and client success",
                },
                {
                  number: "03",
                  title: "Our Values",
                  text:
                    "We believe in treating every client with respect, compassion, and understanding. Recognizing that each case and client is unique, we tailor our approach to meet specific needs while maintaining unwavering commitment to integrity, ethics, and the rule of law.",
                  quote: "Integrity, compassion, and personalized service",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group relative bg-white rounded-2xl border border-stone-200 p-8 flex flex-col
                  shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                  hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Decorative gradient ring */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>

                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-serif font-bold text-primary">
                        {item.number}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">
                      {item.title}
                    </h2>
                    <div className="w-12 h-1 bg-accent rounded-full"></div>
                  </div>

                  <div className="relative flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <div className="relative mt-8 pt-6 border-t border-stone-100">
                    <p className="text-sm text-muted-foreground italic">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* UNIFYING STATEMENT */}
            <div className="mt-16 bg-white rounded-2xl border border-stone-200 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-6">
                  A Legacy of Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  These principles are not just statements—they are the living foundation
                  of our practice, inherited from our founder&apos;s vision and continuously
                  reinforced through our daily work. They guide every interaction, strategy,
                  and decision we make on behalf of our clients.
                </p>
                <div className="mt-8 pt-6 border-t border-stone-200">
                  <p className="text-accent font-semibold tracking-wide">
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
