import { Diploma } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getDiplomae = async () => {
  const diplomae: Diploma[] = [
    { id: uuidv4(), name: "Bacc + 1" },
    { id: uuidv4(), name: "Bacc + 3" },
    { id: uuidv4(), name: "Niveau Secondaire" },
  ];

  return diplomae;
};
