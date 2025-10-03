import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "Pharmaceutical Careers for Physicians",
      url: "https://www.physiciansidegigs.com/pharmaceutical-careers-for-physicians#:~:text=Clinical%20Development%20Team,-This%20is%20a&text=These%20physicians%20may%20be%20involved,collection%29%20are%20being%20conducted%20appropriately.",
      description: "Clinical development roles and opportunities"
    },
    {
      title: "Pharmacist Career Outlook - Bureau of Labor Statistics",
      url: "https://www.bls.gov/ooh/healthcare/pharmacists.htm#:~:text=Employment%20of%20pharmacists%20is%20projected,of%20pharmacists%20with%20similar%20occupations.",
      description: "Employment projections and statistics"
    },
    {
      title: "Rutgers Ernest Mario School of Pharmacy",
      url: "https://www.studentdoctor.net/schools-database/school/detail/RUTGERS-PHARM/rutgers-ernest-mario-school-of-pharmacy",
      description: "School information and programs"
    },
    {
      title: "Medical Licensing Costs",
      url: "https://www.withassured.com/blog/medical-licensing-costs#:~:text=State%2DSpecific%20Fees:%20Some%20states,Notary%20Fees",
      description: "State-specific licensing fees and requirements"
    },
    {
      title: "NJ Consumer Affairs - Registration FAQ",
      url: "https://www.njconsumeraffairs.gov/dcu/Pages/FAQregistration.aspx#:~:text=What%20is%20the%20application%20fee,will%20be%20provided%20to%20you.",
      description: "Application fees and registration process"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Additional Resources</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Helpful Links</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore these resources to learn more about pharmaceutical medicine careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid={`link-resource-${index}`}
            >
              <Card className="p-6 hover-elevate active-elevate-2 h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
