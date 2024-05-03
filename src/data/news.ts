import { News } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getNews = async () => {
  return [
    {
      id: uuidv4(),
      photo: "/images/244f8ebe08cf6168bbbc838c82785d7d.png",
      title: `"Insider Insights: Unveiling Cameroon's Political Landscape"`,
      body: `Dive into the intricate political dynamics shaping Cameroon's future. From presidential elections to local governance, stay informed with exclusive analyses and expert opinions.`,
      link: `/news/insider-insights-unveiling-cameroon-political-landscape`,
      slug: "insider-insights-unveiling-cameroon-political-landscape",
    },
    {
      id: uuidv4(),
      photo: "/images/c8b3ffc29a355c48c037040a3098a71f.png",
      title: `"Beyond the Headlines: Humanitarian Issues and Social Challenges in Cameroon"`,
      body: `From healthcare access to education disparities, explore the stories behind the headlines and the grassroots efforts for change.`,
      link: `/news/beyond-the-headlines-humanitarian-issues-and-social-challenges-in-cameroon`,
      slug: "beyond-the-headlines-humanitarian-issues-and-social-challenges-in-cameroon",
    },
    {
      id: uuidv4(),
      photo: "/images/85b543dac23f2d64f72002f2532c5ea5.png",
      title: `"In Focus: Cameroon's Economic Growth and Development Initiatives"`,
      body: `Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.`,
      link: `/news/in-focus-cameroon-economic-growth-and-development-initiatives`,
      slug: "in-focus-cameroon-economic-growth-and-development-initiatives",
    },
  ] satisfies News[];
};
