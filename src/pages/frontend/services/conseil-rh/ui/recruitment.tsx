import {
  Button,
  Polygon1,
  Section,
  SectionTitle,
  TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";

export default function Recruitment() {
  return (
    <div className="overflow-clip relative">
      <Section>
        <TransparentTitle className="absolute top-0 bottom-0 translate-x-1/2 truncate">
          01
        </TransparentTitle>

        <div className="grid grid-cols-2 gap-14 pt-24">
          <div>
            <SectionTitle>
              Recrutement
            </SectionTitle>

            <div className="text-lg text-body space-y-4 mt-4">
              <p>
                IP-RH dispose d’une approche de recrutement qui s’appuie sur une
                démarche qualité, garantissant une entière transparence et
                objectivité à chaque étape du recrutement. Le talent pouvant
                revêtir de nombreuses formes, nous promouvons avant tout
                la compétence et l’éthique dans nos rapports, tout en traitant
                le candidat avec respect et équité. 
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
  );
}
