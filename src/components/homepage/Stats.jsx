import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import line_icon from "../../assets/images/ui/Line_icon_white.svg";
import SectionSeparator from "../ui/SectionSeparator";

// Custom Hook for Counting Up Animation when the section is in view
function useCountUp(endValue, duration = 0, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Only start counting when the section is in view

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const increment = Math.min((progress / duration) * endValue, endValue); // Progress to the endValue smoothly
      setCount(Math.floor(increment));

      if (increment < endValue) {
        requestAnimationFrame(step); // Keep the animation going
      }
    };

    requestAnimationFrame(step);
  }, [endValue, duration, startCounting]);

  return count;
}

export default function Stats() {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when in view
    threshold: 0.5, // Start the animation when 50% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      setStartCounting(true); // Start counting when the section is in view
    }
  }, [inView]);

  const Statistics = [
    { type: "Data Providers", data: 200 },
    { type: "Patients", data: 70000000 },
    { type: "Countries", data: 40 },
  ];

  return (
    <div
      ref={ref}
      className="w-full bg-black ld:h-screen flex flex-col justify-center ld:justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:pt-20 ld:pb-0 ld:pt-20 pb-20"
    >
      <SectionSeparator TitleSection="UNLOCKING DISCOVERY" />

      <div className="w-full flex flex-col gap-10 justify-between items-start">
        {/* Header Section */}
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold mt-3 py-[10px]">
          Global, High-Quality RWD Ecosystem
        </h2>

        {/* Content of section */}
        <div className="flex flex-col gap-10 md:gap-12 items-start">
          {Statistics.map((s) => (
            <div
              key={s.type}
              className="flex flex-col justify-center items-start md:items-start gap-1 ld:gap-6 text-center md:text-left"
            >
              {/* Using custom hook to animate the numbers */}
              <p className="text-white ld:text-[130px] text-[48px] md:text-[70px] lg:text-[85px] font-medium">
                {useCountUp(s.data, 1000, startCounting).toLocaleString()}+
              </p>
              <img src={line_icon} alt="line icon" className="h-1 my-2" />
              <h6 className="text-white text-xl md:text-2xl font-extralight">
                {s.type}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
