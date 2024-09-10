import SectionSeparator from "../../components/ui/SectionSeparatorWhiteBg";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function SolutionProvider() {
  const [defaultKey, setDefaultKey] = useState(1);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  // JSON object with titles and descriptions for each card
  const useCaseNavigation = {
    1: {
      title: "Synthetic Data Creation",
      description:
        "Quickly create synthetic versions of your real-world data to allow researchers to assess the feasibility of their projects without exposing sensitive patient information. Synthetic data can also be used internally for studies such as patient journeys and treatment patterns.",
    },
    2: {
      title: "Visibility to Top Researchers",
      description:
        "Your datasets gain exposure to leading pharmaceutical companies and research institutions through Endpoint’s closed marketplace. Only verified license holders can explore and purchase synthetic data samples, ensuring your data is in the right hands.",
    },
    3: {
      title: "Test Feasibility",
      description:
        "Researchers experiment with synthetic data in a secure sandbox environment to test hypotheses, refine methodologies, and validate research approaches, all without compliance risks.",
    },
    4: {
      title: "Transition to Real Data",
      description:
        "Once synthetic data proves fit-for-purpose, researchers can request access to the real-world data. You maintain full control over how the real data is shared—whether for a limited time, specific purposes, or in collaboration with top-tier researchers.",
    },
    5: {
      title: "Secure Data Sharing",
      description:
        "Real-world data is shared in Endpoint’s clean rooms, ensuring all collaborations are privacy-protected and compliant with regulatory standards.",
    },
  };

  // Track scroll direction
  const trackScrollDirection = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", trackScrollDirection);
    return () => {
      window.removeEventListener("scroll", trackScrollDirection);
    };
  }, []);

  const handleInView = (key, inView) => {
    if (inView) {
      setDefaultKey(key); // Only set state when the card is in view
    }
  };

  return (
    <div className="w-full h-auto bg-white flex flex-col justify-start items-start px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      <SectionSeparator TitleSection="OUR SOLUTIONS FOR HEALTHCARE PROVIDERS" />

      {/* Title & Paragraph */}
      <div className="w-full mb-8 text-start">
        <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] mt-3">
          The largest ecosystem of RWD providers
        </h2>
        <p className="text-black text-base sm:text-lg lg:text-xl xl:text-[24px] mt-3">
          Our platform enables life sciences to search for and explore the most
          comprehensive collection of RWD assets from leading healthcare
          organizations worldwide.
        </p>
      </div>

      <div className="flex flex-col w-full gap-8 mt-20">
        {/* Timeline structure */}
        <div className="relative flex flex-col justify-center items-center w-full">
          {/* Vertical Line */}
          <div className="absolute w-1 h-full bg-gray-300 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Cards */}
          {Object.keys(useCaseNavigation).map((key, index) => {
            const { ref, inView } = useInView({
              threshold: 0.5, // Trigger when 50% of the card is in view
              rootMargin:
                scrollDirection === "down" ? "0px 0px -30%" : "-30% 0px 0px", // Adjust root margin based on scroll direction
              triggerOnce: false, // Keep tracking changes in view
            });

            // Use `useEffect` to handle state updates only when the view changes
            useEffect(() => {
              handleInView(Number(key), inView);
            }, [inView, key]);

            return (
              <div key={index} className="relative w-full flex justify-center">
                {/* White background card to cover the line for inactive cards */}
                <div
                  className={`absolute bg-white p-4 sm:p-8 shadow-lg rounded-lg w-full transition-all duration-300 min-h-[200px] max-w-[350px] sm:max-w-[500px] lg:max-w-[700px] lg:min-h-[350px] ${
                    defaultKey === Number(key)
                      ? "scale 100 lg:scale-110"
                      : "scale-90"
                  }`}
                ></div>

                <div
                  ref={ref}
                  key={key}
                  className={`relative flex flex-col items-center z-10 mb-12 transition-all duration-300 ${
                    defaultKey === Number(key)
                      ? "scale-100 lg:scale-110 opacity-100 lg:border-l-8 lg:border-violet-900"
                      : "scale-90 opacity-50"
                  }`}
                >
                  <div className="w-full flex justify-center">
                    <div className="bg-white p-4 sm:p-8 shadow-lg rounded-lg text-center min-h-[200px] lg:min-h-[350px] flex flex-col justify-center max-w-[350px] sm:max-w-[500px] lg:max-w-[700px]">
                      <h3 className="text-xl sm:text-3xl font-bold text-violet-900 mb-4">
                        {useCaseNavigation[key].title}
                      </h3>
                      <p className="text-sm sm:text-lg text-gray-700">
                        {useCaseNavigation[key].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
