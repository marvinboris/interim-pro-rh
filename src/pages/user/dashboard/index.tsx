import { Section } from "@/components";
import Card from "./ui/card";
import { DocumentVerified, UserInformation } from "./ui/icons";
import ProfilePic from "./ui/profile-pic";
import { Edit2, Location } from "iconsax-react";

export function PageUserDashboard() {
  return (
    <Section className="grid grid-cols-2 gap-6 pt-8 pb-14">
      <div className="grid grid-cols-2 gap-6">
        <Card title="Mes demandes" icon={DocumentVerified} value={20} />
        <Card
          title="Mes entretiens"
          color="like"
          icon={DocumentVerified}
          value={15}
        />
        <Card
          title="Status du profil"
          color="dislike"
          icon={UserInformation}
          value="59%"
        />
      </div>

      <div className="border border-neutral-200 rounded-3xl bg-white p-7 flex items-end gap-6">
        <div className="flex-1">
          <header>
            <div className="flex gap-4 items-center">
              <ProfilePic />

              <div>
                <div className="font-bold text-2xl">Bonjour ! Briand</div>
                <div className="text-neutral-400 text-sm">
                  UI/UX Designer | Developpeur web
                </div>
              </div>
            </div>

            <div className="mt-3.5 flex gap-2 *:flex *:items-center *:p-2.5 *:gap-2.5 *:bg-stone-50 *:rounded-md *:border *:border-neutral-200 text-sm/none">
              <div>Depuis 4 ans</div>
              <div>
                <Location className="size-3.5" />
                <span>Douala - CM</span>
              </div>
              <div className="!bg-like/10 !border-0 font-semibold text-like !gap-1">
                <div className="size-1.5 rounded-full bg-like" />
                <span>Disponible</span>
              </div>
              <div>
                <span className="font-bold">+4</span>
              </div>
            </div>
          </header>

          <div className="mt-10 pb-7">
            <div className="flex items-center gap-3">
              <div className="font-bold">Biographie</div>
              <div className="flex-1 flex items-center">
                <div className="size-1 bg-neutral-200 rotate-45" />

                <div className="flex-1 h-px bg-neutral-200" />
              </div>
            </div>

            <div className="mt-8 text-sm">
              Ma fascination pour l'interaction entre l'humain et la technologie
              m'a conduit à me spécialiser dans l'UI/UX design dès le début de
              ma carrière. Titulaire d'un diplôme en design graphique, j'ai
              affiné mes compétences en étudiant les principes de conception, en
              suivant de près les tendances émergentes et en maîtrisant les
              outils et les logiciels de pointe nécessaires pour créer des
              expériences utilisateur de qualité supérieure.
            </div>
          </div>
        </div>

        <div className="size-11 bg-primary text-white rounded-full flex items-center justify-center">
          <Edit2 className="size-5" />
        </div>
      </div>
    </Section>
  );
}
