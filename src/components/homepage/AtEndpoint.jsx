import SectionSeparator from "../ui/SectionSeparator";
import { motion, useScroll, useTransform } from "framer-motion";
import bg_image from "../../assets/images/homepage/Background_contact.png";

// Animation variant for content
const contentVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
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

export default function PlatformOverview() {
  const { scrollY } = useScroll();

  // Transform shapes based on scroll
  const yMovement1 = useTransform(scrollY, [0, 500], [0, 100]);
  const yMovement2 = useTransform(scrollY, [0, 500], [0, -150]);
  const yMovement3 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative w-full bg-[#000002] flex flex-col items-start gap-6 px-8 sm:px-10 lg:px-14 py-10 sm:py-16 lg:py-20 ld:px-[420px] ">
      <SectionSeparator TitleSection="WHY US" textColor={false} />

      {/* <motion.div
        className="absolute hidden xl:block bottom-[20%] right-[27%] w-24 h-24 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([10, -15], [15, -20], 6)}
      /> */}
      <motion.div
        className="absolute hidden xl:block top-[40%] left-20 w-44 h-44 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([25, -35], [-25, 30], 10)}
      />
      <motion.div
        className="absolute hidden xl:block top-[70%] -right-10 w-36 h-36 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([-10, 20], [-20, 15], 7)}
      />
      <motion.div
        className="absolute hidden xl:block bottom-[5%] -left-10 w-28 h-28 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        animate={floatAnimation([-30, 40], [-40, 30], 9)}
      />

      {/* Content Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={contentVariants}
        className="w-full flex flex-col gap-5 z-10"
      >
        <h2 className="text-white text-[32px] lg:text-[50px] font-semibold mt-3 py-[12px] leading-tight">
          At Endpoint, we believe that the future of healthcare depends on
          seamless access to real-world data
        </h2>
        <p className="text-white text-lg hidden xs:block sm:text-xl lg:text-2xl leading-relaxed pb-16">
          We’re building a platform to help life sciences companies unlock
          valuable patient insights by securely connecting fragmented datasets
          and enabling better decision-making in clinical and research
          environments
        </p>

        <div className="w-full flex flex-col gap-10 xl:gap-32 px-10 xl:px-36 mt-8">
          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-190px", once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
          >
            <div className="w-full lg:w-full flex flex-col items-center">
              <h3 className="text-white text-[22px] md:text-[28px] lg:text-[36px] font-semibold text-center">
                Your Single Source of Truth for Real-World Data
              </h3>
              <p className="text-gray-400 mt-4 text-[20px] text-center">
                Discover data from diverse, siloed sources across the healthcare
                landscape, all in one place
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-190px", once: true }}
            className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-32"
          >
            <div className="w-full lg:w-full flex flex-col items-center">
              <h3 className="text-white text-[22px] md:text-[28px] lg:text-[36px] font-semibold text-center">
                Privacy First
              </h3>
              <p className="text-gray-400 mt-4 text-[20px] text-center">
                Our platform complies with HIPAA, GDPR, and the strictest
                European data privacy regulations, ensuring that patient data
                remains de-identified and secure
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-190px", once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 mb-14"
          >
            <div className="w-full lg:w-full flex flex-col items-center">
              <h3 className="text-white text-[22px] md:text-[28px] lg:text-[36px] font-semibold text-center">
                Granular Data Discovery
              </h3>
              <p className="text-gray-400 mt-4 text-[20px] text-center">
                Rapidly identify and build study cohorts by geography, gender,
                age, diagnosis, treatment, and outcome
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
