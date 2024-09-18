import { useState } from "react";
import SectionSeparator from "../../components/ui/SectionSeparatorWhiteBg";
import UseCase from "../../components/life-sciences/UseCase";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Why() {
  const [defaultUseCase, setDefaultUseCase] = useState(1);

  const useCaseNavigation = {
    1: { title: "Regulatory Affairs" },
    2: { title: "HEOR & RWE" },
    3: { title: "Market Access" },
    4: { title: "Pharmacovigilance" },
    5: { title: "Commercial" },
  };

  const maxUseCases = Object.keys(useCaseNavigation).length;

  const handleNext = () => {
    setDefaultUseCase((prev) => (prev === maxUseCases ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setDefaultUseCase((prev) => (prev === 1 ? maxUseCases : prev - 1));
  };

  return (
    <div className="w-full h-auto pb-20 ld:pb-10 ld:h-[2100px] bg-white flex flex-col justify-start xl:justify-start items-start gap-4 px-4 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      <SectionSeparator TitleSection="EXPLORE OUR USE CASES" />

      <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
        Explore how Endpoint can assist your team make medical breakthroughs
      </h3>
      <p className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl mb-8">
        Our platform empowers life sciences to explore and search through more
        than 200 real-world data sources globally, helping you understand which
        datasets can answer research questions across the product lifecycle.
      </p>

      {/* Chevron Navigation for Small Screens */}
      <div className="w-full flex justify-between items-center xl:hidden">
        <button onClick={handlePrev}>
          <LuChevronLeft size={24} />
        </button>
        <span className="text-lg font-semibold">
          {useCaseNavigation[defaultUseCase].title}
        </span>
        <button onClick={handleNext}>
          <LuChevronRight size={24} />
        </button>
      </div>

      <div className="flex flex-col xl:flex-row justify-start gap-10 w-full">
        {/* Navigation - Hidden on small screens */}
        <div className="w-full hidden xl:flex xl:w-[15%] mt-10 flex-wrap xl:mt-20 flex-row xl:flex-col justify-start text-left items-start ">
          {Object.keys(useCaseNavigation).map((key) => (
            <button
              key={key}
              onClick={() => setDefaultUseCase(Number(key))}
              className={
                defaultUseCase === Number(key)
                  ? "border-l-4 xl:border-b-0 ld:text-[20px] border-violet-900 text-left text-violet-900 py-4 px-2 sm:px-4 w-full text-sm sm:text-base"
                  : "border-l-4 xl:border-b-0 ld:text-[20px] hover:border-violet-900 text-left hover:text-violet-900 py-4 px-2 sm:px-4 w-full text-sm sm:text-base"
              }
            >
              {useCaseNavigation[key].title}
            </button>
          ))}
        </div>

        {/* Use Case Content */}
        <UseCase defaultUseCase={defaultUseCase} />
      </div>
    </div>
  );
}
