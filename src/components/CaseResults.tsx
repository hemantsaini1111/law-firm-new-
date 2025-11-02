import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import legalDocuments from "@/assets/legal-documents.jpg";

const cases = [
  {
    category: "Corporate Law",
    title: "Complex Merger & Acquisition",
    result: "$45M Settlement",
    description: "Successfully negotiated favorable terms for client in multi-million dollar corporate merger.",
    badge: "Recent Win"
  },
  {
    category: "Civil Litigation",
    title: "Business Dispute Resolution",
    result: "$8.5M Verdict",
    description: "Won favorable verdict for client in complex commercial litigation case.",
    badge: "Court Victory"
  },
  {
    category: "Real Estate",
    title: "Commercial Property Dispute",
    result: "$12M Recovery",
    description: "Secured significant compensation for client in property rights dispute.",
    badge: "Settlement"
  },
  {
    category: "Employment Law",
    title: "Wrongful Termination Case",
    result: "$2.3M Award",
    description: "Obtained substantial damages for client in employment discrimination case.",
    badge: "Jury Award"
  }
];

const CaseResults = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <img src={legalDocuments} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block relative group cursor-pointer mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              Recent Case Successes
            </h2>
            <svg 
              className="absolute -bottom-2 left-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0,15 Q 150,5 300,15"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-accent"
              />
            </svg>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Here are some of our recent victories for clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {cases.map((caseItem, index) => (
            <Card key={index} className="border-border hover:shadow-elegant-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-background/80 backdrop-blur-sm group">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent hover:bg-accent/20 shadow-soft">
                  {caseItem.badge}
                </Badge>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{caseItem.category}</p>
                <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">{caseItem.title}</h3>
                <div className="text-3xl font-serif font-bold bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent mb-3">{caseItem.result}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            *Prior results do not guarantee a similar outcome. Each case is unique and must be evaluated on its own merits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseResults;
