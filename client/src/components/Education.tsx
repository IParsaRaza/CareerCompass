import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, DollarSign } from "lucide-react";

export default function Education() {
  const educationSteps = [
    {
      degree: "Bachelor's Degree",
      duration: "4 years",
      cost: "$45,475+",
      description: "Foundation in sciences, no specific major required for medical school"
    },
    {
      degree: "Medical Degree (M.D. or D.O.)",
      duration: "6 years",
      cost: "$105,168+",
      description: "Medical school education specific to pharmaceutical medicine"
    },
    {
      degree: "Internship & Residency",
      duration: "3-9 years",
      cost: "Varies",
      description: "Hands-on training in chosen specialty area"
    },
    {
      degree: "Certifications & License",
      duration: "Ongoing",
      cost: "$845",
      description: "Professional certifications ($805) and state license ($40)"
    }
  ];

  const totalCost = "$151,488+";

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Educational Path</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Required Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The comprehensive educational journey to become a pharmaceutical physician
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {educationSteps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{step.degree}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    <span className="text-sm font-mono text-primary font-semibold">{step.cost}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <DollarSign className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Investment</p>
                <p className="text-3xl font-bold font-mono">{totalCost}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A significant investment in education that opens doors to a rewarding career in pharmaceutical medicine
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
