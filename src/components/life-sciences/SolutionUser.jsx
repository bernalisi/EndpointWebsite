import { useState } from "react";
import SectionSeparator from "../../components/ui/SectionSeparatorWhiteBg";

export default function SolutionUser() {
  const [defaultSolution, setDefaultSolution] = useState(1);

  const solutionNavigation = {
    1: {
      title: "Data Discovery & Search",
      description:
        "Effortlessly search, filter, and save fit-for-purpose datasets from a wide network of data providers, using advanced filtering options to locate the most relevant data for your research.",
    },
    2: {
      title: "Data Quality Assessment",
      description:
        "Preview key quality metrics such as completeness, consistency, and relevance before purchasing datasets, ensuring high-quality data that meets your research standards.",
    },
    3: {
      title: "Synthetic Data Sandbox",
      description:
        "Test hypotheses and refine methodologies in a risk-free, compliant environment using synthetic data, allowing you to experiment and validate research approaches before committing to full datasets.",
    },
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-start items-start px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      <SectionSeparator TitleSection="OUR SOLUTIONS FOR LIFE SCIENCES" />

      {/* Header Section */}
      <div className="w-full flex flex-col gap-6 justify-between items-start">
        <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
          Discover, Compare, Access RWD Seamlessly
        </h3>
        <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Our platform empowers life sciences to explore over 200 real-world
          data sources globally, helping you answer key research questions
          across the product lifecycle with ease.
        </p>
      </div>

      {/* Navigation and Content Section */}
      <div className="w-full flex flex-col justify-start items-center mt-16 gap-10">
        {/* Navigation Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 border-b pb-4">
          {Object.keys(solutionNavigation).map((key) => (
            <button
              className={`w-full sm:w-auto py-2 text-lg text-center font-medium transition-all duration-200 ${
                defaultSolution === Number(key)
                  ? "text-violet-900 border-b-4 border-violet-900 p-3 bg-violet-200"
                  : "text-gray-600 border-b-4 border-transparent"
              } hover:text-violet-900 hover:border-violet-900`}
              key={key}
              onClick={() => setDefaultSolution(Number(key))}
            >
              {solutionNavigation[key].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full max-w-4xl p-6 bg-violet-50 shadow-md">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">
            {solutionNavigation[defaultSolution].description}
          </p>
        </div>
      </div>
    </div>
  );
}
