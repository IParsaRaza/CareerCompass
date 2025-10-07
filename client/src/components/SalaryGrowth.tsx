import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";

export default function SalaryGrowth() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Career Outlook</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Salary & Growth</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Promising financial prospects and career advancement opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-8 text-center hover-elevate" data-testid="card-salary-average">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">Average Salary</p>
            <p className="text-4xl font-bold font-mono text-primary">$128,423</p>
            <p className="text-xs text-muted-foreground mt-2">per year</p>
          </Card>

          <Card className="p-8 text-center hover-elevate" data-testid="card-salary-range">
            <BarChart3 className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">Salary Range</p>
            <p className="text-2xl font-bold font-mono">$25,500 - $295,000</p>
            <p className="text-xs text-muted-foreground mt-2">based on experience & specialty</p>
          </Card>

          <Card className="p-8 text-center hover-elevate" data-testid="card-growth">
            <TrendingUp className="h-10 w-10 text-chart-2 mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">Projected Growth</p>
            <p className="text-4xl font-bold font-mono text-chart-2">19%</p>
            <p className="text-xs text-muted-foreground mt-2">over next decade</p>
          </Card>
        </div>

        <Card className="p-6 md:p-8 bg-chart-2/5 border-chart-2/20">
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-chart-2 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Excellent Career Outlook</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The pharmaceutical medicine field is experiencing rapid growth due to increasing demand for new medications, 
                aging populations, and ongoing medical research advancements. This 19% growth rate is significantly higher 
                than the average for most professions, indicating strong job placements and opportunities for advancement.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
