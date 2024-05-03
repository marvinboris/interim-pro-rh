import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import WhatsApp from "./icons/whatsapp";
import { Button, Header, Input, Section, Select, TextArea } from "@/components";

import { Call, Message } from "iconsax-react";
import { Send } from "react-iconly";

export function PageContact() {
  return (
    <>
      <Header>Cliquez ici</Header>
      <div className="bg-stone-50">
        <Section className="grid grid-cols-2 gap-16 pb-20">
          <div>
            <div className="bg-primary text-white p-16">
              <div className="*:opacity-50 text-6xl font-bold">
                Nous <span>joindre</span>
              </div>

              <p className="text-lg mt-8">
                Si vous avez des questions ou des demandes particulières,
                n’hésitez pas à nous contacter. Nous vous répondrons dans les
                meilleurs délais. Vous pouvez nous joindre par téléphone, par
                e-mail ou via le formulaire de contact. Merci de votre visite!
              </p>

              <div className="h-px rounded-full bg-white/30 my-6" />

              <div className="flex">
                <div className="flex-1">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Message className="size-5" />
                      <a href="mailto:contact@interimprorh.com">
                        contact@interimprorh.com
                      </a>
                    </div>
                    <div className="flex gap-2.5 mt-3.5">
                      <Call className="size-5" />
                      <div>
                        <a href="tel:+237657878787">+237 657 87 87 87</a>
                        <br />
                        <a href="tel:+237681618161">+237 681 61 81 61</a>
                      </div>
                    </div>
                  </div>

                  <div className="h-px rounded-full bg-white/30 my-6" />

                  <div className="mt-10 flex gap-3.5 *:size-11 *:*:size-6 *:bg-white *:rounded-full *:flex *:items-center *:justify-center">
                    <div>
                      <Facebook />
                    </div>
                    <div>
                      <Instagram />
                    </div>
                    <div>
                      <WhatsApp />
                    </div>
                  </div>
                </div>

                <div>
                  <Call variant="Bold" className="size-52 opacity-30" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <div className="text-4xl/none font-bold text-black">
              Vous avez un sujet ?
            </div>
            <div>Ecrivez-vous en remplissant le formulaire ci-dessous.</div>

            <div className="p-4 border border-neutral-200 grid grid-cols-2 gap-4 rounded-2xl mt-16">
              <Input label={"Votre nom"} />
              <Input label={"Votre e-mail"} type="email" />
              <Select label={"Votre objet"}>
                <option value="recherche">Recherche d’emploi</option>
              </Select>
              <Input label={"Téléphone"} type="tel" />
              <TextArea label={"Votre message"} className="col-span-2" />
            </div>

            <div className="mt-11">
              <Button size="xl">
                <span>Envoyer votre message</span>
                <Send size={20} />
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
