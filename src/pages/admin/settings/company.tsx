import { Input, Switch } from "@/components";
import { Work } from "react-iconly";
import EditButton from "./ui/edit-button";

export default function CompanySettings() {
  return (
    <div className="bg-white rounded-3xl border border-neutral-200 px-10 pt-9 pb-20">
      <header className="border-b border-neutral-200 pb-4 flex items-center gap-6">
        <div className="text-neutral-200">
          <Work size={48} />
        </div>

        <div className="text-2xl font-bold">Company settings</div>
      </header>

      <form className="mt-12 grid grid-cols-2 gap-5">
        <Input
          name="companyName"
          label="Company name"
          append={<EditButton />}
        />
        <Input name="companyEmail" type="email" label="Email address" />
        <Input name="companyPhone" type="tel" label="Company phone" />
        <Input name="companyLocation" label="Location" />
        <Input
          addon={
            <div className="mx-3 text-left">
              <div className="flex gap-1.5 items-center">
                <div className="font-medium text-base/none">Coming soon</div>
                <div className="size-1 bg-dislike rounded-full mt-1" />
                <div className="text-xs text-dislike font-medium mt-1">OFFLINE</div>
              </div>

              <div className="text-neutral-500 font-medium text-[10px]">
                Website offline
              </div>
            </div>
          }
          readOnly
          label="Maintenance mode"
          append={<Switch />}
        />
      </form>
    </div>
  );
}
