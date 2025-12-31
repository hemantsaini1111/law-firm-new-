import React from "react";

export default function Abhaypage() {
  return (
    <section
      className="min-h-screen py-16 sm:py-20 md:py-28 bg-background"
      style={{ backgroundColor: "#FFF8E7" }}
    >
      <div className="container mx-auto px-4">
        {/* PROFILE CARD */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT: IMAGE */}
            <div className="flex items-center justify-center bg-stone-100 p-8">
              <img
                src="/images/james-garcia.jpg" // replace with actual image path
                alt="James Garcia"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* RIGHT: INFO */}
            <div className="p-8 sm:p-10 md:p-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                James Garcia
              </h1>

              <p className="uppercase tracking-wider text-sm text-accent font-semibold mb-6">
                Real Estate Law
              </p>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <div>
                  <span className="font-semibold text-stone-700">Email:</span>{" "}
                  <a
                    href="mailto:jamesgarcia@igual.com"
                    className="hover:text-primary transition-colors"
                  >
                    jamesgarcia@igual.com
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-stone-700">Phone:</span>{" "}
                  <a
                    href="tel:+231879586487"
                    className="hover:text-primary transition-colors"
                  >
                    +231 879 586 487
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-stone-700">Website:</span>{" "}
                  <a
                    href="https://zozothemes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    https://zozothemes.com/
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-stone-700">Experience:</span>{" "}
                  More Than <strong>5+ Years</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BIOGRAPHY SECTION */}
        <div className="max-w-4xl mx-auto mt-14 sm:mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
            Biography & Introduction
          </h2>

          <div className="space-y-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Collaboration with external experts, such as forensic analysts,
              financial consultants, and medical professionals, strengthens
              legal cases and provides valuable insights. Law firms that
              prioritize teamwork create a positive work environment, reducing
              stress and preventing burnout among attorneys.
            </p>

            <p>
              A well-structured legal team ensures that each member plays a
              specific role, contributing to the firm’s overall success.
              Ethical teamwork upholds integrity, confidentiality, and
              professional standards, ensuring that clients receive honest and
              diligent representation.
            </p>

            <p>
              Law firms use technology and case management software to streamline
              workflows, improve organization, and enhance collaboration.
              Team-building activities and professional development programs
              help strengthen relationships among attorneys and staff, fostering
              a sense of unity and commitment.
            </p>

            <p>
              Effective teamwork enables attorneys to handle heavy caseloads
              efficiently, ensuring that clients receive timely and
              high-quality legal services. A collaborative approach leads to
              better problem-solving, as multiple legal minds working together
              can anticipate challenges and find creative solutions.
            </p>

            <p>
              Law firms that encourage teamwork are better positioned to adapt
              to changes in the legal industry, staying competitive in a rapidly
              evolving landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
