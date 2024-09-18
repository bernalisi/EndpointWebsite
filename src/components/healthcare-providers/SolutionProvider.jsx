import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import syntetic_data from "../../assets/images/healthcare-providers/Syntetic data.svg";
import SectionSeparator from "../ui/SectionSeparatorWhiteBg";

export default function SolutionProvider() {
  const [currentCard, setCurrentCard] = useState(1);

  // JSON object with titles and descriptions for each card
  const useCaseNavigation = {
    1: {
      title: "Synthetic Data Creation",
      description:
        "Quickly create synthetic versions of your real-world data to allow researchers to assess the feasibility of their projects without exposing sensitive patient information. Synthetic data can also be used internally for studies such as patient journeys and treatment patterns.",
      url: syntetic_data,
    },
    2: {
      title: "Visibility to Top Researchers",
      description:
        "Your datasets gain exposure to leading pharmaceutical companies and research institutions through Endpoint’s closed marketplace. Only verified license holders can explore and purchase synthetic data samples, ensuring your data is in the right hands.",
      url: "",
    },
    3: {
      title: "Test Feasibility",
      description:
        "Researchers experiment with synthetic data in a secure sandbox environment to test hypotheses, refine methodologies, and validate research approaches, all without compliance risks.",
      url: "",
    },
    4: {
      title: "Transition to Real Data",
      description:
        "Once synthetic data proves fit-for-purpose, researchers can request access to the real-world data. You maintain full control over how the real data is shared—whether for a limited time, specific purposes, or in collaboration with top-tier researchers.",
      url: "",
    },
    5: {
      title: "Secure Data Sharing",
      description:
        "Real-world data is shared in Endpoint’s clean rooms, ensuring all collaborations are privacy-protected and compliant with regulatory standards.",
      url: "",
    },
  };

  const handleInView = (key, inView) => {
    if (inView) setCurrentCard(key);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const cardContainer = document.querySelector(".card-container"); // Ensure class is assigned

    if (element && cardContainer) {
      const yOffset = -50; // Adjust this for proper positioning within the container
      const y =
        element.getBoundingClientRect().top +
        cardContainer.scrollTop -
        cardContainer.getBoundingClientRect().top +
        yOffset;

      cardContainer.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-auto 2xl:h-auto bg-white flex flex-col justify-start items-start px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      <SectionSeparator TitleSection="OUR SOLUTIONS FOR HEALTHCARE PROVIDERS" />

      {/* Header Section */}
      <div className="w-full flex flex-col gap-6 justify-between items-start">
        <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
          Safeguard privacy, maximize data utilization
        </h3>
        <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Endpoint connects researchers to a vast network of data providers,
          allowing them to explore fragmented health data from multiple sources—
          registries, hospitals, labs, pharmacies, and more—in a unified
          platform. Data providers gain visibility to top biopharma researchers,
          while retaining full control over who gets to access their data.
        </p>
      </div>

      <div className="w-full flex flex-col justify-start items-center md:flex-row md:justify-start md:items-start xl:justify-start mt-8 sm:mt-16 gap-20">
        {/* Left Side: Navigation Titles */}
        <div className="flex-col hidden lg:flex md:w-[20%] lg:w-[20%] 2xl:w-[15%] sticky top-20">
          <ul className="">
            {Object.keys(useCaseNavigation).map((key) => (
              <button
                key={key}
                onClick={() => handleScroll(`card-${key}`)}
                className={`flex items-center ${
                  currentCard === Number(key)
                    ? "border-l-4 ld:text-[22px] border-violet-900 text-left text-violet-900 font-bold py-4 px-2 sm:px-4 w-full text-sm sm:text-base"
                    : "border-l-4 ld:text-[22px] hover:border-violet-900 text-left hover:text-violet-900 py-4 px-2 sm:px-4 w-full text-sm sm:text-base"
                }`}
              >
                {useCaseNavigation[key].title}
              </button>
            ))}
          </ul>
        </div>

        {/* Right Side: Scrollable Cards with Scroll Indicator & Gradient */}
        <div className="card-container ld:ml-20 relative flex flex-col items-center gap-10 lg:gap-20 max-lg:w-full lg:w-[70%] h-[460px] sm:h-[520px] overflow-y-auto snap-y snap-mandatory">
          {Object.keys(useCaseNavigation).map((key) => {
            const { ref, inView } = useInView({
              threshold: 0.6, // Trigger when 50% of the card is in view
              triggerOnce: false,
            });

            useEffect(() => {
              handleInView(Number(key), inView);
            }, [inView, key]);

            return (
              <div
                key={key}
                id={`card-${key}`} // Assigning ID for anchor scroll
                ref={ref}
                className={`snap-start transition-opacity duration-300 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-violet-100 border hover:border-violet-900 p-8 rounded-lg max-lg:w-[90%] lg:w-[85%] xl:w-[85%] 2xl:w-[80%] max-h-auto h-[450px] sm:h-[470px] md:h-[500px] lg:h-[500px] xl:h-[500px] mb-2 mx-6">
                  <div className="flex flex-row justify-start items-center gap-10">
                    <img
                      src={useCaseNavigation[key].url}
                      alt=""
                      className="h-12"
                    />
                    <h3 className="sm:text-[25px] md:text-[40px] font-semibold text-black">
                      {useCaseNavigation[key].title.toUpperCase()}
                    </h3>
                  </div>
                  <p className="sm:text-[15px] lg:text-[24px] text-black mt-16">
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
