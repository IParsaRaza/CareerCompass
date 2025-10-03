import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Users, FlaskConical } from "lucide-react";

export default function WorkEnvironment() {
  const environmentAspects = [
    {
      icon: Microscope,
      title: "Laboratory Setting",
      description: "Primarily working on foot in well-equipped pharmaceutical laboratories"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Constant communication with scientists, pharmacists, and statisticians"
    },
    {
      icon: FlaskConical,
      title: "Precision Work",
      description: "Testing with chemicals while maintaining careful resource management"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Work Environment</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where I'll Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dynamic and collaborative laboratory environment focused on innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {environmentAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover-elevate"
                data-testid={`card-environment-${index}`}
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{aspect.title}</h3>
                <p className="text-sm text-muted-foreground">{aspect.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Typical Work Day</h3>
          <p className="text-muted-foreground leading-relaxed">
            The typical work environment is on foot in a laboratory setting. Pharmaceutical physicians constantly 
            communicate with other scientists, pharmacists, and statisticians as part of a collaborative research team. 
            The work involves testing with various chemicals and materials, requiring careful attention to avoid waste 
            and maintain the integrity of shared resources. The environment demands both mental focus and physical 
            stamina, combining the intellectual challenge of research with the practical demands of laboratory work.
          </p>
        </Card>
      </div>
    </section>
  );
}
