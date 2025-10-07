import { useRef } from "react";
import Hero from "@/components/Hero";
import PersonalMotivation from "@/components/PersonalMotivation";
import Responsibilities from "@/components/Responsibilities";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import SalaryGrowth from "@/components/SalaryGrowth";
import WorkEnvironment from "@/components/WorkEnvironment";
import HighSchoolPrep from "@/components/HighSchoolPrep";
import Resources from "@/components/Resources";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const motivationRef = useRef<HTMLDivElement>(null);
  const responsibilitiesRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      motivation: motivationRef,
      responsibilities: responsibilitiesRef,
      education: educationRef,
      skills: skillsRef,
      career: careerRef,
    };

    const targetRef = refs[section];
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={scrollToSection} />
      <Hero onScrollToContent={() => scrollToSection('motivation')} />
      <div ref={motivationRef}>
        <PersonalMotivation />
      </div>
      <div ref={responsibilitiesRef}>
        <Responsibilities />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={careerRef}>
        <SalaryGrowth />
        <WorkEnvironment />
        <HighSchoolPrep />
      </div>
      <Resources />
      <Footer />
    </div>
  );
}
