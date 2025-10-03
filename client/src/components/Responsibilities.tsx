import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FlaskConical, FileSearch, Pill } from "lucide-react";

export default function Responsibilities() {
  const responsibilities = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Ensure efficacy, quality, and safety of newly produced medications"
    },
    {
      icon: Pill,
      title: "Medicine Creation",
      description: "Create new medicine to efficiently deal with diseases, illnesses, disorders, or headaches"
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
      description: "Research and develop formulas, formulate new ways to make medicine using less materials"
    },
    {
      icon: FileSearch,
      title: "Guidelines & Production",
      description: "Create dosage guidelines and ensure efficient large-scale production"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Core Responsibilities</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I'll Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key responsibilities and duties in pharmaceutical medicine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate"
                data-testid={`card-responsibility-${index}`}
              >
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
