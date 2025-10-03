import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onScrollToContent?: () => void;
}

export default function Hero({ onScrollToContent }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/stock_images/professional_pharmac_b97e2641.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Pharmaceutical Medicine
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          My journey into the science of healing through medication development and research
        </p>
        {onScrollToContent && (
          <Button
            variant="outline"
            size="lg"
            className="mt-12 backdrop-blur-sm bg-background/50"
            onClick={onScrollToContent}
            data-testid="button-scroll-content"
          >
            Explore My Career Path
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
      
      {onScrollToContent && (
        <button 
          onClick={onScrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </button>
      )}
    </section>
  );
}
