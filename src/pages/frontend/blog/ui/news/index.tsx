import {
  Button,
  Loading,
  Section,
  SectionTitle,
  ServiceBlock,
} from "@/components";
import { useNews } from "@/hooks";
import { ArrowRight } from "iconsax-react";

export default function News() {
  const { loading, data: news } = useNews();

  if (loading) return <Loading />;
  return (
    <Section className="py-20">
      <SectionTitle big>
        Nos <span>Annonces</span>
      </SectionTitle>

      <div className="mt-14 grid grid-cols-3 gap-7">
        {news?.map((news) => (
          <ServiceBlock key={"news-block-" + news.id} {...news} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button size="xl" color="light">
          <span>Load more</span>
          <ArrowRight className="size-6" />
        </Button>
      </div>
    </Section>
  );
}
