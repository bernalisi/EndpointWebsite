import chevron_icon from "../../assets/images/ui/Chevron down white.svg";
import { motion } from "framer-motion";

export default function Article({ thumbnail, title, link, pubDate }) {
  const animate_article = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formattedDate = pubDate
    ? new Date(pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <motion.div
      variants={animate_article}
      className="w-[85%] lg:w-[420px] ld:w-[500px] h-[520px] flex flex-col justify-between bg-[#060606] text-white border border-gray-700 shadow-lg overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0 "
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={`Thumbnail for ${title || "article"}`}
          className="w-full h-44 md:h-56  cursor-pointer object-cover transition duration-300"
        />
      ) : (
        <div className="h-44 md:h-56 bg-slate-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}

      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h6 className="text-xs md:text-sm font-light text-gray-300">BLOG</h6>
          <p className="text-sm text-gray-400 mt-4">{formattedDate}</p>
          <p className="text-lg md:text-2xl font-semibold leading-snug line-clamp-3 mt-2">
            {title}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-10 flex items-center justify-start text-sm font-light tracking-wider transition-opacity duration-150 ease-in-out hover:opacity-80"
        >
          Read more
          <img src={chevron_icon} alt="Chevron icon" className="h-5 ml-2" />
        </a>
      </div>
    </motion.div>
  );
}
