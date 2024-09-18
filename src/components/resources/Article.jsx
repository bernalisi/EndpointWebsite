import chevron_icon from "../../assets/images/ui/Chevron down white.svg";
import { motion } from "framer-motion";

export default function Article({ thumbnail, title, description, link }) {
  const animate_article = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={animate_article}
      className="w-[80%] lg:w-[400px] h-auto flex flex-col justify-between gap-4 ld:gap-4 text-white"
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="h-40 md:h-52 ld:h-80 bg-slate-100 object-cover"
        />
      ) : (
        <div className="h-40 md:h-52 bg-slate-100 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <h6 className="text-xs ld:text-[16px] md:text-[12px] font-light">BLOG</h6>{" "}
      {/* You can adjust or remove this */}
      <p className="text-lg ld:text-[30px] md:text-[24px] line-clamp-2 font-semibold ld:leading-normal">
        {title}
      </p>
      <button className="w-full h-10 md:h-8 py-1 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-white hover:opacity-80">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          Read more
          <img src={chevron_icon} alt="Chevron button" className="h-5" />
        </a>
      </button>
    </motion.div>
  );
}
