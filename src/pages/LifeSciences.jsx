import Contact from "../components/layout/Contact";
import { useRef } from "react";
import HeroUser from "../components/life-sciences/HeroUser";
import SolutionUser from "../components/life-sciences/SolutionUser";
import UseCases from "../components/life-sciences/UseCases";

export default function LifeSciences() {
  // Reference for the Platform section
  const lifeSolutionRef = useRef(null);

  // Function to scroll to the Platform section
  const scrollToNextSection = () => {
    if (lifeSolutionRef.current) {
      lifeSolutionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <HeroUser scrollToNextSection={scrollToNextSection} />
      <div ref={lifeSolutionRef}>
        <SolutionUser />
      </div>
      <UseCases />
      <Contact />
    </div>
  );
}
