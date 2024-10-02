import SectionSeparator from "../ui/SectionSeparator"; // Assuming you have a SectionSeparator component
import { motion } from "framer-motion";

export default function PlatformOverview() {
  return (
    <div className="w-full bg-white flex flex-col items-start gap-6 px-6 sm:px-10 lg:px-14 py-10 sm:py-16 lg:py-20">
      <SectionSeparator TitleSection="OUR PLATFORM" textColor={true} />

      <div className="w-full flex flex-col gap-5">
        {/* Header Section */}
        <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[10px]">
          Why Life Sciences trust Endpoint
        </h3>
        <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Endpoint is designed to meet the growing needs of pharmaceutical
          companies, CROs, and research organizations across Europe.
        </p>

        {/* Key Features Section */}
        <div className="flex flex-col gap-4 mt-6">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              Accelerate Research Timelines
            </h3>
            <p className="text-gray-600 mt-2">
              With quick access to diverse, discoverable data, you can make
              faster, data-driven decisions.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">Improve Patient Outcomes</h3>
            <p className="text-gray-600 mt-2">
              Identify the right patient populations and understand their
              healthcare journeys in greater detail.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              Many Providers, One Contract
            </h3>
            <p className="text-gray-600 mt-2">
              Access data from multiple providers with a single contract,
              simplifying the process of creating a rich, comprehensive dataset
              for your research.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
