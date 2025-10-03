import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function PersonalMotivation() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Heart className="h-8 w-8 text-pink-500" />
          <h2 className="text-3xl md:text-4xl font-bold">Why I Chose This Path</h2>
        </div>
        
        <Card className="p-6 md:p-8">
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            I have chosen this career because since I was a kid I've always been intrigued and interested in medicine. 
            Whether it was me feeling bored and looking at the labels and researching the ingredients, or actually learning 
            herbology in class, I've always felt intrigued by the ingredients and how they will help people's growth and well being. 
            Like how does a body feel a little better by just eating a single pill? That has always been on my mind. When I'm 
            sleepless at night, I think about how medicine works and the science behind it. This curiosity drives my passion for 
            pharmaceutical medicine, where I can combine my fascination with ingredients, research, and helping people through 
            the development of life-changing medications.
          </p>
        </Card>
      </div>
    </section>
  );
}
