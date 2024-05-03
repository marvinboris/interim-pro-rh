import { Header } from "@/components";
import Who from "./ui/who";
import Vision from "./ui/vision";
import Mission from "./ui/mission";
import Team from "./ui/team";

export function PageAbout() {
  return (
    <>
      <Header>A propos de nous</Header>
      <Who />
      <Mission />
      <Vision />
      <Team />
    </>
  );
}
