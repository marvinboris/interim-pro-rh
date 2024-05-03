import {
  Button,
  Loading,
  Section,
  SectionTitle,
  ServiceBlock,
  TransparentTitle,
} from "@/components";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import useNews from "./hooks";

export default function News() {
  const { news, loading } = useNews();

  if (loading) return <Loading />;
  return (
    <div className="relative py-24">
      <TransparentTitle className="absolute top-16 right-0 -z-10">
        News
      </TransparentTitle>

      <Section>
        <div>
          <div className="flex items-center">
            <SectionTitle big>
              Nos <span>Annonces</span>
            </SectionTitle>

            <div className="ml-auto flex gap-6">
              <button className="size-11 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <ArrowLeft className="size-4" />
              </button>
              <button className="size-11 flex items-center justify-center rounded-full bg-primary text-white">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="font-medium text-2xl">
            Restez a la fleur de l’information
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-7">
          {news?.map((news) => (
            <ServiceBlock key={"news-block-" + news.id} {...news} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="xl" color="light">
            <span>Voir plus</span>
            <ArrowRight className="size-6" />
          </Button>
        </div>
      </Section>
    </div>
  );
}
