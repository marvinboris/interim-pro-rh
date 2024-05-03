import { Button, Header, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";

export function PageServiceInterim() {
  return (
    <>
      <Header>Intérim et placement des travailleurs</Header>

      <div className="overflow-clip relative">
        <Section>
          <div className="grid grid-cols-2 gap-14 pt-24">
            <div>
              <SectionTitle>
                Intérim et placement
                <br />
                <span>des travailleurs</span>
              </SectionTitle>

              <div className="text-lg text-body space-y-4 mt-4">
                <p>
                  Contactez-nous et confiez-nous votre activité : <br />
                  <br />
                  INTERIM PRO RH mobilise la main d’œuvre pour assurer votre
                  production sans que vous ne soyez engagés vis-à-vis des
                  salariés par un contrat de travail. Par ailleurs, notre
                  expertise et notre expérience en matière de Sous-traitance
                  vous permettent recentrer sur votre cœur de métier et sur vos
                  activités stratégiques. Nous assumons les charges légales,
                  matérielles et logistiques liés à vos activités.Baissez les
                  couts de vos charges et améliorez la qualité de vos services
                  en nous confiant votre activité. Gérez avec plus de souplesse
                  et de fluidité vos activités.
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
