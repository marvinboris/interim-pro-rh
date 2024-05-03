import { Service } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getServices = async () => {
  return [
    {
      id: uuidv4(),
      name: "Audit Organisationnel et RH",
      description:
        "INTERIM PRO RH réalise l’audit de votre structure ou l’évaluation de votre projet d’entreprise. Notre démarche permet de s’assurer, avec la participation des acteurs,",
      body: "",
      link: "/services/conseil-rh",
      slug: "conseil-rh",
    },
    {
      id: uuidv4(),
      name: "Ingénierie de formation",
      description:
        "La formation professionnelle est un levier indispensable dans le maintien des compétences. Elle consiste à acquérir, à maintenir ou à améliorer les différents savoirs : savoir-faire, savoir-être. Et ce, afin de répondre aux besoins en compétences et au développement qui l’accompagne.",
      body: "",
      link: "/services/ingenierie-de-formation",
      slug: "ingenierie-de-formation",
    },
    {
      id: uuidv4(),
      name: "Orientation académique",
      description:
        "Nous disposons d’une équipe d’experts et des outils sophistiqués pour accompagner les jeunes et les adultes à trouver leur voie, orienter leur parcours et favoriser leur intégration dans le monde professionnel. IP-RH vous propose un accompagnement et une orientation sur mesure.",
      body: "",
      link: "/services/orientation-academique",
      slug: "orientation-academique",
    },
    {
      id: uuidv4(),
      name: "Intérim et placement des travailleurs",
      description:
        "La formation professionnelle est un levier indispensable dans le maintien des compétences. Elle consiste à acquérir, à maintenir ou à améliorer les différents savoirs : savoir-faire, savoir-être. Et ce, afin de répondre aux besoins en compétences et au développement qui l’accompagne.",
      body: "",
      link: "/services/interim-et-placement-des-travailleurs",
      slug: "interim-et-placement-des-travailleurs",
    },
    {
      id: uuidv4(),
      name: "Mise à disposition du personnel",
      description:
        "La formation professionnelle est un levier indispensable dans le maintien des compétences. Elle consiste à acquérir, à maintenir ou à améliorer les différents savoirs : savoir-faire, savoir-être. Et ce, afin de répondre aux besoins en compétences et au développement qui l’accompagne.",
      body: "",
      link: "/services/mise-a-disposition-du-personnel",
      slug: "mise-a-disposition-du-personnel",
    },
  ] satisfies Service[];
};
