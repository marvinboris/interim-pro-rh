import { getNews } from "@/data/news";
import { News } from "@types";
import React from "react";

export default function useNews() {
  const [loading, setLoading] = React.useState(false);
  const [news, setNews] = React.useState<News[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);

      try {
        const news = await getNews();
        setNews(news);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { news, loading };
}
