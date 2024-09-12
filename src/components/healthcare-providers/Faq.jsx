import { useState } from "react";
import SectionSeparator from "../ui/SectionSeparatorWhiteBg";
import faqsData from "../../../public/faq.json";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full pt-10 bg-white flex flex-col justify-center items-start gap-4 px-14 pb-20">
      <SectionSeparator TitleSection="FAQS" />

      {/* Title */}
      <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
        Frequently Asked Questions
      </h3>

      {/* FAQ Table */}
      <div className="w-full mt-5 border border-gray-200 rounded-lg shadow-md">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-none"
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-medium text-black">{faq.question}</h3>
              <span className="text-black font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {/* Answer Row */}
            {activeIndex === index && (
              <div className="p-4 bg-violet-100 transition-all duration-300 ease-in-out">
                <p className="text-base">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
