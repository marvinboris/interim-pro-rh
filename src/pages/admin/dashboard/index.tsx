import Applications from "./applications";
import Calendar from "./calendar";
import Cards from "./cards";
import Donut from "./donut";

export function PageAdminDashboard() {
  return (
    <div className="grid grid-cols-5 gap-5 flex-1">
      <div className="col-span-3 space-y-7">
        <Cards />

        <Applications />
      </div>
      <div className="col-span-2 space-y-5">
        <Calendar />

        <Donut />
      </div>
    </div>
  );
}
