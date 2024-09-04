import {motion} from 'framer-motion'
import dot_separator from "../../assets/images/ui/Dot-separator.svg"

export default function SectionSeparator({TitleSection}) {

  const SeparatorVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.3, ease: "easeIn"}
    },
  }





  return (
    <motion.div variants={SeparatorVariant} initial="hidden" animate="show" className="flex flex-row justify-start items-center gap-2">
      <img src={dot_separator} className="h-4" />
      <h6 className="text-white text-sm sm:text-base">{TitleSection}</h6>
    </motion.div>
  )
}
