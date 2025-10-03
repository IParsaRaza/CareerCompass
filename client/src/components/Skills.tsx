import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Skills() {
  const hardSkills = [
    { name: "Dexterity", description: "Sure-handed control with sharp and important materials" }
  ];

  const softSkills = [
    { name: "Communication", description: "Effectively communicate with emotional and difficult clients" },
    { name: "Compassion", description: "Show empathy and understanding in patient care" },
    { name: "Detail Oriented", description: "Pay attention to critical details in research and formulation" },
    { name: "Leadership", description: "Guide teams in research and development projects" },
    { name: "Organization", description: "Manage complex projects and documentation" },
    { name: "Patience", description: "Handle long research processes and challenging situations" },
    { name: "Physical Stamina", description: "Endure long hours in laboratory settings" },
    { name: "Problem Solving", description: "Identify and solve complex medical challenges" }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Skills Required</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A combination of technical abilities and interpersonal qualities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary">Hard Skills</h3>
            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <div key={index} className="flex gap-3" data-testid={`skill-hard-${index}`}>
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex gap-3" data-testid={`skill-soft-${index}`}>
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
