import { Button, Section, SectionTitle } from "@/components";
import Frame from "../frame";
import { ArrowRight, TickCircle } from "iconsax-react";
import { Link } from "react-router-dom";

export default function HR() {
  return (
    <Section>
      <SectionTitle>
        Gestion des
        <br /> <span>ressources humaines</span>
      </SectionTitle>

      <div className="grid grid-cols-2 mt-12">
        <div className="text-lg">
          <p>
            La formation en Gestion des Ressources Humaines (GRH) vise à
            développer les compétences nécessaires pour gérer efficacement le
            capital humain d'une organisation. Voici un court résumé de cette
            formation avec cinq avantages principaux :
          </p>

          <ul className="mt-9 space-y-2.5">
            <Li>Compréhension approfondie des pratiques RH</Li>
            <Li>Développement de compétences en leadership</Li>
            <Li>Adaptabilité aux besoins du marché du travail</Li>
            <Li>Gestion efficace des talents</Li>
            <Li>Amélioration de la culture organisationnelle</Li>
          </ul>

          <div className="mt-14">
            <Link to="/contact">
              <Button size="xl" div>
                <span>Souscrire</span>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Frame src="/images/c64fd660f757135abb8361f31312d977.png" />
        </div>
      </div>
    </Section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <TickCircle className="size-5 text-primary" />
      <div>{children}</div>
    </li>
  );
}
