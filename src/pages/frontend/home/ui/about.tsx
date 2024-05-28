import {
  Button,
  Polygon1,
  Section,
  SectionTitle,
  TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Section>
      <TransparentTitle className="text-center">A propos</TransparentTitle>

      <div className="grid grid-cols-2 gap-14 mt-24">
        <div>
          <Polygon1 className="w-full -mt-28" />
        </div>

        <div>
          <SectionTitle>
            A propos <span>de nous</span>
          </SectionTitle>

          <div className="text-lg text-body space-y-4 mt-4">
            <p>
              <span className="font-bold">INTERIM PRO RH</span> est une
              entreprise fondée par un groupe de cadres de divers secteurs
              d’activités confrontés tout au long de leurs différentes carrières
              aux problématiques ressources humaines.
            </p>

            <p>
              <span className="font-bold">INTERIM PRO RH</span> vise à s’établir
              comme un fournisseur de premier plan d’employés pour diverses
              organisations quelque soit leur secteur d’activité.
            </p>
          </div>

          <div className="mt-20">
            <Link to="/about">
              <Button size="xl" div>
                <span>{"Lire la suite"}</span>
                <ArrowRight className="size-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
