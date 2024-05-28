import { SkillHR } from "@types";

export default function Block({ description, name }: SkillHR) {
  return (
    <div className="bg-white rounded-[20px] border-4 border-transparent hover:border-primary/5 p-5 text-sm pb-9">
      <div className="h-11 flex items-end font-bold">{name}</div>

      <div className="my-4 h-px rounded-full bg-neutral-200" />

      <p>{description}</p>
    </div>
  );
}
