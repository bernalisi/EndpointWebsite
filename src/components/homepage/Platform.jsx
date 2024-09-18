import chevron_icon from "../../assets/images/ui/Chevron down black.svg";
import life_science_icon from "../../assets/images/homepage/LifeScience_icon.svg";
import provider_icon from "../../assets/images/homepage/Provider_icon.svg";
import line_icon from "../../assets/images/ui/Line_icon.svg";
import SectionSeparator from "../ui/SectionSeparator";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CardVariations = {
  start: {
    scale: 1,
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: "linear" },
  },
};

export default function Platform() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black ld:mb-40 ld:h-screen flex flex-col justify-center ld:justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-0 sm:pt-16 lg:pt-20 ld:pt-20">
      <SectionSeparator TitleSection="OUR PLATFORM" />

      <div className="w-full flex flex-col gap-5 justify-between items-start">
        {/* Header Section */}
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
          The largest ecosystem of RWD providers
        </h2>
        <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl mb-8">
          Our platform enables life sciences to search for and explore the most
          comprehensive collection of RWD assets from leading healthcare
          organizations worldwide.
        </p>

        {/* Cards */}
        <div className="w-full flex flex-col ld:pt-40 lg:flex-row justify-evenly items-center gap-8 sm:gap-10 lg:gap-12 mt-10 sm:mt-12 lg:mt-14 mb-10 sm:mb-14 lg:mb-20">
          {/* Life Science Card */}
          <motion.div
            onClick={() => {
              navigate("/life sciences");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            variants={CardVariations}
            initial="start"
            whileHover="hover"
            className="w-full ld:w-[1000px] ld:h-[650px] ld:pt-20 lg:w-[640px] h-auto cursor-pointer lg:h-[500px] flex flex-col justify-start pt-10 gap-7 items-start bg-blue-400 rounded-xl"
          >
            <div className="w-full flex flex-row justify-between items-center pr-6 sm:pr-10 lg:pr-14">
              <img src={line_icon} alt="line icon" className="h-1" />
              <img
                src={life_science_icon}
                alt="provider icon"
                className="h-16 sm:h-20 lg:h-28"
              />
            </div>
            <div className="flex flex-col gap-5 px-6 sm:px-10 lg:px-14">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[36px] ld:pb-8 font-semibold">
                For Life Sciences
              </h3>
              <p className="text-sm sm:text-base ld:text-[25px] lg:text-lg lg:line-clamp-4 xl:text-[20px]">
                Speed up observational research, facilitate deeper insights into
                diseases, enhance clinical trials, improve safety surveillance,
                streamline regulatory submissions, boost commercialization
                strategies.
              </p>
            </div>
            <div className="w-full mt-8 sm:mt-10 lg:mt-12 ld:mt-36 border-t-2 border-black">
              <button className="w-full ld:text-[18px] h-full px-6 sm:px-10 lg:px-14 py-6 sm:py-7 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-black hover:opacity-80 hover:font-extrabold">
                <p>Learn more</p>
                <img
                  src={chevron_icon}
                  alt="chevron-button"
                  className="h-4 sm:h-5 lg:h-6 px-2 sm:px-3"
                />
              </button>
            </div>
          </motion.div>

          {/* Providers Card */}
          <motion.div
            onClick={() => {
              navigate("/providers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            variants={CardVariations}
            initial="start"
            whileHover="hover"
            className="w-full ld:w-[1000px] ld:h-[650px] ld:pt-20 xl:pt-10 lg:w-[640px] cursor-pointer h-auto lg:h-[500px] flex flex-col justify-start pt-10 gap-7 items-start bg-violet-400 rounded-xl"
          >
            <div className="w-full flex flex-row justify-between items-center pr-6 sm:pr-10 lg:pr-14">
              <img src={line_icon} alt="line icon" className="h-1" />
              <img
                src={provider_icon}
                alt="provider icon"
                className="h-16 sm:h-20 lg:h-28"
              />
            </div>
            <div className="flex flex-col gap-5 px-6 sm:px-10 lg:px-14">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[36px]  ld:pb-8 font-semibold">
                For Healthcare Providers
              </h3>
              <p className="text-sm sm:text-base ld:text-[25px] lg:text-lg xl:text-[20px] lg:line-clamp-4">
                Your data can drive groundbreaking innovation in healthcare.
                Endpoint helps providers activate their data for both internal
                research and life sciences collaborations.
              </p>
            </div>
            <div className="w-full mt-8 sm:mt-10 lg:mt-12 ld:mt-36  border-t-2 border-black">
              <button className="w-full ld:text-[18px] h-full px-6 sm:px-10 lg:px-14 py-6 sm:py-7 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-black hover:opacity-80 hover:font-extrabold">
                <p>Learn more</p>
                <img
                  src={chevron_icon}
                  alt="chevron-button"
                  className="h-4 sm:h-5 lg:h-6 px-2 sm:px-3"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
