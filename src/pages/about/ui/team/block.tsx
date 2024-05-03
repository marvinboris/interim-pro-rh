import { TeamMember } from "@types";
import Facebook from "./icons/facebook";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";
import { Transition } from "@/components";
import { cn } from "@/utils";

export default function Block({
  job,
  name,
  photo,
  facebook,
  linkedin,
  twitter,
  index,
}: TeamMember & { index: number }) {
  return (
    <div
      className={cn(
        "border-4 rounded-[32px] bg-white flex flex-col items-center text-center relative px-10 pt-8 pb-16",
        index !== 1 ? "border-primary/10" : "border-transparent"
      )}
    >
      <img
        src={photo}
        alt={name}
        className={cn("border-8 border-stone-100 rounded-full object-cover", index !== 1 ? "size-32" : "size-44")}
      />

      <div className="mt-9 text-xl font-bold">{name}</div>

      <div className="mt-5">{job}</div>

      <Transition show={index === 1}>
        <div className="absolute bottom-0 translate-y-1/2 rounded-full inline-flex p-5 gap-5 *:bg-primary *:rounded-full *:size-11 *:*:size-6 *:flex *:items-center *:justify-center text-white bg-stone-100">
          <a target="_blank" href={facebook}>
            <Facebook />
          </a>
          <a target="_blank" href={linkedin}>
            <Linkedin />
          </a>
          <a target="_blank" href={twitter}>
            <Twitter />
          </a>
        </div>
      </Transition>
    </div>
  );
}
