import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import line_icon from "../../assets/images/ui/Line_icon_white.svg";

// Framer Motion animation for number counting with scaling effect and sliding
const countUpAnimation = (endValue, duration = 0.8) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration } },
});

// Sliding animation variants
const slideLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Stats() {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full bg-[#1a1a1a] flex flex-col justify-center items-center gap-6 px-12 sm:px-16 lg:px-20 py-16 sm:py-24 lg:py-28"
    >
      {/* Stats Content */}
      <div className="w-full flex flex-col gap-12 justify-center items-center z-10">
        <h2 className="text-white text-[48px] lg:text-[60px] font-semibold mt-6">
          Global, High-Quality RWD Ecosystem
        </h2>

        <div className="flex flex-col gap-10 md:gap-12 justify-center w-full relative z-20">
          {/* Patients */}
          <div className="flex flex-col md:items-center gap-4 text-center">
            <motion.p
              className="text-white text-[72px] md:text-[120px] lg:text-[140px] font-thin"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ margin: "-200px", once: true }}
            >
              {Math.floor(7000000).toLocaleString()}+
            </motion.p>
            <motion.img
              src={line_icon}
              alt="line icon"
              className="h-1 my-2"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ once: true }}
            />
            <motion.h6
              className="text-white text-xl md:text-2xl font-extralight"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ once: true }}
            >
              Patients
            </motion.h6>
          </div>

          {/* Data Providers */}
          <div className="flex flex-col md:items-center gap-4 text-center">
            <motion.p
              className="text-white text-[72px] md:text-[120px] lg:text-[140px] font-thin"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ margin: "-200px", once: true }}
            >
              {Math.floor(200).toLocaleString()}+
            </motion.p>
            <motion.img
              src={line_icon}
              alt="line icon"
              className="h-1 my-2"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ once: true }}
            />
            <motion.h6
              className="text-white text-xl md:text-2xl font-extralight"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ once: true }}
            >
              Data Providers
            </motion.h6>
          </div>

          {/* Countries */}
          <div className="flex flex-col md:items-center gap-4 text-center">
            <motion.p
              className="text-white text-[72px] md:text-[120px] lg:text-[140px] font-thin"
              initial="hidden"
              whileInView="visible"
              variants={slideLeft}
              viewport={{ margin: "-200px", once: true }}
            >
              {Math.floor(40).toLocaleString()}+
            </motion.p>
            <motion.img
              src={line_icon}
              alt="line icon"
              className="h-1 my-2"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ once: true }}
            />
            <motion.h6
              className="text-white text-xl md:text-2xl font-extralight"
              initial="hidden"
              whileInView="visible"
              variants={slideRight}
              viewport={{ once: true }}
            >
              Countries
            </motion.h6>
          </div>
        </div>
      </div>
    </div>
  );
}
