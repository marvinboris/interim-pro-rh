import React from "react";
import { Card } from "./type";

export default function useCards() {
  const [loading, setLoading] = React.useState(false);
  const [cards, setCards] = React.useState<Card[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);
      try {
        setCards([
          {
            title: `Bilan Des Compétences Et Bilan 
                        Professionnel`,
            body: `INTERIM PRO RH vous accompagne en vue d'avoir une meilleure connaissance de vos aptitudes et compétences, d'identifier vos talents et vos difficultés, de renforcer votre capital confiance, d'identifier vos valeurs et aspirations, de définir vos priorités, vos objectifs et vos projets professionnels, de mettre en place des dispositifs de développement personnel en rapport avec vos réels besoins, d'anticiper sur les besoins en formation, de planifier votre carrière professionnelle et votre insertion professionnelle.`,
          },
          {
            title: `Orientation Académique`,
            body: `Nous disposons d'une équipe d'experts et des outils sophistiqués pour accompagner les jeunes et les adultes à trouver leur voie, orienter leur parcours et favoriser leur intégration dans le monde professionnel. IP-RH vous propose un accompagnement et une orientation sur mesure.`,
          },
          {
            title: `Gestion Des Performances`,
            body: `INTERIM PRO RH vous accompagne en vue d'avoir une meilleure connaissance de vos aptitudes et compétences, d'identifier vos talents et vos difficultés, de renforcer votre capital confiance, d'identifier vos valeurs et aspirations, de définir vos priorités, vos objectifs et vos projets professionnels, de mettre en place des dispositifs de développement personnel en rapport avec vos réels besoins, d'anticiper sur les besoins en formation, de planifier votre carrière professionnelle et votre insertion professionnelle.`,
          },
          {
            title: `Gestion Prévisionnelle Des Emplois Et
            Des Compétences`,
            body: `Nous vous accompagnons à anticiper sur le devenir de votre entreprise en identifiant les besoins en développement des compétences et en mettant en place les conditions et outils nécessaires pour vous garantir le développement de vos activités.`,
          },
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { loading, cards };
}
