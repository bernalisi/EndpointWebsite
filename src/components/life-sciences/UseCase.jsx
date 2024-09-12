import json from "../../../public/use_cases.json";
import { FaCheckCircle } from "react-icons/fa";

export default function UseCase({ defaultUseCase }) {
  const selectedUseCase = json.UseCases[defaultUseCase];

  // Capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full xl:w-[85%] h-[550px] xl:h-[800px] overflow-y-scroll flex flex-col justify-start items-start bg-white border-[1.5px] border-black mt-10 xl:mt-20 px-4 sm:px-7">
      {/* Use Case Title */}
      <p className="m-4 sm:m-7 px-3 sm:px-4 py-1 bg-black text-white rounded-full">
        Use Case
      </p>
      <div className="mx-4 sm:mx-7">
        <h4 className="text-[24px] sm:text-[36px] xl:text-[48px] font-semibold">
          {selectedUseCase.title}
        </h4>
        <h6 className="text-[18px] sm:text-[24px] xl:text-[32px] font-normal">
          {selectedUseCase.sub_title}
        </h6>
      </div>

      {/* Client Section */}
      <div className="m-4 sm:m-7 flex flex-col xl:flex-row justify-start items-start gap-4 xl:gap-10">
        <p className="text-violet-900 w-[130px] text-[16px] sm:text-[20px] font-medium min-w-[100px]">
          Client
        </p>
        <p className="text-[14px] w-full sm:text-[16px]">
          {selectedUseCase.client}
        </p>
      </div>

      {/* Challenge Section */}
      <div className="m-4 sm:m-7 flex flex-col xl:flex-row justify-start items-start gap-4 xl:gap-10">
        <p className="text-violet-900 w-[130px] text-[16px] sm:text-[20px] font-medium min-w-[100px]">
          Challenge
        </p>
        <p className="text-[14px] w-full sm:text-[16px]">
          {selectedUseCase.challenge.main_challenge}
        </p>
      </div>

      {/* Solution Section */}
      <div className="m-4 sm:m-7 flex flex-col xl:flex-row justify-start items-start gap-4 xl:gap-10">
        <p className="text-violet-900 w-[130px] text-[16px] sm:text-[20px] font-medium min-w-[100px]">
          Solution
        </p>
        <ul className="list-decimal pl-5">
          {Object.values(selectedUseCase.solution).map((solution, index) => (
            <li key={index} className="text-[14px] sm:text-[16px] mb-2">
              {solution}
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome Section */}
      <div className="m-4 sm:m-7 flex flex-col xl:flex-row justify-start items-start gap-4 xl:gap-10">
        <p className="text-violet-900 w-[130px] text-[16px] sm:text-[20px] font-medium min-w-[100px]">
          Outcome
        </p>
        <ul className="list-disc pl-5">
          {Object.values(selectedUseCase.outcome).map((outcome, index) => (
            <li key={index} className="text-[14px] sm:text-[16px] mb-2">
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="m-4 sm:m-7 flex flex-col xl:flex-row justify-start items-start gap-4 xl:gap-10">
        <p className="text-violet-900 w-[130px] text-[16px] sm:text-[20px] font-medium min-w-[100px] max-w-[100px]">
          Benefits
        </p>
        <ul className="pl-5">
          {Object.values(selectedUseCase.benefits).map((benefit, index) => (
            <li
              key={index}
              className="text-[14px] sm:text-[16px] mb-2 flex items-center pb-2"
            >
              <FaCheckCircle className="text-purple-600 mr-2 w-7 h-7" />{" "}
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <p className="m-4 sm:m-7 px-4 py-1 text-[16px] sm:text-[20px] xl:text-[24px] text-black rounded-full font-bold">
        Ready to execute more efficient and comprehensive RWE studies? Explore
        how Endpoint can help streamline your health economics research and
        drive faster, smarter outcomes. Contact us today for a demo!
      </p>
    </div>
  );
}
