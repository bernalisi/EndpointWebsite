import chevron_icon from "../../assets/images/ui/Chevron down black.svg";
import life_science_icon from "../../assets/images/homepage/LifeScience_icon_white.svg";
import provider_icon from "../../assets/images/homepage/Provider_icon_white.svg";
import line_icon from "../../assets/images/ui/Line_icon.svg";
import SectionSeparator from "../ui/SectionSeparator";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import violet_pattern from "../../assets/images/homepage/Violet pattern.png";
import blue_pattern from "../../assets/images/homepage/Blue pattern.png";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const slowAppear = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Slow animation duration
      ease: "easeInOut", // Smooth easing
    },
  },
};

const arrowIcon = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 16 16"
    style={{ width: "16px", height: "16px" }}
    xmlSpace="preserve"
  >
    <path
      className="st0"
      d="M15,1.6c0-0.6-0.4-1-1-1l-9,0c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1l6.6,0L0.1,14.2l1.4,1.4L13,4.1l0,6.6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1L15,1.6z"
      fill="white"
    />
  </svg>
);

export default function Platform() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [card2Ref, card2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full bg-[#000002] flex flex-col justify-center items-start gap-8 px-8 sm:px-12 lg:px-24 xl:px-32 ld:px-[420px] pt-12 sm:pt-18 lg:pt-22">
      <SectionSeparator TitleSection="OUR PLATFORM" />

      {/* Header Section */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        className="w-full flex flex-col gap-6"
      >
        <motion.h2
          variants={slowAppear}
          className="text-white text-[32px] lg:text-[50px] font-semibold mt-3 py-[12px] leading-tight"
        >
          Bridging the data gap between life sciences and healthcare
        </motion.h2>

        <motion.p
          variants={slowAppear}
          className="text-gray-100 text-lg sm:text-xl lg:text-2xl xl:text-2xl"
        >
          We’re creating a secure, interoperable platform to simplify how life
          sciences and healthcare providers share and analyze real-world data,
          optimize clinical trials, and run observational studies
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div className="w-full flex flex-col lg:flex-row justify-around gap-8 items-center mt-12 lg:mt-16 mb-14 lg:mb-20">
        {/* Life Science Card */}
        <motion.a
          ref={card2Ref}
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          className="relative w-full lg:w-[45%] min-h-[550px] py-20 cursor-pointer flex flex-col justify-between gap-6 shadow-lg transition-transform filter xl:saturate-[90%] hover:saturate-100 overflow-hidden group hover:shadow-xl w-inline-block border border-gray-100"
          variants={cardVariants}
          style={{ padding: "8px" }} // Add padding around the card for the framed effect
        >
          <div
            className="absolute inset-0 bg-cover bg-center rotate-180 transform transition-all duration-1000 ease-in-out xl:scale-150 brightness-50 group-hover:scale-100 group-hover:brightness-100 group-hover:saturate-100"
            style={{
              backgroundImage: `url(${blue_pattern})`,
              backgroundColor: "rgba(0, 123, 255, 0.2)",
            }}
          ></div>

          <div className="relative z-10 w-full h-full flex flex-col px-6">
            <div className="w-full flex justify-end items-center mb-6">
              <img
                src={life_science_icon}
                alt="Life Science icon"
                className="h-20 lg:h-28 pr-8 mt-12"
              />
            </div>
            <div className="flex-grow flex flex-col justify-start mt-4">
              <h3 className="text-white text-[28px] lg:text-[42px] font-bold">
                For Life Sciences
              </h3>
              <p className="text-white text-base lg:text-lg leading-relaxed">
                Speed up observational research, facilitate deeper insights into
                diseases, enhance clinical trials, improve safety surveillance,
                streamline regulatory submissions, boost commercialization
                strategies
              </p>
            </div>
          </div>
        </motion.a>

        {/* Providers Card */}
        <motion.a
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          className="relative w-full lg:w-[45%] min-h-[550px] py-20 cursor-pointer flex flex-col justify-between gap-6 shadow-lg transition-transform filter xl:saturate-[90%] hover:saturate-100 overflow-hidden group hover:shadow-xl w-inline-block border border-gray-100"
          variants={cardVariants}
          style={{ padding: "8px" }} // Add padding around the card for the framed effect
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-all duration-1000 ease-in-out rotate-180 xl:scale-150 brightness-50 group-hover:brightness-75 group-hover:scale-100 group-hover:saturate-100"
            style={{
              backgroundImage: `url(${violet_pattern})`,
              backgroundColor: "rgba(123, 63, 255, 0.2)",
            }}
          ></div>

          <div className="relative z-10 w-full h-full flex flex-col px-6">
            <div className="w-full flex justify-end items-center mb-6">
              <img
                src={provider_icon}
                alt="Provider icon"
                className="h-20 lg:h-28 pr-8 mt-12"
              />
            </div>
            <div className="flex-grow flex flex-col justify-start mt-4">
              <h3 className="text-white text-[28px] lg:text-[42px] font-bold">
                For Healthcare Providers
              </h3>
              <p className="text-white text-base lg:text-lg leading-relaxed">
                Your data can drive groundbreaking innovation in healthcare.
                Endpoint helps providers activate their data for both internal
                research and life sciences collaborations
              </p>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
