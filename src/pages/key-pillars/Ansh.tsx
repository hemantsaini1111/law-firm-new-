import React, { useEffect } from "react";
import ansh from "@/assets/images/p2.jpeg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Ansh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="min-h-screen py-16 sm:py-20 md:py-28"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        <Navbar />
        <div className="container mx-auto px-4 mt-12 sm:mt-0">
          {/* PROFILE CARD */}
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* LEFT: FULL IMAGE */}
              <div className="relative h-[400px] sm:h-[420px] md:h-auto">
                <img
                  src={ansh} // replace with real image
                  alt="Ansh Bharadwaj"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* RIGHT: INFO */}
              <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                  Adv. Ansh Bharadwaj
                </h1>

                <div className="w-12 sm:w-14 h-0.5 sm:h-1 bg-accent rounded-full my-3 sm:my-4"></div>

                <p className="uppercase tracking-widest text-[10px] sm:text-sm text-accent font-semibold mb-4 sm:mb-6">
                  Trial Court Advocate
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-3 sm:gap-x-8 text-[11px] sm:text-base text-muted-foreground">
                  <div>
                    <span className="block font-semibold text-stone-700">
                      Email
                    </span>
                    <a
                      href="mailto:jamesgarcia@igual.com"
                      className="hover:text-primary transition-colors truncate block"
                    >
                      ansh@aba.com
                    </a>
                  </div>

                  <div>
                    <span className="block font-semibold text-stone-700">
                      Phone
                    </span>
                    <a
                      href="tel:+919727473730"
                      className="hover:text-primary transition-colors"
                    >
                      9727473730
                    </a>
                  </div>

                  <div>
                    <span className="block font-semibold text-stone-700">
                      Website
                    </span>
                    <a
                      href="https://abaassociates.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      abaassociates.com
                    </a>
                  </div>

                  <div>
                    <span className="block font-semibold text-stone-700">
                      Experience
                    </span>
                    <span>
                      More Than <strong>5+ Years</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-serif font-bold text-primary mb-6">
              Adv. Ansh Bharadwaj
            </h2>

            <div className="space-y-5 text-sm sm:text-base md:text-md text-muted-foreground leading-relaxed">
              <p>
                Ansh Bharadwaj is an advocate of the Original Side of
                Jurisdiction. He currently heads Abhay Bharadwaj & Associates, a
                40-year-old law firm based out of Rajkot, having its work spread
                across the trial courts of Gujarat, specifically in the region of
                SaurashtraKutch. He is the son of Late Shri Abhay Bharadwaj.
              </p>

              <p>
                After obtaining a BBA LLB (Hons.) degree from O. P. Jindal Global
                University, Ansh did a one-year Post Graduate Degree programme in
                Leadership, Politics, and Governance from the prestigious Indian
                Institute of Democratic Leadership, a sister concern of Rashtriya
                Swayamsevak Sangh run Rambhau Mhalgi Prabodhini.
              </p>

              <p>
                Thereafter, he closely worked with BJP's National General
                Secretary Shri Tarun Chugh as well as ICCR Chairman and Rajya
                Sabha MP Shri Vinay Sahasrabuddhe in Delhi for a year before
                returning to Rajkot.
              </p>

              <p>
                Upon his return, Ansh straight away joined Shri Abhay Bharadwaj in
                the office and began his practice in the trial courts of Rajkot.
                He assisted his father in the Gulbarg Society Massacre Case of the
                2002 Gujarat Riots, wherein Shri Abhay Bharadwaj represented all
                the 60-plus accused pro bono.
              </p>

              <p>
                After the sudden demise of his father, Ansh took over the reins of
                the much-coveted law firm. Lately, he has been involved in many
                high-profile cases, such as the Liliya double murder case, the
                Rajmoti Industries custodial death case, the sitting MLA Kandhal
                Jadeja’s just concluded escape from judicial custody case, amongst
                others.
              </p>
              <p>
                Ansh is also the legal representative of former Gujarat Chief
                Minister Shri Vijaybhai Rupani and currently represents Shri
                Rupani in the criminal defamation case filed by him against 4
                Congress Leaders. <br />
                He also currently serves as the Convenor of Rajkot City BJP Legal
                Cell.
              </p>
              <p>
                Today, Ansh and his team possibly boast the largest conglomeration
                of trial court lawyers in Gujarat. Abhay Bharadwaj & Associates is
                a strong group of 50+ lawyers, committed to serving society.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}
