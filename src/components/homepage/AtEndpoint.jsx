import SectionSeparator from "../ui/SectionSeparator";
import { motion } from "framer-motion";
import privacy from "../../assets/images/homepage/privacy_placeholder.jpeg";
import granular from "../../assets/images/homepage/granular_data.jpg";
import e2e from "../../assets/images/homepage/e2e.jpeg";

// Animation variant for content
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function PlatformOverview() {
  return (
    <div className="w-full bg-[#1a1a1a] flex flex-col items-start gap-6 px-6 sm:px-10 lg:px-14 py-10 sm:py-16 lg:py-20">
      <SectionSeparator TitleSection="WHY US" textColor={false} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={contentVariants}
        className="w-full flex flex-col gap-5"
      >
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold mt-3 py-[10px]">
          At Endpoint, we believe that the future of healthcare depends on
          seamless access to real-world data.
        </h2>
        <p className="text-white text-lg hidden xs:block sm:text-xl lg:text-2xl leading-relaxed pb-16">
          We’re building a platform to help life sciences companies unlock
          valuable patient insights by securely connecting fragmented datasets
          and enabling better decision-making in clinical and research
          environments.
        </p>

        <div className="w-full flex flex-col gap-32 px-36 mt-8">
          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-190px", once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
          >
            <img
              src={e2e}
              alt=""
              className="w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg"
            />
            <div className="w-full lg:w-1/2">
              <h3 className="text-white text-[28px] lg:text-[36px] font-semibold">
                End-to-End Interoperability
              </h3>
              <p className="text-gray-400 mt-4">
                Access, connect, and analyze data from diverse, siloed sources
                across the healthcare landscape, all in one place.
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-190px", once: true }}
            className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-32"
          >
            <img
              src={privacy}
              alt=""
              className="w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg"
            />
            <div className="w-full lg:w-1/2">
              <h3 className="text-white text-[28px] lg:text-[36px] font-semibold">
                Privacy First
              </h3>
              <p className="text-gray-400 mt-4">
                Our platform complies with the strictest data privacy
                regulations to keep patient data de-identified and secure.
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-190px", once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
          >
            <img
              src={granular}
              alt=""
              className="w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg"
            />
            <div className="w-full lg:w-1/2">
              <h3 className="text-white text-[28px] lg:text-[36px] font-semibold">
                Granular Data Discovery
              </h3>
              <p className="text-gray-400 mt-4">
                Rapidly identify and build study cohorts by geography, gender,
                age, diagnosis, treatment, and outcome.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
