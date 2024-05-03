import { Testimony } from "@types";
import { v4 as uuidv4 } from "uuid";

export const getTestimonies = async () => {
  return [
    {
      id: uuidv4(),
      name: "Jones Mc Lawren",
      photo: "/images/ca18ad8cd3a2db241b4026085fe0b420.png",
      rate: 4,
      body: "On all the platforms, this is by far the best when it comes to selling of cars. Smooth  and transparent service.",
    },
    {
      id: uuidv4(),
      name: "Oslov Hirikov",
      photo: "/images/44181e5b1c738b716816b03f39f524b0.png",
      rate: 4,
      body: "On all the platforms, this is by far the best when it comes to selling of cars. Smooth  and transparent service.",
    },
    {
      id: uuidv4(),
      name: "Anna Mani",
      photo: "/images/7f3b992ab5e49ca12ec7ad4a230947da.png",
      rate: 4,
      body: "On all the platforms, this is by far the best when it comes to selling of cars. Smooth  and transparent service.",
    },
    {
      id: uuidv4(),
      name: "Trevor Eva",
      photo: "/images/7f3b992ab5e49ca12ec7ad4a230947da.png",
      rate: 4,
      body: "On all the platforms, this is by far the best when it comes to selling of cars. Smooth  and transparent service.",
    },
  ] satisfies Testimony[];
};
