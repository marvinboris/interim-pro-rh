import {
  Calendar,
  Document,
  Location,
  Moneys,
  TickCircle,
} from "iconsax-react";
import { usePageSearchContext } from "../context";
import { Button } from "@/components";
import { Send } from "react-iconly";
import React from "react";
import { cn } from "@/utils";

export default function Details() {
  const { selected } = usePageSearchContext();
  if (!selected) return null;

  const allTabs = ["Responsabilités", "Qualifications", "Avantages"] as const;
  const [activeTab, setActiveTab] = React.useState<(typeof allTabs)[number]>(
    allTabs[0]
  );

  const {
    company,
    name,
    advantages,
    contract,
    created,
    experience,
    languages,
    location,
    qualifications,
    responsibilities,
    description,
    salaryHigh,
    salaryLow,
  } = selected;

  return (
    <div className="border border-neutral-200 bg-white rounded-3xl *:p-6 divide-y divide-neutral-200">
      <header>
        <div className="flex items-start gap-4">
          <div className="size-16 rounded-lg bg-stone-50"></div>

          <div>
            <div className="font-bold text-3xl">{company}</div>
          </div>
        </div>

        <div className="mt-3 flex gap-2 *:bg-stone-50 *:h-8 text-xs font-bold *:flex *:items-center *:rounded-md *:gap-2.5 *:px-2.5">
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
          <div>
            <Calendar className="size-3.5" />
            <span>{created}</span>
          </div>
          <div>
            <Calendar className="size-3.5" />
            <span className="uppercase">{languages.join(" & ")}</span>
          </div>
        </div>

        <div className="mt-6">
          <Button>
            <span>Postuler</span>
            <Send size={20} />
          </Button>
        </div>
      </header>

      <main>
        <div className="font-bold text-xl">{name}</div>

        <div className="mt-3.5 text-sm">{description}</div>

        <div className="mt-8 flex gap-3.5 *:h-11 text-sm font-bold *:flex *:items-center *:rounded-md *:gap-2.5 *:px-2.5">
          {allTabs.map((tab) => (
            <div
              className={cn(
                "cursor-pointer",
                activeTab === tab
                  ? "text-primary !bg-primary/5 relative"
                  : "bg-stone-50"
              )}
              onClick={() => setActiveTab(tab)}
            >
              {activeTab === tab ? (
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                  <TickCircle variant="Bold" className="size-5 text-primary" />
                </div>
              ) : null}
              <Document className="size-5" />
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-6">
          {
            {
              Responsabilités: responsibilities.map((responsibility, index) => (
                <Li key={"job-responsibility-" + responsibility + "-" + index}>
                  {responsibility}
                </Li>
              )),
              Qualifications: qualifications.map((qualification, index) => (
                <Li key={"job-qualification-" + qualification + "-" + index}>
                  {qualification}
                </Li>
              )),
              Avantages: advantages.map((advantage, index) => (
                <Li key={"job-advantage-" + advantage + "-" + index}>
                  {advantage}
                </Li>
              )),
            }[activeTab]
          }
        </div>

        <div className="mt-9 font-bold text-xl">Expérience</div>

        <div className="mt-4 space-y-3">
          {experience.map((experience, index) => (
            <Li key={"job-experience-" + experience + "-" + index} green>
              {experience}
            </Li>
          ))}
        </div>
      </main>
    </div>
  );
}

const Li = ({
  children,
  green,
}: {
  children?: React.ReactNode;
  green?: boolean;
}) => {
  return (
    <div className="flex gap-2.5 text-sm">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        className={cn("flex-none", green ? "text-like" : "text-zinc-800")}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="11" fill="currentColor" fill-opacity="0.2" />
        <path
          d="M14.5 8.59375L9.6875 13.4062L7.5 11.2188"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div>{children}</div>
    </div>
  );
};
