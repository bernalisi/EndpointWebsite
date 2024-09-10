import { useState } from "react";
import SectionSeparator from "../../components/ui/SectionSeparatorWhiteBg";
import UseCase from "../../components/life-sciences/UseCase";

export default function Why() {
  const [defaultUseCase, setDefaultUseCase] = useState(1);

  const useCaseNavigation = {
    1: { title: "HEOR & RWE" },
    2: { title: "Regulatory Affairs" },
    3: { title: "Market Access" },
    4: { title: "Pharmacovigilance" },
    5: { title: "Commercial" },
  };

  return (
    <div className="w-full h-[1000px] bg-white flex flex-col justify-start xl:justify-start items-start gap-4 px-4 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      <SectionSeparator TitleSection="EXPLORE OUR USE CASES" />

      <div className="flex flex-col xl:flex-row justify-start gap-10 w-full">
        {/* Navigation */}
        <div className="w-full xl:w-[15%] mt-10 flex-wrap xl:mt-20 flex flex-row xl:flex-col justify-start items-start gap-2 sm:gap-3">
          {Object.keys(useCaseNavigation).map((key) => (
            <button
              key={key}
              onClick={() => setDefaultUseCase(Number(key))}
              className={
                defaultUseCase === Number(key)
                  ? "border-l-4 border-violet-900 text-violet-900 py-2 px-2 sm:px-4 w-full text-sm sm:text-base"
                  : "border-l-4 hover:border-violet-900 hover:text-violet-900 py-2 px-2 sm:px-4 w-full text-sm sm:text-base"
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
