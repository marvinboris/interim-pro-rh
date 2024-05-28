import { cn } from "@/utils";
import { FAQ } from "@types";
import { Add, Minus } from "iconsax-react";

export default function Card({
  index,
  question,
  selected,
  onClick,
}: FAQ & { index: number; selected?: boolean; onClick?: () => void }) {
  return (
    <div
      className={cn(
        "py-4 pl-8 pr-11 border-b-2 border-neutral-200 flex gap-6 cursor-pointer",
        {
          "bg-primary/5": selected,
        }
      )}
      onClick={onClick}
    >
      <div className="font-bold text-xl">{index + 1}.</div>
      <div className={cn("text-lg", { "font-bold": selected })}>{question}</div>
      <div
        className={cn(
          "self-center ml-auto",
          selected ? "text-primary" : "text-neutral-200"
        )}
      >
        {selected ? (
          <Minus variant="Bulk" className="size-5" />
        ) : (
          <Add variant="Bulk" className="size-5" />
        )}
      </div>
    </div>
  );
}
