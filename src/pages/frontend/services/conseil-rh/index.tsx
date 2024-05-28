import { Header } from "@/components";
import Recruitment from "./ui/recruitment";
import Training from "./ui/training";
import Skills from "./ui/skills";
import Cards from "./ui/cards";

export function PageServiceHR() {
  return (
    <div className="bg-stone-50">
      <Header>Conseil RH</Header>
      <Recruitment />
      <Training />
      <Skills />
      <Cards />
    </div>
  );
}
