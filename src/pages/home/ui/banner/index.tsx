import { Add, ArrowDown2, Briefcase, SearchNormal1 } from "iconsax-react";
import Right from "./right";
import { Button } from "@/components";
import Avatar from "./avatar";

export default function Banner() {
  return (
    <div className="pt-32 pb-4 container mx-auto flex relative">
      <div>
        <h1 className="font-bold text-6xl/tight">
          Unlock your next{" "}
          <span className="text-primary">career opportunity</span> today
        </h1>

        <p className="w-3/5 mt-5 text-xl">
          Find your dream job today. At Interim Pro RH discover opportunities
          that match your skills and ambitions.
        </p>

        <div className="flex gap-6 mt-10">
          <Button size="xl">
            <SearchNormal1 className="size-6" />
            <span>{"Am looking for job"}</span>
          </Button>

          <Button color="white" size="xl">
            <Briefcase className="size-6" />
            <span>{"Am an employer"}</span>
          </Button>
        </div>

        <div className="mt-14 flex items-center gap-7">
          <div className="flex ml-7 *:-ml-7">
            <Avatar src="/images/0bd02487ba65a96292a4154b1a405fcb.png" />
            <Avatar src="/images/5d55f6566fe416e0417b34d33bb58ff0.png" />
            <Avatar src="/images/90f283e3cdc8601ec6b423aa57f39e92.png" />
            <Avatar src="/images/b4630016668852ac424ad68e48beadca.png" />
            <button className="size-14 rounded-full flex items-center justify-center bg-primary text-white">
              <Add className="size-7" />
            </button>
          </div>

          <p className="text-body">
            More than <span className="font-bold">12,000 thousand</span> users
            <br />
            trust our website
          </p>
        </div>
      </div>

      <Right />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <button className="bg-primary text-white w-8 h-14 rounded-full flex items-center flex-col justify-end p-2 border border-white/40">
          <ArrowDown2 className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
