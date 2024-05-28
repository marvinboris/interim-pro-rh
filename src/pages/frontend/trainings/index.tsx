import { Header } from "@/components";
import HR from "./ui/hr";
import Accounting from "./ui/accounting";
import Quality from "./ui/quality";
import Communication from "./ui/communication";
import Logistics from "./ui/logistics";
import Law from "./ui/law";

export function PageTrainings() {
  return (
    <>
      <Header>Nos formations</Header>
      <div className="*:pt-20 pb-20">
        <HR />
        <Accounting />
        <Logistics />
        <Quality />
        <Law />
        <Communication />
      </div>
    </>
  );
}
