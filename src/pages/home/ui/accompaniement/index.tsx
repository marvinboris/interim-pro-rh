import { Button, Section, SectionTitle, TransparentTitle } from "@/components";
import Polygon from "./polygon";
import { ArrowRight } from "iconsax-react";

export default function Accompaniement() {
  return (
    <div className="overflow-clip">
      <Section>
        <TransparentTitle className="ml-56">Accompagnement</TransparentTitle>

        <div className="grid grid-cols-2 gap-14 mt-14">
          <div>
            <Polygon />
          </div>

          <div className="pt-12">
            <SectionTitle>
              Nous vous <br />
              <span>accompagnons</span>
            </SectionTitle>

            <div className="text-lg text-body space-y-4 mt-6">
              <p>
                INTERIM PRO RH réalise l’audit de votre structure ou
                l’évaluation de votre projet d’entreprise. Notre démarche permet
                de s’assurer, avec la participation des acteurs, que les
                objectifs fixés sont atteints et de porter un regard sur les
                actions, sur les pratiques qui ont été mises en œuvre pour les
                atteindre afin de proposer des actions d’amélioration.
              </p>
            </div>

            <div className="mt-20">
              <Button size="xl">
                <span>{"Lire la suite"}</span>
                <ArrowRight className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
