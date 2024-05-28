import { Company, CompanyType } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getCompanies = async () => {
  const companies: Company[] = [
    {
      id: uuidv4(),
      name: "Eneo Cameroon",
      email: "contact@eneo.cm",
      phone: "+237699834872",
      createdIn: "2003",
      contactPerson: "Mr. James Al..",
    },
    {
      id: uuidv4(),
      name: "Orange Cameroon",
      email: "contact@orange.cm",
      phone: "+237699834872",
      createdIn: "1995",
      contactPerson: "John Aeil.",
    },
    {
      id: uuidv4(),
      name: "Emploi services",
      email: "contact@ems.cm",
      phone: "+237699834872",
      createdIn: "2002",
      contactPerson: "Madline Amee",
    },
    {
      id: uuidv4(),
      name: "Interim Pro RH",
      email: "contact@intr.cm",
      phone: "+237699834872",
      createdIn: "2006",
      contactPerson: "Joska molali",
    },
    {
      id: uuidv4(),
      name: "Santa Lucia",
      email: "contact@santalu.cm",
      phone: "+237699834872",
      createdIn: "2008",
      contactPerson: "Nomeal aind",
    },
    {
      id: uuidv4(),
      name: "Mahima",
      email: "contact@mh.cm",
      phone: "+237699834872",
      createdIn: "2003",
      contactPerson: "Kamdem Joseph",
    },
    {
      id: uuidv4(),
      name: "Super U",
      email: "contact@superu.cm",
      phone: "+237699834872",
      createdIn: "1994",
      contactPerson: "Alain Bordau",
    },
  ];

  return companies;
};

export const getCompanyTypes = async () => {
  const companyTypes: CompanyType[] = [
    {
      id: uuidv4(),
      name: "SARL",
    },
  ];

  return companyTypes;
};
