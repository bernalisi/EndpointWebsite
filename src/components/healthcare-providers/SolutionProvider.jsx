import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SolutionProvider() {
  const [currentCard, setCurrentCard] = useState(1);

  // JSON object with titles and descriptions for each card
  const useCaseNavigation = {
    1: {
      title: "Synthetic Data Creation",
      description:
        "Quickly create synthetic versions of your real-world data to allow researchers to assess the feasibility of their projects.",
    },
    2: {
      title: "Visibility to Top Researchers",
      description:
        "Your datasets gain exposure to leading pharmaceutical companies and research institutions through Endpoint’s closed marketplace.",
    },
    3: {
      title: "Test Feasibility",
      description:
        "Researchers experiment with synthetic data in a secure sandbox environment to test hypotheses and validate research approaches.",
    },
    4: {
      title: "Transition to Real Data",
      description:
        "Once synthetic data proves fit-for-purpose, researchers can request access to the real-world data.",
    },
    5: {
      title: "Secure Data Sharing",
      description:
        "Real-world data is shared in Endpoint’s clean rooms, ensuring all collaborations are privacy-protected.",
    },
  };

  const handleInView = (key, inView) => {
    if (inView) setCurrentCard(key);
  };

  return (
    <div className="w-full h-auto lg:h-screen bg-white flex flex-col lg:flex-row px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      {/* Left Side: Navigation Titles */}
      <div className="lg:w-1/4 sticky top-20">
        <ul className="space-y-4">
          {Object.keys(useCaseNavigation).map((key) => (
            <li
              key={key}
              className={`flex items-center ${
                currentCard === Number(key)
                  ? "text-violet-900 font-bold"
                  : "text-gray-400"
              }`}
            >
              <span
                className={`mr-2 h-4 w-4 rounded-full ${
                  currentCard === Number(key) ? "bg-violet-900" : "bg-gray-300"
                }`}
              ></span>
              {useCaseNavigation[key].title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Scrollable Cards with Scroll Indicator & Gradient */}
      <div className="relative lg:w-3/4 lg:h-[360px] overflow-y-auto snap-y snap-mandatory">
        {/* Gradient at the bottom for scroll hint */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"></div>
        {/* Scroll hint icon */}
        {currentCard === 1 && (
          <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2">
            <div className="animate-bounce text-gray-400 text-xl">↓</div>
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
              <div className="bg-white border shadow-lg p-8 rounded-lg w-2/3 min-h-[350px] mb-2">
                <h3 className="text-2xl font-bold text-violet-900">
                  {useCaseNavigation[key].title}
                </h3>
                <p className="text-lg text-gray-700 mt-4">
                  {useCaseNavigation[key].description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
