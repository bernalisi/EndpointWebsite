import { motion, useScroll, useTransform } from "framer-motion";
import bg_image from "../../assets/images/homepage/Background_contact.png";
import line_icon from "../../assets/images/ui/Line_icon_white.svg";

// Sliding animation variants for text and content
const slideLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

const slideRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

// Function to generate random subtle float animations
const floatAnimation = (xRange, yRange, duration) => ({
  x: [0, ...xRange, 0],
  y: [0, ...yRange, 0],
  transition: {
    duration: duration,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  },
});

export default function Stats() {
  const { scrollY } = useScroll();

  // Transform shapes based on scroll
  const yMovement1 = useTransform(scrollY, [0, 500], [0, 100]);
  const yMovement2 = useTransform(scrollY, [0, 500], [0, -150]);
  const yMovement3 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative w-full bg-[#000002] flex flex-col justify-center items-center gap-6 px-12 sm:px-16 lg:px-20 ld:px-[420px]  py-16 sm:py-24 lg:py-28">
      {/* Parallax Shapes with Random Animations */}

      <motion.div
        className="absolute hidden xl:block bottom-20 right-[27%] w-24 h-24 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([10, -15], [15, -20], 6)}
      />
      <motion.div
        className="absolute hidden xl:block top-1/2 left-40 w-44 h-44 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([25, -35], [-25, 30], 10)}
      />
      <motion.div
        className="absolute hidden xl:block top-1/4 right-20 w-36 h-36 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([-10, 20], [-20, 15], 7)}
      />
      <motion.div
        className="absolute hidden xl:block bottom-[10%] left-0 w-28 h-28 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([-30, 40], [-40, 30], 9)}
      />

      {/* Stats Content */}
      <div className="w-full flex flex-col gap-12 justify-center items-center z-10">
        <motion.h2
          className="text-white hidden md:block text-[32px] md:text-[48px] lg:text-[60px] font-semibold mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Global, High-Quality RWD Ecosystem
        </motion.h2>

        <div className="flex flex-col gap-10 md:gap-12 justify-center w-full relative z-20">
          {/* Patients */}
          <div className="flex flex-col md:items-center text-center">
            <motion.p
              className="text-white text-[50px] md:text-[120px] lg:text-[140px] font-thin"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ amount: 0.3, once: true }}
            >
              {Math.floor(70000000).toLocaleString()}+
            </motion.p>
            <motion.img
              src={line_icon}
              alt="line icon"
              className="h-1 mb-2"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ amount: 0.3, once: true }}
            />
            <motion.h6
              className="text-white text-xl md:text-2xl font-extralight"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ amount: 0.3, once: true }}
            >
              Patients
            </motion.h6>
          </div>

          {/* Data Providers */}
          <div className="flex flex-col md:items-center text-center">
            <motion.p
              className="text-white text-[50px] md:text-[120px] lg:text-[140px] font-thin"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ amount: 0.3, once: true }}
            >
              {Math.floor(200).toLocaleString()}+
            </motion.p>
            <motion.img
              src={line_icon}
              alt="line icon"
              className="h-1 mb-2"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ amount: 0.3, once: true }}
            />
            <motion.h6
              className="text-white text-xl md:text-2xl font-extralight"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ amount: 0.3, once: true }}
            >
              Data Providers
            </motion.h6>
          </div>

          {/* Countries */}
          <div className="flex flex-col md:items-center text-center">
            <motion.p
              className="text-white text-[50px] md:text-[120px] lg:text-[140px] font-thin"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ amount: 0.3, once: true }}
            >
              {Math.floor(40).toLocaleString()}+
            </motion.p>
            <motion.img
              src={line_icon}
              alt="line icon"
              className="h-1 mb-2"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ amount: 0.3, once: true }}
            />
            <motion.h6
              className="text-white text-xl md:text-2xl font-extralight"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ amount: 0.3, once: true }}
            >
              Countries
            </motion.h6>
          </div>
        </div>
      </div>
    </div>
  );
}
