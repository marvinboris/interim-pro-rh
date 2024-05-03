import { Button } from "@/components";
import { cn } from "@/utils";
import { Service } from "@types";
import { Iconly, Send } from "react-iconly";
import { Link } from "react-router-dom";

export default function Block({
  description,
  icon: Icon,
  index,
  link,
  name,
}: Service & { icon: typeof Iconly; index: number }) {
  return (
    <div className="border border-neutral-200 rounded-xl bg-white p-6 pr-16 overflow-clip relative transition-all duration-100 hover:shadow-lg">
      <div
        className={cn(
          "opacity-20 absolute -bottom-0 right-0 -rotate-[20deg] origin-top-right",
          [
            "text-primary",
            "text-secondary",
            "text-danger",
            "text-body",
            "text-like",
          ][index % 5]
        )}
      >
        <Icon size={98} />
      </div>

      <div className="font-bold">{name}</div>

      <div className="my-4 h-px bg-neutral-200" />

      <p className="text-body line-clamp-3 text-sm">{description}</p>

      <div className="mt-4">
        <Link to={link}>
          <Button color="white">
            <span>Voir plus</span>
            <Send size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
