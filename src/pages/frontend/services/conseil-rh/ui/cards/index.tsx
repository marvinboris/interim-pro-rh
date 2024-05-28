import { Loading, Section } from "@/components";
import Block from "./block";
import { useHR } from "@/hooks";

export default function Cards() {
  const { loading, skills } = useHR();

  if (loading) return <Loading />;
  return (
    <Section className="flex flex-wrap justify-center *:min-h-80 *:w-[calc((100%/3)-16px)] gap-4 pb-20">
      {skills?.map((skill, index) => (
        <Block key={"skill-" + skill.id + "-" + index} {...skill} />
      ))}
    </Section>
  );
}
