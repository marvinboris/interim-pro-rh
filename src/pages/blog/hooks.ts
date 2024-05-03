import { News } from "@types";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function useNews() {
  const [loading, setLoading] = React.useState(false);
  const [news, setNews] = React.useState<News[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);
      try {
        setNews([
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
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { loading, news };
}
