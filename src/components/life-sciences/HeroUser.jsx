import chevron_down_black from "../../assets/images/ui/Chevron down black.svg";
import scroll_down from "../../assets/images/ui/Scroll_down.svg";
import background from "../../assets/images/life-sciences/Life Science Background.svg";
import { motion } from "framer-motion";

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

export default function HeroUser({ scrollToNextSection }) {
  return (
    <div
      className="w-screen h-screen lg:h-auto bg-cover bg-center  bg-repeat bg-black flex flex-row justify-end"
      style={{ backgroundImage: `url(${background})` }}
    >
      <motion.div
        variants={ParentVariations}
        initial="hidden"
        animate="visible"
        className="w-screen h-screen mt-[60px] lg:mt-[100px] px-2 sm:px-6 lg:px-14 xl:px-52 pt-32 pb-[333px] flex max-md:items-center max-sm:justify-end items-end flex-col gap-6"
      >
        {/* First paragraph */}
        <motion.h1
          variants={ChildVariations}
          initial="hidden"
          animate="visible"
          className="w-[100%] lg:w-[40%] xl:w-[50%] 2xl:mb-5 2xl:text-[120px] text-white px-4 xl:text-[80px] lg:text-[50px] md:text-[60px] sm:text-[50px] xl:mb-16 text-[40px] max-sm:text-left max-md:text-center font-semibold leading-tight"
        >
          Life Sciences
        </motion.h1>

        {/* Second paragraph */}
        <motion.a
          variants={ChildVariations}
          initial="hidden"
          animate="visible"
          className="w-[75%] md:w-[100%] lg:w-[40%] 2xl:text-[35px] font-thin xl:w-[50%] px-4 max-sm:hidden max-md:text-center text-white lg:text-[15px] xl:text-[20px] md:text-[20px] sm:text-[15px] pt-5 leading-relaxed text-justify"
        >
          Navigate the most extensive universe of RWD sources to unleash the the
          full potential of observational research.
        </motion.a>

        <div className="lg:w-[40%] cursor-pointer xl:w-[50%] w-[50%] max-lg:w-[100%] max-sm:px-5 flex flex-row justify-center max-sm:justify-start">
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
          <button
            onClick={scrollToNextSection}
            className="sm:hidden cursor-pointer w-auto h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90"
          >
            <a className="flex items-center gap-2">
              READ MORE
              <img
                src={chevron_down_black}
                alt="chevron-button"
                className="h-5"
              />
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
