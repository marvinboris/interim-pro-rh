import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import useServices from "./hooks";
import Block from "./block";
import { TwoUsers } from "react-iconly";

export default function Services() {
  const { services, loading } = useServices();

  if (loading) return <Loading />;
  return (
    <Section>
      <TransparentTitle className="text-center">Nos services</TransparentTitle>

      <SectionTitle className="text-center">
        Nos <span>services</span>
      </SectionTitle>

      <div className="mt-16 grid grid-cols-3 gap-x-6 gap-y-9">
        {services?.map((service, index) => (
          <Block
            key={"service-block-" + service.id + "-" + index}
            icon={[TwoUsers, TwoUsers, TwoUsers, TwoUsers, TwoUsers][index]}
            index={index}
            {...service}
          />
        ))}
      </div>
    </Section>
  );
}
