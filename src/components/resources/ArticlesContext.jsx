import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const ArticlesContext = createContext();

// Provider component
export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@endpoint-data'

  // Medium RSS API to get endpoint-data articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetching the RSS feed and converting it to JSON
        const response = await axios.get(api_url);
        setArticles(response.data.items);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, loading }}>
      {children}
    </ArticlesContext.Provider>
  );
};
