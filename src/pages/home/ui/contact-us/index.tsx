import {
  Button,
  CustomSelect,
  Input,
  Section,
  SectionTitle,
  TextArea,
} from "@/components";
import { Send } from "react-iconly";
import Block from "./block";

export default function ContactUs() {
  return (
    <Section className="pt-24">
      <SectionTitle big>
        Contactez <span>nous</span>
      </SectionTitle>

      <div className="mt-8 grid grid-cols-2 gap-14">
        <div className="pt-7">
          <div className="border border-neutral-200 rounded-2xl bg-stone-50 p-4 grid grid-cols-2 gap-y-4 gap-x-6">
            <Input label={"Votre nom"} name="name" defaultValue={"John Doe"} />
            <Input label={"Votre e-mail"} type="email" name="email" />
            <CustomSelect
              label="Votre objet"
              name="object"
              options={[{ value: "job", label: "Recherche d'emploi" }]}
            />
            <Input
              label={"Telephone"}
              type="tel"
              name="phone"
              placeholder="54 100 0003"
            />
            <TextArea
              label={"Votre message"}
              name="message"
              className="col-span-2"
            />
          </div>

          <div className="mt-11">
            <Button size="xl">
              <span>Envoyer votre message</span>
              <Send size={24} />
            </Button>
          </div>
        </div>

        <div className="flex">
          <div className="mx-auto w-[500px] flex flex-wrap gap-8">
            <Block type="whatsapp" />
            <Block type="office" />
            <Block type="telegram" />
            <Block type="skype" />
          </div>
        </div>
      </div>
    </Section>
  );
}
