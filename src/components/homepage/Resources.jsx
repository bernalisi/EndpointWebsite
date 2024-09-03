import { useContext } from 'react';
import { ArticlesContext } from '../resources/ArticlesContext';
import dot_separator from "../../assets/images/ui/Dot-separator.svg";
import Article from "../../components/resources/Article"

export default function Resources() {
  const { articles } = useContext(ArticlesContext);

  return (
    <div className="w-full h-auto lg:min-h-screen lg:max-h-auto bg-black flex flex-col justify-center items-start gap-4 px-6 pb-20 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:py-0">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" alt="Separator" />
        <h6 className="text-white text-sm md:text-base">NEWS AND PRESS RELEASES</h6>
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-32 justify-between items-start">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] leading-normal xl:leading-tight mt-3">
          Check out our latest news and updates
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start gap-10 md:gap-10">
          {articles.map((article) => (
            <Article
            key={article.link}
            thumbnail={article.thumbnail}
            title={article.title}
            description={article.description}
            link={article.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
