import SectionSeparator from "../ui/SectionSeparator"; // Assuming you have a SectionSeparator component
import { motion } from "framer-motion";

export default function PlatformOverview() {
  return (
    <div className="w-full bg-black flex flex-col items-start gap-6 px-6 sm:px-10 lg:px-14 py-10 sm:py-16 lg:py-20">
      <SectionSeparator TitleSection="OUR PLATFORM" textColor={false} />

      <div className="w-full flex flex-col gap-5">
        {/* Header Section */}
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold mt-3 py-[10px]">
          At Endpoint, we believe that the future of healthcare depends on
          seamless access to real-world data.
        </h2>
        <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
          We’re building a platform to help life sciences companies across
          Europe unlock valuable patient insights by securely connecting
          fragmented datasets and enabling better decision-making in clinical
          and research environments.
        </p>

        {/* Key Features Section */}
        <div className="flex flex-col gap-4 mt-6">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              End-to-End Interoperability
            </h3>
            <p className="text-gray-600 mt-2">
              Access, connect, and analyze data from diverse, siloed sources
              across healthcare, all in one place.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">Privacy First</h3>
            <p className="text-gray-600 mt-2">
              We’re designing our platform to comply with GDPR and the strictest
              European data privacy regulations, ensuring that patient data
              remains de-identified and secure.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              Data-Driven Cohort Creation
            </h3>
            <p className="text-gray-600 mt-2">
              With a focus on observational studies, our platform will allow for
              precise cohort building that’s informed by real-time data.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
