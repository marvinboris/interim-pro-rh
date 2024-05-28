import { cn } from "@/utils";
import moment, { Moment } from "moment";
import React from "react";

export default function Calendar() {
  const days = React.useMemo(() => {
    const startOfWeek = moment().startOf("week").add(1, "days");
    const endOfWeek = startOfWeek.clone().add(6, "days");

    const days: Moment[] = [];

    for (
      let day = startOfWeek.clone();
      day.isSameOrBefore(endOfWeek);
      day.add(1, "days")
    ) {
      days.push(day.clone());
    }

    return days;
  }, []);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white relative px-7 py-8">
      <Icon className="absolute top-5 right-4" />

      <div className="text-lg">
        <span className="font-bold">Today</span>, {moment().format("LL")}
      </div>
      <div className="font-medium text-neutral-500">Calendar</div>

      <div className="w-20 h-px bg-neutral-200 rounded-full my-5" />

      <div className="flex gap-2 justify-between">
        {days.map((day) => (
          <Day key={day.toISOString()} day={day} />
        ))}
      </div>
    </div>
  );
}

function Day({ day }: { day: Moment }) {
  const today = moment().isSame(day, "day");

  return (
    <div className="flex flex-col items-center relative">
      {today ? (
        <div className="absolute size-2 border border-white bg-lime-400 rounded-full top-0.5 right-0.5" />
      ) : null}

      <div
        className={cn(
          today
            ? "size-9 border-4 border-like bg-white mb-1.5"
            : "size-8 bg-like/10 mb-2.5",
          "flex items-center justify-center text-xs font-semibold rounded-full"
        )}
      >
        {day.format("D")}
      </div>

      <div className={cn("text-[10px]", { "text-like font-bold": today })}>
        {day.format("ddd")}
      </div>
    </div>
  );
}

function Icon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <path
          d="M44.3925 8.25V16.3948"
          stroke="#008918"
          stroke-width="4.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.3986 8.25V16.3948"
          stroke="#008918"
          stroke-width="4.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.8756 12.1602H23.9196C16.6498 12.1602 12.1118 16.2085 12.1118 23.6495V46.0504C12.1118 53.6093 16.6498 57.7511 23.9196 57.7511H44.8541C52.1455 57.7511 56.6621 53.6814 56.6621 46.2377V23.6495C56.6833 16.2085 52.1669 12.1602 44.8756 12.1602Z"
          stroke="#008918"
          stroke-width="4.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M43.2578 29.9546V45.3343"
          stroke="#008918"
          stroke-width="4.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.6106 37.2721C31.8741 37.2721 33.707 35.4365 33.707 33.173C33.707 30.9119 31.8741 29.0763 29.6106 29.0763C27.3469 29.0763 25.5114 30.9119 25.5114 33.173"
          stroke="#008918"
          stroke-width="4.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.5114 41.3666C25.5114 43.6301 27.3469 45.4658 29.6106 45.4658C31.8714 45.4658 33.707 43.6301 33.707 41.3666C33.707 39.1028 31.8714 37.2699 29.6106 37.2699"
          stroke="#008918"
          stroke-width="4.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
