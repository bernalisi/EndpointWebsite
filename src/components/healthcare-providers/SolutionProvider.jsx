import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import syntetic_data from "../../assets/images/healthcare-providers/Syntetic data.svg"
import SectionSeparator from "../ui/SectionSeparatorWhiteBg";

export default function SolutionProvider() {
  const [currentCard, setCurrentCard] = useState(1);

  // JSON object with titles and descriptions for each card
  const useCaseNavigation = {
    1: {
      title: "Synthetic Data Creation",
      description:
        "Quickly create synthetic versions of your real-world data to allow researchers to assess the feasibility of their projects without exposing sensitive patient information. Synthetic data can also be used internally for studies such as patient journeys and treatment patterns.",
      url: syntetic_data
    },
    2: {
      title: "Visibility to Top Researchers",
      description:
        "Your datasets gain exposure to leading pharmaceutical companies and research institutions through Endpoint’s closed marketplace. Only verified license holders can explore and purchase synthetic data samples, ensuring your data is in the right hands.",
      url: ""
    },
    3: {
      title: "Test Feasibility",
      description:
        "Researchers experiment with synthetic data in a secure sandbox environment to test hypotheses, refine methodologies, and validate research approaches, all without compliance risks.",
      url: ""
    },
    4: {
      title: "Transition to Real Data",
      description:
        "Once synthetic data proves fit-for-purpose, researchers can request access to the real-world data. You maintain full control over how the real data is shared—whether for a limited time, specific purposes, or in collaboration with top-tier researchers.",
      url: ""
    },
    5: {
      title: "Secure Data Sharing",
      description:
        "Real-world data is shared in Endpoint’s clean rooms, ensuring all collaborations are privacy-protected and compliant with regulatory standards.",
      url: ""
    },
  };

  const handleInView = (key, inView) => {
    if (inView) setCurrentCard(key);
  };

  return (
    <div className="w-full h-auto lg:h-screen bg-white flex flex-col justify-start items-start px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
        <SectionSeparator TitleSection="OUR SOLUTIONS FOR HEALTHCARE PROVIDERS" />

      {/* Header Section */}
      <div className="w-full flex flex-col gap-6 justify-between items-start">
        <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
          Safeguard privacy, maximize data utilization
        </h3>
        <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed">
        Endpoint connects reseachers to a vast network of data providers, allowing them to explore fragmented health data from multiple sources— registries, hospitals, labs, pharmacies, and more—in a unified platform. Data providers gain visibility to top biopharma researchers, while retaining full control over who gets to access their data.
        </p>
      </div>

      <div className="w-full flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start mt-16 gap-10">
        {/* Left Side: Navigation Titles */}
        <div className="lg:w-1/4 sticky top-20">
          <ul className="space-y-4">
            {Object.keys(useCaseNavigation).map((key) => (
              <li
                key={key}
                className={`flex items-center ${
                  currentCard === Number(key)
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                <span
                  className={`mr-2 h-3 w-3 rounded-full ${
                    currentCard === Number(key) ? "bg-violet-900" : "bg-gray-300"
                  }`}
                ></span>
                {useCaseNavigation[key].title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Scrollable Cards with Scroll Indicator & Gradient */}
        <div className="relative lg:w-3/4 lg:h-[400px] overflow-y-auto snap-y snap-mandatory">
          {/* Gradient at the bottom for scroll hint */}
          <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"></div>
          {/* Scroll hint icon */}
          {currentCard === 1 && (
            <div className="absolute bottom-8 left-2/4 transform -translate-x-1/2">
              <div className="animate-bounce text-violet-900 text-[27px]">↓</div>
            </div>
          )}

          {Object.keys(useCaseNavigation).map((key) => {
            const { ref, inView } = useInView({
              threshold: 0.5, // Trigger when 50% of the card is in view
              triggerOnce: false,
            });

            useEffect(() => {
              handleInView(Number(key), inView);
            }, [inView, key]);

            return (
              <div
                key={key}
                ref={ref}
                className={`snap-start transition-opacity duration-300 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-[#ECE7F1] border border-violet-900 p-8 rounded-lg w-2/3 lg:w-[1050px] lg:h-[400px] min-h-[350px] mb-2">
                  <div className="flex flex-row justify-start items-center gap-10">
                    <img src={useCaseNavigation[key].url} alt="" className="h-12"/>
                    <h3 className="text-[40px] font-semibold text-black">
                      {useCaseNavigation[key].title.toUpperCase()}
                    </h3>
                  </div>
                  <p className="text-[24px] text-black mt-16">
                    {useCaseNavigation[key].description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
