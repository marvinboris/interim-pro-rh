import { Button, Header, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";

export function PageServiceEngineeringTraining() {
  return (
    <>
      <Header>Ingénierie de formation</Header>

      <div className="overflow-clip relative">
        <Section>
          <div className="grid grid-cols-2 gap-14 pt-24">
            <div>
              <SectionTitle>
                Ingénierie de <span>formation</span>
              </SectionTitle>

              <div className="text-lg text-body space-y-4 mt-4">
                <p>
                  La formation professionnelle est un levier indispensable dans
                  le maintien des compétences. Elle consiste à acquérir, à
                  maintenir ou à améliorer les différents savoirs :
                  savoir-faire, savoir-être. Et ce, afin de répondre aux besoins
                  en compétences et au développement qui l’accompagne.Pour une
                  entreprise, elle vise à faire évoluer les compétences et les
                  performances des employés, par conséquent, sa croissance
                  économique.
                </p>

                <p>
                  INTERIM PRO RH met en œuvre des modules de formation et les
                  propose aux apprenants. Nous relevons les besoins en formation
                  des apprenants, et formulons des objectifs en fonction de ces
                  besoins, en tenant compte des contraintes liées à l’activité
                  professionnelle, du contexte et du mécanisme autour de ladite
                  activité.
                </p>
              </div>

              <div className="mt-20">
                <Button size="xl">
                  <span>{"Contactez-nous"}</span>
                  <ArrowRight className="size-6" />
                </Button>
              </div>
            </div>

            <div>
              <Polygon1 className="w-full -mt-28" />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
