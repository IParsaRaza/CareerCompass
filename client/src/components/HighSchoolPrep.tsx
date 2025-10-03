import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Atom, Calculator } from "lucide-react";

export default function HighSchoolPrep() {
  const courses = {
    sciences: [
      "Biology Accelerated",
      "Chemistry (H) with lab",
      "Physics (H) with lab",
      "Molecular Biology Lab Techniques",
      "Anatomy and Physiology (H) DCC",
      "AP BIO DCC",
      "AP Environmental Science DCC",
      "Human Biology"
    ],
    mathematics: [
      "Pre-Calculus (H)",
      "Calculus (H) or Calc AB"
    ]
  };

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">High School Preparation</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building the Foundation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential courses to prepare for a career in pharmaceutical medicine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Atom className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Science Courses</h3>
            </div>
            <div className="space-y-3">
              {courses.sciences.map((course, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg hover-elevate bg-muted/40"
                  data-testid={`course-science-${index}`}
                >
                  <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{course}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mathematics Courses</h3>
            </div>
            <div className="space-y-3">
              {courses.mathematics.map((course, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg hover-elevate bg-muted/40"
                  data-testid={`course-math-${index}`}
                >
                  <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{course}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Pro Tip:</span> Focus on honors and 
                dual credit courses to build a strong academic foundation for medical school applications.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
