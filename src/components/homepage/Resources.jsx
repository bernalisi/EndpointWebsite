import { useEffect, useState } from 'react';
import axios from 'axios';
import dot_separator from "../../assets/images/ui/Dot-separator.svg";
import chevron_icon from "../../assets/images/ui/Chevron down white.svg";

export default function Resources() {
  const [articles, setArticles] = useState([]);
  const api_url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@endpoint-data'

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetching the RSS feed and converting it to JSON
        const response = await axios.get(api_url);
        setArticles(response.data.items);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="w-full h-auto lg:min-h-screen lg:max-h-auto bg-black flex flex-col justify-center items-start gap-4 px-6 pb-20 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:py-0">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" alt="Separator" />
        <h6 className="text-white text-sm md:text-base">NEWS AND PRESS RELEASES</h6>
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-32 justify-between items-start">
        <h2 className="text-white text-2xl md:text-[48px] mt-3 text-start md:text-left">
          Check out our latest news and updates
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start gap-10 md:gap-10">
          {articles.map((article) => (
            <div
              key={article.link}
              className="w-[80%] lg:w-[400px] h-auto md:h-[370px] flex flex-col justify-between gap-4 text-white"
            >
              {article.thumbnail ? (
                <img src={article.thumbnail} alt={article.title} className="h-40 md:h-52 bg-slate-100 object-cover" />
              ) : (
                <div className="h-40 md:h-52 bg-slate-100 flex items-center justify-center text-gray-500">No Image</div>
              )}
              <h6 className="text-xs md:text-[12px] font-light">BLOG</h6> {/* You can adjust or remove this */}
              <p className="text-lg md:text-[24px] line-clamp-2 font-semibold">{article.title}</p>
              <p className="text-sm md:text-[14px] line-clamp-3">{article.description}</p>
              <button className="w-full h-10 md:h-8 py-1 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-white hover:opacity-80">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Read more
                  <img src={chevron_icon} alt="Chevron button" className="h-5" />
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
