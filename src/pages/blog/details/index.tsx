import { useParams } from "react-router-dom";
import Banner from "./ui/banner";
import { Section } from "@/components";
import Body from "./ui/body";

export function PageBlogDetails() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="bg-stone-50 pb-20">
      <Section>
        <Banner />
        <Body />
      </Section>
    </div>
  );
}
