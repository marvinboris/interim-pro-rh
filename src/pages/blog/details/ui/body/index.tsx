import { Loading } from "@/components";
import useNews from "../../../hooks";
import Aside from "../aside";
import Block from "./block";

export default function Body() {
  const { loading, news } = useNews();

  if (loading) return <Loading />;
  return (
    <div className="flex gap-14 mt-14">
      <div className="flex-1">
        <p className="border-l-4 border-primary pl-6 text-lg">
          Nestled in the heart of Central Africa lies a country rich in cultural
          heritage and diversity - Cameroon. From the verdant hills of the
          Grassfields to the bustling streets of Douala, Cameroon is a tapestry
          woven with a myriad of traditions, customs, and rituals that reflect
          the country's complex history and vibrant cultural landscape. Join us
          as we embark on a journey to explore the captivating world of
          Cameroonian traditions.
        </p>

        <div className="mt-12 space-y-28">
          {news
            ?.filter((_, index) => index < 3)
            .map((news, index) => (
              <Block key={"news-wide-" + news.id + "-" + index} {...news} />
            ))}
        </div>
      </div>

      <Aside />
    </div>
  );
}
