import chevron_icon from "../../assets/images/ui/Chevron down black.svg";
import life_science_icon from "../../assets/images/homepage/LifeScience_icon.svg";
import provider_icon from "../../assets/images/homepage/Provider_icon.svg";
import line_icon from "../../assets/images/ui/Line_icon.svg";
import SectionSeparator from "../ui/SectionSeparator";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import violet_pattern from "../../assets/images/homepage/Violet pattern.png";
import blue_pattern from "../../assets/images/homepage/Blue pattern.png";

const CardVariants = {
  initial: { opacity: 0 },
  inView: {
    filter: "grayscale(0%)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  hover: {
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
  },
};

export default function Platform() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#1a1a1a] flex flex-col justify-center items-start gap-8 px-8 sm:px-12 lg:px-16 pt-12 sm:pt-18 lg:pt-22">
      <SectionSeparator TitleSection="OUR PLATFORM" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col gap-6"
      >
        {/* Header Section */}
        <motion.h2
          variants={titleVariants}
          className="text-white text-[32px] lg:text-[50px] font-semibold mt-3 py-[12px] leading-tight"
        >
          Bridging the data gap between life sciences and healthcare
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          className="text-gray-400 text-lg sm:text-xl lg:text-2xl xl:text-2xl"
        >
          We’re creating a secure, interoperable platform to simplify how life
          sciences and healthcare providers share and analyze real-world data,
          optimize clinical trials, and run observational studies.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div className="w-full flex flex-col lg:flex-row justify-around gap-12 items-center mt-12 lg:mt-16 mb-14 lg:mb-20 ">
        {/* Life Science Card */}
        <div className="relative w-full lg:w-[45%] cursor-pointer min-h-[400px] py-10 flex flex-col justify-between gap-6 shadow-lg transition-transform filter saturate-[70%] hover:saturate-100 overflow-hidden group hover:shadow-xl">
          {/* Scalable Background */}
          <div
            className="absolute inset-0 bg-cover bg-center rotate-180 transform transition-transform duration-500 scale-150 group-hover:scale-100"
            style={{
              backgroundImage: `url(${blue_pattern})`,
              backgroundColor: "rgba(0, 123, 255, 0.2)",
            }}
          ></div>

          {/* Card Content */}
          <div className="relative z-10 w-full flex flex-col justify-between h-full px-6">
            <div className="w-full flex justify-between items-center">
              <img src={line_icon} alt="line icon" className="h-1" />
              <img
                src={life_science_icon}
                alt="Life Science icon"
                className="h-20 lg:h-28 pr-8"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-black text-[28px] lg:text-[36px] font-bold">
                For Life Sciences
              </h3>
              <p className="text-black text-base lg:text-lg leading-relaxed">
                Speed up observational research, facilitate deeper insights into
                diseases, enhance clinical trials, improve safety surveillance,
                streamline regulatory submissions, boost commercialization
                strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Providers Card */}
        <div className="relative w-full lg:w-[45%] cursor-pointer min-h-[400px] py-10 flex flex-col justify-between gap-6 shadow-lg transition-transform filter saturate-[70%] hover:saturate-100 overflow-hidden group hover:shadow-xl">
          {/* Scalable Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500  scale-150 group-hover:scale-100"
            style={{
              backgroundImage: `url(${violet_pattern})`,
              backgroundColor: "rgba(123, 63, 255, 0.2)",
            }}
          ></div>

          {/* Card Content */}
          <div className="relative z-10 w-full flex flex-col justify-between h-full px-6">
            <div className="w-full flex justify-between items-center">
              <img src={line_icon} alt="line icon" className="h-1" />
              <img
                src={provider_icon}
                alt="Provider icon"
                className="h-20 lg:h-28 pr-8"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-black text-[28px] lg:text-[36px] font-bold">
                For Healthcare Providers
              </h3>
              <p className="text-black text-base lg:text-lg leading-relaxed">
                Your data can drive groundbreaking innovation in healthcare.
                Endpoint helps providers activate their data for both internal
                research and life sciences collaborations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
