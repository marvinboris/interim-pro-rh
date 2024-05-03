import { Button, Section, SectionTitle, TransparentTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Svg from "./svg";

export default function Career() {
  return (
    <Section>
      <TransparentTitle>Carrière</TransparentTitle>

      <div className="grid grid-cols-2 gap-14">
        <div className="pt-12">
          <SectionTitle>
            Votre <span>Carrière</span>
          </SectionTitle>

          <div className="text-lg text-body space-y-4 mt-6">
            <p>
              Plus qu’une agence d’intérim, nous sommes un partenaire qui vous
              écoute, vous conseille et vous oriente vers les meilleures
              opportunités. Que vous soyez à la recherche d’un CDI, d’un CDD,
              d’une mission temporaire ou d’une formation qualifiante, nous vous
              proposons des offres adaptées à votre profil et à vos attentes.
            </p>
          </div>

          <div className="mt-20">
            <Button size="xl">
              <span>{"Lire la suite"}</span>
              <ArrowRight className="size-6" />
            </Button>
          </div>
        </div>

        <div className="overflow-clip max-h-[432px]">
          <Svg className="-mt-52 -ml-28" />
        </div>
      </div>
    </Section>
  );
}
