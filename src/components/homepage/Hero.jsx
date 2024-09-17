import chevron_down_black from "../../assets/images/ui/Chevron down black.svg";
import scroll_down from "../../assets/images/ui/Scroll_down.svg";
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
  // Receive the function as a prop
  return (
    <div
      className="w-screen h-screen lg:h-auto bg-cover bg-center bg-repeat bg-black flex flex-row"
      style={{ backgroundImage: `url(${background})` }}
    >
      <motion.div
        variants={ParentVariations}
        initial="hidden"
        animate="visible"
        className="w-screen h-screen mt-[60px] lg:mt-[100px] px-2 sm:px-6 lg:px-8 pt-32 pb-[333px] flex max-md:items-center max-sm:justify-end items-start flex-col gap-6"
      >
        {/* First paragraph */}
        <motion.h1
          variants={ChildVariations}
          initial="hidden"
          animate="visible"
          className="w-[100%] lg:w-[65%] xl:w-[60% text-white px-4 xl:text-[60px] lg:text-[50px] md:text-[60px] sm:text-[50px] text-[40px] max-sm:text-left max-md:text-center font-semibold leading-tight"
        >
          Instantly find RWD for smarter pharmaceutical research
        </motion.h1>

        {/* Second paragraph */}
        <motion.a
          variants={ChildVariations}
          initial="hidden"
          animate="visible"
          className="w-[75%] md:w-[90%] lg:w-[60%] xl:w-[55%] px-4 max-sm:hidden max-md:text-center text-white lg:text-[15px] xl:text-[20px] md:text-[20px] sm:text-[15px] font-normal pt-5 leading-relaxed"
        >
          Our self-service platform enables quick discovery and access to
          curated healthcare data from leading organizations worldwide,
          streamlining research and data analysis for observational studies with
          just a few clicks.
        </motion.a>

        <div className="w-[50%] cursor-pointer max-sm:w-[100%] max-sm:px-5 flex flex-row justify-center max-sm:justify-start">
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            whileInView="show"
            onClick={scrollToNextSection}
          >
            <img
              src={scroll_down}
              alt="chevron down icon"
              className="h-3 max-sm:hidden md:h-3 xl:mt-5 2xl:h-5 2xl:mt-12"
            />
          </motion.div>

          {/* Button with bounce animation */}
          <motion.button
            className="sm:hidden cursor-pointer w-auto h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90"
            variants={buttonBounce}
            whileHover="hover"
            onClick={scrollToNextSection} // Use the function on click
          >
            <a className="flex items-center gap-2">
              READ MORE
              <img
                src={chevron_down_black}
                alt="chevron-button"
                className="h-5"
              />
            </a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
