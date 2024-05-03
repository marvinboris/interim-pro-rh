import { Loading, Section } from "@/components";
import useCards from "./hooks";
import Block from "./block";

export default function Cards() {
  const { loading, cards } = useCards();

  if (loading) return <Loading />;
  return (
    <Section className="flex flex-wrap justify-center *:min-h-80 *:w-[calc((100%/3)-16px)] gap-4 pb-20">
      {cards?.map((card, index) => (
        <Block key={"card-" + card.body + "-" + index} {...card} />
      ))}
    </Section>
  );
}
