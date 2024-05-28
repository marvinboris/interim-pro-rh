import { Applicant } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getApplicants = async () => {
  const applicants: Applicant[] = [
    {
      id: uuidv4(),
      city: "Douala",
      degree: "Bacc + 3",
      experience: 4,
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: uuidv4(),
      city: "Yaounde",
      degree: "Niveau secondaire",
      experience: 4,
      firstName: "Marcello",
      lastName: "Iv",
    },
    {
      id: uuidv4(),
      city: "Yaounde",
      degree: "Bacc + 1",
      experience: 6,
      firstName: "Raskov",
      lastName: "Al",
    },
    {
      id: uuidv4(),
      city: "Bamenda",
      degree: "Bacc + 1",
      experience: 6,
      firstName: "Mendi",
      lastName: "Abot",
    },
    {
      id: uuidv4(),
      city: "Douala",
      degree: "Bacc + 1",
      experience: 8,
      firstName: "Caterine",
      lastName: "O",
    },
    {
      id: uuidv4(),
      city: "Buea",
      degree: "Bacc + 1",
      experience: 16,
      firstName: "Junior",
      lastName: "Go",
    },
    {
      id: uuidv4(),
      city: "Garoua",
      degree: "Bacc + 1",
      experience: 4,
      firstName: "Hiskilov",
      lastName: "Doe",
    },
  ];

  return applicants;
};
