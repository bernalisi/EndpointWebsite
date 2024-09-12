import { motion } from "framer-motion";
import dot_separator from "../../assets/images/ui/Dot-separator.svg";

export default function SectionSeparator({ TitleSection }) {
  const TextVariant = {
    hidden: {
      opacity: 0,
      x: -15,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-row justify-start items-center gap-2">
      <img src={dot_separator} className="h-4 shadow-2xl" />
      <motion.h6
        variants={TextVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px", once: true }}
        className="text-black text-sm font-medium sm:text-base"
      >
        {TitleSection}
      </motion.h6>
    </div>
  );
}
