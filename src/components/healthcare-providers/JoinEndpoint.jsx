import SectionSeparator from "../ui/SectionSeparator"; // Assuming you have a SectionSeparator component
import { motion } from "framer-motion";

export default function PlatformOverview() {
  return (
    <div className="w-full bg-white flex flex-col items-start gap-6 px-6 sm:px-10 lg:px-14 py-10 sm:py-16 lg:py-20">
      <SectionSeparator
        TitleSection="JOIN THE ENDPOINT NETWORK"
        textColor={true}
      />

      <div className="w-full flex flex-col gap-5">
        {/* Header Section */}
        <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[10px]">
          Join the Endpoint Network
        </h3>
        <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Partnering with Endpoint connects you to a growing community of data
          providers shaping the future of healthcare. By offering your data for
          discovery, linking it with other trusted sources, and controlling its
          usage, you contribute to improving research quality and enhancing
          patient outcomes.
        </p>

        {/* Key Features Section */}
        <div className="flex flex-col gap-4 mt-6">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">Expand your presence</h3>
            <p className="text-gray-600 mt-2">
              Make your datasets accessible to a wide array of organizations
              while maintaining ownership and oversight.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">Increase your impact</h3>
            <p className="text-gray-600 mt-2">
              Combine your data with other sources to generate richer, more
              impactful data that drives meaningful change.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">Retain full control</h3>
            <p className="text-gray-600 mt-2">
              Decide who uses your data and under what conditions, ensuring it’s
              only shared on your terms.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
