import { Button, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import Frame from "../frame";
import { Link } from "react-router-dom";

export default function Accounting() {
  return (
    <Section>
      <div className="grid grid-cols-2">
        <div>
          <Frame src="/images/518fe64bd599e9cf9f44f3562c3ca322.png" />
        </div>

        <div>
          <SectionTitle>
            Comptabilité
            <br /> <span>& Finances</span>
          </SectionTitle>

          <p>
            Répondre aux besoins de recherche d'emploi et carrière des candidats
            individuels en les aidant à organiser leur recherche d'emploi au
            Cameroun et dans la sous-région.
          </p>

          <p>
            Avec notre système d'application en ligne, les candidats peuvent :
            candidater à un poste, déposer leur CV ou simplement laisser leur
            numéro de téléphone et / ou e-mail. Nous nous chargeons de les
            recontacter par la suite.
          </p>

          <div className="mt-11">
            <Link to="/contact">
              <Button size="xl" div>
                <span>Contactez-nous</span>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
