import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <div className="overflow-clip relative">
      <Section>
        <div className="grid grid-cols-2 gap-14 pt-24">
          <div>
            <Polygon1 className="w-full -mt-28" />
          </div>

          <div>
            <SectionTitle>
              Notre <span>mission</span>
            </SectionTitle>

            <div className="text-lg text-body space-y-4 mt-4">
              <p>
                Devenir un leader sous régional en recrutant et en développant
                les meilleurs talents Camerounais et Africains, en construisant
                une relation personnelle et durable avec nos clients au Cameroun
                et dans la sous-région. Apporter notre contribution à la
                création de valeur pour le gouvernement est notre crédo
              </p>
            </div>

            <div className="mt-20">
              <Link to="/contact">
                <Button size="xl" div>
                  <span>{"Contactez-nous"}</span>
                  <ArrowRight className="size-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
