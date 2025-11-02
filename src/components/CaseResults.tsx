import { Gallery4, Gallery4Item } from "@/components/ui/gallery4";

// Law firm case studies data
const caseStudies: Gallery4Item[] = [
  {
    id: "merger-acquisition",
    title: "Complex Merger & Acquisition Deal",
    description:
      "Successfully negotiated favorable terms for our client in a multi-million dollar corporate merger, ensuring seamless transition and protecting client interests throughout the process.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "commercial-litigation",
    title: "Commercial Litigation Victory",
    description:
      "Won a significant verdict for our client in a complex commercial litigation case, securing substantial damages and setting an important precedent in contract law.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "real-estate-dispute",
    title: "Commercial Property Rights Dispute",
    description:
      "Secured significant compensation for our client in a high-stakes property rights dispute, navigating complex real estate regulations and zoning laws.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "employment-discrimination",
    title: "Employment Discrimination Case",
    description:
      "Obtained substantial damages for our client in an employment discrimination case, holding the employer accountable and securing justice for workplace harassment.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Protection",
    description:
      "Protected our client's intellectual property rights in a landmark case, establishing strong legal precedent and securing their competitive advantage in the market.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const CaseResults = () => {
  return (
    <section className="relative overflow-hidden">
      <Gallery4
        title="Recent Case Successes"
        description="Our track record speaks for itself. Here are some of our recent victories for clients across various practice areas."
        items={caseStudies}
      />
    </section>
  );
};

export default CaseResults;
