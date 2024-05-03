import { Country } from "@types";
import names from "../assets/countries/names.json";
import phone from "../assets/countries/phone.json";

export const getCountries = async () => {
  let countries: Country[];

  try {
    countries = Object.keys(phone).map((key) => ({
      country: key,
      code: phone[key as keyof typeof phone],
      name: names[key as keyof typeof names],
    }));
    countries = countries.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    countries = [];
    console.log(error);
  }

  return countries;
};
