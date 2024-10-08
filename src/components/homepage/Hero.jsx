import scroll_down from "../../assets/images/ui/Chevron down white.svg";
import read_down from "../../assets/images/ui/Chevron down black.svg";
import background from "../../assets/images/homepage/Background homepage.svg";
import { motion } from "framer-motion";

// Animations
const ParentVariations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ChildVariations = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};

const scrollVariants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  show: {
    y: [4, 3, 2, 1, 0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3, 4],
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
  show_1: {
    y: [-2, -3, -4, -3, -2],
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

// New bounce animation for button
const buttonBounce = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

export default function Hero({ scrollToNextSection }) {
  return (
    <div
      className="relative w-screen h-full lg:h-auto bg-cover bg-center bg-repeat bg-[#1a1a1a] flex flex-row"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1a1a1a]to-transparent opacity-80"></div>

      {/* Content */}
      <motion.div
        variants={ParentVariations}
        initial="hidden"
        animate="visible"
        className="relative w-screen h-screen mt-[60px] lg:mt-[60px] px-2 sm:px-6 lg:px-8 pt-32 lg:pt-52 ml-10 pb-[333px] flex max-md:items-center max-sm:justify-end items-start flex-col gap-6"
      >
        {/* First paragraph */}
        <motion.h1
          variants={ChildVariations}
          initial="hidden"
          animate="visible"
          className="w-[100%] lg:w-[65%] xl:w-[70%] ld:text-[100px] text-white px-4 xl:text-[70px] lg:text-[52px] ld:pt-52 sm:text-[50px] text-[40px] max-sm:text-left max-md:text-center font-semibold leading-tight"
        >
          Unlock the world’s health data
        </motion.h1>

        {/* Second paragraph */}
        <motion.a
          variants={ChildVariations}
          initial="hidden"
          animate="visible"
          className="w-[75%] md:w-[90%] lg:w-[60%] xl:w-[55%] ld:text-[35px] px-4 hidden sm:block max-md:text-center text-white xl:text-[25px] md:text-[22px] sm:text-[20px] font-normal pt-5 leading-relaxed"
        >
          Building the infrastructure to connect real-world data across life
          sciences and healthcare, empowering better patient outcomes through
          data-driven decisions
        </motion.a>

        {/* Call-to-action */}
        <div className="w-[50%] cursor-pointer max-sm:w-[100%] max-sm:px-5 flex flex-row sm:justify-center ml-5 max-sm:justify-start">
          <motion.button
            className="sm:hidden w-auto cursor-pointer h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90"
            variants={buttonBounce}
            whileHover="hover"
            onClick={scrollToNextSection}
          >
            <a className="flex items-center gap-2">
              READ MORE
              <motion.div
                variants={scrollVariants}
                initial="hidden"
                whileInView="show_1"
                className="flex items-center"
              >
                <img
                  src={read_down}
                  alt="chevron down icon"
                  className="h-6 rotate-90 mt-2"
                />
              </motion.div>
            </a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
