import { Request } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getRequests = async () => {
  const requests: Request[] = [
    {
      id: uuidv4(),
      created: "2023-09-18",
      company: "Briluce Services SA",
      contract: "CDD",
      location: "Douala - CM",
      status: 0,
    },
    {
      id: uuidv4(),
      created: "2023-09-18",
      company: "Esmave shopping SARL",
      contract: "CDD",
      location: "Douala - CM",
      status: 1,
    },
    {
      id: uuidv4(),
      created: "2023-09-18",
      company: "Media production",
      contract: "CDD",
      location: "Douala - CM",
      status: 0,
    },
    {
      id: uuidv4(),
      created: "2023-09-18",
      company: "Interim PRO RH",
      contract: "CDD",
      location: "Douala - CM",
      status: 2,
    },
    {
      id: uuidv4(),
      created: "2023-09-18",
      company: "Orange Cameroun S.A",
      contract: "CDD",
      location: "Douala - CM",
      status: 0,
    },
  ];

  return requests;
};
