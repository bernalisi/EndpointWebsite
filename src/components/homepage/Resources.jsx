import { useContext } from "react";
import { ArticlesContext } from "../resources/ArticlesContext";
import Article from "../../components/resources/Article";
import { motion } from "framer-motion";
import SectionSeparator from "../ui/SectionSeparator";
import Slider from "react-slick"; // Import react-slick

export default function Resources() {
  const { articles } = useContext(ArticlesContext);

  const animation_variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const getImageLink = (description) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = description.match(imgRegex);
    return match && match[1] ? match[1] : null;
  };

  // Slick carousel settings
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Carousel will loop back to the start
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of articles to show at a time
    slidesToScroll: 1, // How many to scroll when navigating
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#1a1a1a] flex flex-col items-start justify-start gap-8 px-6 sm:px-10 lg:px-14 pt-20 pb-20">
      <SectionSeparator TitleSection="NEWS AND PRESS RELEASES" />

      <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug text-center my-6">
        Latest News and Updates
      </h2>

      <motion.div
        variants={animation_variants}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        <Slider {...settings}>
          {articles.map((article) => (
            <div key={article.link} className="ml-6">
              {" "}
              {/* Add padding between slides */}
              <Article
                thumbnail={getImageLink(article.description)}
                title={article.title}
                description={article.description}
                link={article.link}
                pubDate={article.pubDate} // Include pubDate if needed
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
