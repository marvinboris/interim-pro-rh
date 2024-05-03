import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";

export default function Training() {
  return (
    <div className="overflow-clip relative">
      <Section>
        <div className="grid grid-cols-2 gap-14 pt-24">
          <div>
            <Polygon1 className="w-full -mt-28" />
          </div>

          <div>
            <SectionTitle>Formation</SectionTitle>

            <div className="text-lg text-body space-y-4 mt-4">
              <p>
                Notre équipe d’experts vous accompagne dans l’établissement de
                la politique de développement des compétences de vos salariés et
                contribue à sa mise en œuvre par des formations en relation avec
                la stratégie globale de l’entreprise. INTERIM PRO RH concilie
                les attentes et demandes des salariés avec ceux de l’entreprise,
                en se référant à leur hiérarchie. A travers des entretiens
                individuels, nous évaluons la progression et les objectifs
                d’évolution des candidats.
              </p>
            </div>

            <div className="mt-20">
              <Button size="xl">
                <span>{"Contactez-nous"}</span>
                <ArrowRight className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
