import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a consultation cost?",
    answer: "We offer free initial consultations for most practice areas. During this meeting, we'll discuss your legal needs, evaluate your case, and provide guidance on the best path forward. There's no obligation, and you'll gain valuable insights into your legal situation."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring any relevant documents related to your case, such as contracts, correspondence, court documents, or financial records. Also, prepare a list of questions you'd like to discuss. The more information you can provide, the better we can assess your situation."
  },
  {
    question: "How long will my case take?",
    answer: "The timeline varies significantly depending on the complexity of your case and the practice area. Some matters can be resolved in weeks, while others may take months or longer. During your consultation, we'll provide a realistic timeline based on similar cases we've handled."
  },
  {
    question: "What are your fees?",
    answer: "Our fee structure varies by practice area and case complexity. We offer various arrangements including hourly rates, flat fees, and contingency fees (where applicable). We're committed to transparency and will provide a clear fee agreement before beginning work on your case."
  },
  {
    question: "Will my case go to trial?",
    answer: "Most cases are resolved through negotiation or alternative dispute resolution without going to trial. However, we're fully prepared to litigate if it's in your best interest. We'll discuss all options and keep you informed at every stage of the process."
  },
  {
    question: "How will you communicate with me about my case?",
    answer: "We believe in keeping our clients informed. You'll have direct access to your attorney via phone, email, and scheduled meetings. We provide regular updates on case developments and respond promptly to your questions and concerns."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--accent)/0.03),transparent_60%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:border-accent/30 bg-background/80 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
