import { Work } from "react-iconly";
import { cn } from "@/utils";

export default function Cards() {
  return (
    <div className="grid grid-cols-3 gap-3.5">
      <Card type="companies" value={20} />
      <Card type="applicants" value={"05"} />
      <Card type="jobs" value={34} />
    </div>
  );
}

function Card({
  type,
  value,
}: {
  type: "companies" | "applicants" | "jobs";
  value: string | number;
}) {
  const Icon =
    type === "applicants" ? CalendarTime : type === "jobs" ? Work : () => null;

  return (
    <div
      className={cn(
        "rounded-xl text-white bg-gradient-to-r p-5 pb-6 relative",
        {
          companies: "from-[#50AA46] to-[#8AC340]",
          applicants: "from-[#406DC3] to-[#024BA0]",
          jobs: "from-[#7E39EF] to-[#213189]",
        }[type]
      )}
    >
      <Ellipsis className="absolute size-20 bottom-2 right-2" />

      <Icon className="absolute size-10 bottom-3 right-4 text-white/20" />

      <header className="text-sm font-semibold">
        <div>
          {
            {
              companies: "Total companies",
              applicants: "Total applicants",
              jobs: "Total jobs",
            }[type]
          }
          .
        </div>

        <div className="w-9 h-1 mt-4 bg-white/20 rounded-full" />
      </header>

      <div className="text-3xl font-bold mt-5">{value}</div>
    </div>
  );
}

function Ellipsis(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="70"
      height="67"
      viewBox="0 0 70 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M69.1816 9.2551C61.1632 3.18797 51.2721 0.122721 41.228 0.592265C31.1838 1.0618 21.6219 5.03644 14.2044 11.8252C6.78698 18.6139 1.98317 27.7874 0.628163 37.7507C-0.726847 47.7141 1.45263 57.8373 6.78769 66.3604L15.1999 61.0947C11.0962 54.5388 9.41972 46.752 10.462 39.0881C11.5043 31.4243 15.1994 24.368 20.9049 19.1461C26.6104 13.9243 33.9655 10.867 41.6914 10.5058C49.4174 10.1446 57.0256 12.5024 63.1934 17.1693L69.1816 9.2551Z"
        fill="url(#paint0_linear_445_326)"
        fill-opacity="0.09"
      />
      <defs>
        <linearGradient
          id="paint0_linear_445_326"
          x1="6.5"
          y1="59"
          x2="58.5"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#1C1C1F" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CalendarTime(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M7.05078 15.7718H33.2147"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.0135 5V9.78715"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.2589 5V9.78715"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.2212 18.94V14.0508C33.234 9.67715 30.5795 7.29655 26.295 7.29655H13.9785C9.7054 7.29655 7.03776 9.67715 7.03776 14.0508V27.2155C7.03776 31.6572 9.7054 34.0928 13.9785 34.0928H17.5623"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.6435 28.5637C34.6435 32.1183 31.7618 35 28.2055 35C24.6508 35 21.7692 32.1183 21.7692 28.5637C21.7692 25.009 24.6508 22.1257 28.2055 22.1257C31.7618 22.1257 34.6435 25.009 34.6435 28.5637Z"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.205 30.2367L28.1698 29.0203V26.4047"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.6165 21.569H13.6328"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.6165 27.3633H13.6328"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.7298 21.569H19.7461"
          stroke="currentColor"
          stroke-width="2.4375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
