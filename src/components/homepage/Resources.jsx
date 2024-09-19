import { useContext } from "react";
import { ArticlesContext } from "../resources/ArticlesContext";
import Article from "../../components/resources/Article";
import { motion } from "framer-motion";
import SectionSeparator from "../ui/SectionSeparator";
import { get } from "react-hook-form";

export default function Resources() {
  const { articles } = useContext(ArticlesContext);

  const animation_variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const getImageLink = (description) => {
    // Regular expression to match the src attribute inside an img tag
    const imgRegex = /<img[^>]+src="([^">]+)"/;

    // Extract the URL using the regex
    const match = description.match(imgRegex);

    // If a match is found, the URL will be in the first capture group (index 1)
    if (match && match[1]) {
      const imageUrl = match[1];
      return imageUrl;
    } else {
      console.log("No image URL found");
      return null;
    }
  };

  return (
    <div className="w-full bg-black flex flex-col justify-center ld:justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:pt-20 ld:pt-20 pb-20">
      <SectionSeparator TitleSection="NEWS AND PRESS RELEASES" />

      <div className="w-full flex flex-col gap-10 md:gap-20 justify-between items-start">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] leading-normal xl:leading-tight mt-3 py-4">
          Check out our latest news and updates
        </h2>

        <motion.div
          variants={animation_variants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start gap-10 md:gap-14"
        >
          {articles.map((article) => (
            <Article
              key={article.link}
              thumbnail={getImageLink(article.description)}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
