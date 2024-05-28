import { cn } from "@/utils";
import { Job } from "@types";
import { Bookmark, Calendar, Location, Moneys } from "iconsax-react";

export default function Block({
  id,
  company,
  name,
  salaryHigh,
  salaryLow,
  location,
  contract,
  responsibilities,
  selected,
  onClick,
}: Job & { selected?: boolean; onClick?: () => void }) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl border p-5 pb-10 cursor-pointer",
        selected ? "border-primary/5" : "border-neutral-200"
      )}
      onClick={onClick}
    >
      <div className="flex items-end">
        <div>
          <div className="text-xl font-bold">{name}</div>
          <div className="text-sm text-neutral-400">{company}</div>
        </div>

        <div className="size-10 ml-auto bg-stone-50 border border-neutral-100 rounded flex items-center justify-center">
          <Bookmark className="size-5" />
        </div>
      </div>

      <div className="mt-6 flex gap-2 *:bg-stone-50 *:h-8 text-xs font-bold *:flex *:items-center *:rounded-md *:gap-2.5 *:px-2.5">
        <div className="text-primary !bg-primary/5">
          <Moneys className="size-3.5" />
          <span>
            {salaryLow} - {salaryHigh} XAF
          </span>
        </div>
        <div>
          <Location className="size-3.5" />
          <span>{location}</span>
        </div>
        <div>
          <Calendar className="size-3.5" />
          <span>{contract}</span>
        </div>
      </div>

      <div className="mt-3.5">
        {responsibilities
          .filter((_, i) => i < 3)
          .map((item) => (
            <Li key={"job-block-responsibility" + id + "-" + item}>{item}</Li>
          ))}
      </div>
    </div>
  );
}

const Li = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex items-center gap-1">
    <div className="overflow-clip">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.90625 7.42196C3.79959 7.42196 3.69292 7.38112 3.61167 7.29987L1.78875 5.477C1.62584 5.31408 1.62584 5.05071 1.78875 4.88783C1.95167 4.72492 2.215 4.72492 2.37792 4.88783L3.90625 6.41617L7.62208 2.70031C7.785 2.5374 8.04833 2.5374 8.21125 2.70031C8.37417 2.86323 8.37417 3.12656 8.21125 3.28948L4.20083 7.29987C4.11959 7.38112 4.01292 7.42196 3.90625 7.42196Z"
          fill="#0050C7"
        />
      </svg>
    </div>

    <div className="truncate flex-1">{children}</div>
  </div>
);
