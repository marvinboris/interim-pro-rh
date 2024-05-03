import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import { FAQ } from "@types";
import React from "react";
import useFaq from "./hooks";
import Card from "./card";
import { ArrowLeft, ArrowRight } from "iconsax-react";

export default function Faq() {
  const { faq, loading } = useFaq();
  const [selected, setSelected] = React.useState<FAQ>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (faq?.length) setSelected(faq[0]);
  }, [faq]);

  if (loading) return <Loading />;
  return (
    <div className="relative pt-24">
      <TransparentTitle className="absolute top-0 right-0">
        FAQ
      </TransparentTitle>

      <Section>
        <SectionTitle big>
          Frequently
          <br />
          <span>asked questions</span>
        </SectionTitle>

        <div className="mt-14 gap-x-14 grid grid-cols-2">
          <div>
            {faq?.map((faq, index) => (
              <Card
                key={"faq-card-" + faq.id + "-" + index}
                index={index}
                selected={selected?.id === faq.id}
                onClick={() => {
                  setSelected(faq);
                  setCurrentIndex(index);
                }}
                {...faq}
              />
            ))}
          </div>

          <div className="rounded-lg bg-primary/5 pt-10 px-12 pb-3 relative">
            <div className="absolute bottom-4 right-4 text-base font-bold">
              {currentIndex + 1}/{faq?.length}
            </div>

            <div className="text-lg font-bold">{selected?.question}</div>

            <div className="h-px mt-9 mb-6 bg-neutral-200" />

            <div className="font-medium text-lg">{selected?.answer}</div>
          </div>

          <div className="mt-8 flex gap-6">
            <button className="size-11 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <ArrowLeft className="size-4" />
            </button>
            <button className="size-11 flex items-center justify-center rounded-full bg-primary text-white">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
