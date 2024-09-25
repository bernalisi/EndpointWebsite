import ContactProvider from "../components/layout/ContactProvider";
import HeroProvider from "../components/healthcare-providers/HeroProvider";
import SolutionProvider from "../components/healthcare-providers/SolutionProvider";
import KeyBenefits from "../components/healthcare-providers/KeyBenefits";
import Faq from "../components/healthcare-providers/Faq";
import JoinEndpoint from "../components/healthcare-providers/JoinEndpoint";
import { useRef } from "react";

export default function HealthcareProviders() {
  // Reference for the Platform section
  const providerRef = useRef(null);

  // Function to scroll to the provider section
  const scrollToNextSection = () => {
    if (providerRef.current) {
      providerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeroProvider scrollToNextSection={scrollToNextSection} />
      <div ref={providerRef}>
        <SolutionProvider />
      </div>
      <KeyBenefits />
      {/* <Faq /> */}
      <JoinEndpoint />
      <ContactProvider />
    </div>
  );
}
