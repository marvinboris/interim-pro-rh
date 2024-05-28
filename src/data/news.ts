import { News } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getLatestNews = async () => {
  return [
    {
      id: uuidv4(),
      photo: "/images/244f8ebe08cf6168bbbc838c82785d7d.png",
      title: `"Insider Insights: Unveiling Cameroon's Political Landscape"`,
      body: `Dive into the intricate political dynamics shaping Cameroon's future. From presidential elections to local governance, stay informed with exclusive analyses and expert opinions.`,
      link: `/news/insider-insights-unveiling-cameroon-political-landscape`,
      date: new Date().toISOString(),
      comments: 0,
      slug: "insider-insights-unveiling-cameroon-political-landscape",
    },
    {
      id: uuidv4(),
      photo: "/images/c8b3ffc29a355c48c037040a3098a71f.png",
      title: `"Beyond the Headlines: Humanitarian Issues and Social Challenges in Cameroon"`,
      body: `From healthcare access to education disparities, explore the stories behind the headlines and the grassroots efforts for change.`,
      link: `/news/beyond-the-headlines-humanitarian-issues-and-social-challenges-in-cameroon`,
      date: new Date().toISOString(),
      comments: 0,
      slug: "beyond-the-headlines-humanitarian-issues-and-social-challenges-in-cameroon",
    },
    {
      id: uuidv4(),
      photo: "/images/85b543dac23f2d64f72002f2532c5ea5.png",
      title: `"In Focus: Cameroon's Economic Growth and Development Initiatives"`,
      body: `Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.`,
      link: `/news/in-focus-cameroon-economic-growth-and-development-initiatives`,
      date: new Date().toISOString(),
      comments: 0,
      slug: "in-focus-cameroon-economic-growth-and-development-initiatives",
    },
  ] satisfies News[];
};

export const getNews = async () => {
  const news: News[] = [
    {
      id: uuidv4(),
      title:
        "Revolutionizing Car Sales: Introducing Our New Online Platform for Buying and Selling Vehicles",
      body: `One of the most striking aspects of Cameroonian culture is its diversity. With over 250 ethnic groups, each with its own language, customs, and traditions, Cameroon is a melting pot of cultures. From the Bamileke people of the West Region to the Tikar of the North, the Fulani of the Far North to the Duala of the Littoral Region, every corner of Cameroon offers a unique cultural experience. Despite this diversity, Cameroonians share a strong sense of national identity, united by their love for their country and pride in their heritage.`,
      date: new Date().toISOString(),
      comments: 10,
      photo: "/images/6a14fcedfb680b35564d57f65a711d16.png",
      link: "/blog/revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
      slug: "revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
    },
    {
      id: uuidv4(),
      title:
        "Yaounde capital city cameroon africa hi-res stock photography and images ",
      body: `Cameroonian traditions are often celebrated through colorful ceremonies and festivals that highlight the rich cultural heritage of the various ethnic groups. One such ceremony is the Ngondo Festival, celebrated by the Duala people in Douala. This week-long event brings together people from all walks of life to honor their ancestors through music, dance, and ritual performances. Similarly, the Nguon Festival of the Bamileke people is a spectacle of vibrant costumes, traditional music, and elaborate masquerades, symbolizing unity and community spirit.`,
      date: new Date().toISOString(),
      comments: 10,
      photo: "/images/7b0e327a62b53e2a2dc0a4f6d926cf90.png",
      link: "/blog/revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
      slug: "revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
    },
    {
      id: uuidv4(),
      title:
        "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
      body: `Cameroonian traditions are often celebrated through colorful ceremonies and festivals that highlight the rich cultural heritage of the various ethnic groups. One such ceremony is the Ngondo Festival, celebrated by the Duala people in Douala. This week-long event brings together people from all walks of life to honor their ancestors through music, dance, and ritual performances. Similarly, the Nguon Festival of the Bamileke people is a spectacle of vibrant costumes, traditional music, and elaborate masquerades, symbolizing unity and community spirit.`,
      date: new Date().toISOString(),
      comments: 10,
      photo: "/images/259c077b192fbc04148542a63ebdb511.png",
      link: "/blog/revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
      slug: "revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
    },
    {
      id: uuidv4(),
      title:
        "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
      body: `Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.`,
      date: new Date().toISOString(),
      comments: 10,
      photo: "/images/2cb8a5aa0361618c368893d196ccddf0.png",
      link: "/blog/revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
      slug: "revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
    },
    {
      id: uuidv4(),
      title:
        "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
      body: `Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.`,
      date: new Date().toISOString(),
      comments: 10,
      photo: "/images/072c34eb2c9f18d73507e3d1d3880ddb.png",
      link: "/blog/revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
      slug: "revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
    },
    {
      id: uuidv4(),
      title:
        "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
      body: `Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.`,
      date: new Date().toISOString(),
      comments: 10,
      photo: "/images/7241e675ff682badc2b2d3bb368db6f3.png",
      link: "/blog/revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
      slug: "revolutionizing-car-sales-introducing-our-new-online-platform-for-buying-and-selling-vehicles",
    },
  ];

  return news;
};
