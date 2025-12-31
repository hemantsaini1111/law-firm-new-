import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Abhay() {
  return (
    <>
    <section
      className="relative min-h-screen py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#FFF8E7" }}
    >
      <Navbar/>
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(180,140,90,0.08),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(90,60,30,0.06),transparent_50%)]"></div>

      {/* Soft pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>

      <div className="relative container mx-auto px-4">
        {/* PROFILE CARD */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT: FULL IMAGE */}
            <div className="relative h-[320px] max-sm:h-[500px] md:h-[700px]">
              <img
                src="/a1.png"
                alt="Late Shri Abhay Bharadwaj"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: INFO */}
            <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-between">
              {/* Header */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                  Late Shri Abhay Bharadwaj
                </h1>

                <p className="mt-2 uppercase tracking-widest text-sm text-accent font-semibold">
                  Founder & Senior Advocate
                </p>

                <div className="w-16 h-1 bg-accent rounded-full my-6"></div>
              </div>

              {/* Summary Text */}
              <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="bg-stone-50 border-l-4 border-accent pl-4 py-3 rounded-md">
                  Late Shri Abhay Bharadwaj was a distinguished legal luminary,
                  jurist, and former Member of the Law Commission of India. He
                  founded the firm in 1980 with a vision rooted in integrity,
                  scholarship, and unwavering commitment to justice.
                </p>

                <p>
                  His values, principles, and dedication to the rule of law
                  continue to guide the firm’s work, culture, and professional
                  ethos even today.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-10 pt-6 border-t border-stone-200">
                <p className="text-sm text-muted-foreground italic">
                  “His legacy lives on through the pursuit of justice,
                  excellence, and ethical legal practice.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BIOGRAPHY SECTION */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-24">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-serif font-bold text-primary mb-8">
            Late Shree Abhaykumar Bharadwaj
          </h2>

          <div className="space-y-6 text-sm sm:text-base md:text-md text-muted-foreground leading-tighter">
            <p>
              Abhay Ganpatram Bharadwaj was an accidental advocate who went on to
              master the art of advocacy through perseverance, courage, and
              intellectual rigor.
            
              Born in Uganda and forced to flee with his family to India during
              the Civil War, Shri Abhay Bharadwaj entered the legal profession
              out of necessity—and transformed that necessity into an
              extraordinary legacy.
            </p>

            <p>
              Beginning his practice in 1980 in the lower courts of Rajkot, he
              built a career spanning over four decades. More than 250 lawyers
              trained under him, many of whom today serve as District Judges,
              High Court and Supreme Court advocates, Public Prosecutors, and
              respected trial court practitioners.
            
              Shri Bharadwaj’s pro-bono representation of the 69 accused in the
              Gulbarg Society case and his role in landmark prosecutions such as
              the Shrikant Madi triple murder case stand as defining moments in
              Gujarat’s legal history.
            </p>

            <p>
              His appointment to the 21st Law Commission of India in 2016 marked
              a historic recognition of his legal acumen. He contributed to
              major legislations, including the Muslim Women (Protection of
              Rights on Marriage) Act, 2019, and later served as a Member of
              Parliament in the Rajya Sabha.
            
              On 1st December 2020, Shri Abhay Bharadwaj passed away due to
              Covid-19, bringing to a close an era of unmatched advocacy in the
              lower courts of Gujarat. He remains an enduring inspiration for
              thousands of lawyers.
            </p>

            <p>
              His legacy continues through his son Ansh and daughter Amruta,
              who now lead Abhay Bharadwaj & Associates—a team of 45 committed
              lawyers dedicated to justice and public service.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
}
