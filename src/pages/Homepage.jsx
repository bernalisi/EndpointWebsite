import { useRef } from "react";
import Hero from "../components/homepage/Hero";
import Resources from "../components/homepage/Resources";
import Stats from "../components/homepage/Stats";
import Platform from "../components/homepage/Platform";
import Contact from "../components/layout/Contact";

export default function Homepage() {
  // Reference for the Platform section
  const platformRef = useRef(null);

  // Function to scroll to the Platform section
  const scrollToNextSection = () => {
    if (platformRef.current) {
      platformRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen bg-black">
      <Hero scrollToNextSection={scrollToNextSection} />{" "}
      <div ref={platformRef}>
        <Platform />
      </div>
      <Stats />
      <Contact />
      <Resources />
    </div>
  );
}
