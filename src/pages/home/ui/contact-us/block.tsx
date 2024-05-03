import { Button } from "@/components";
import { cn } from "@/utils";
import { Call, Whatsapp } from "iconsax-react";
import Telegram from "./icons/telegram";
import Skype from "./icons/skype";

export default function Block({
  type,
}: {
  type: "whatsapp" | "office" | "telegram" | "skype";
}) {
  const Icon = {
    whatsapp: Whatsapp,
    office: Call,
    telegram: Telegram,
    skype: Skype,
  }[type];

  return (
    <div className="w-52 h-48 flex-none py-8 px-4 flex flex-col bg-stone-50 hover:bg-white border-2 border-neutral-200 hover:shadow-lg rounded-3xl transition-all duration-100">
      <div className="flex gap-2.5">
        <div
          className={cn(
            "size-11 rounded-lg flex items-center justify-center",
            {
              whatsapp: "bg-whatsapp/10 text-whatsapp",
              office: "bg-primary/10 text-primary",
              telegram: "bg-telegram/10 text-telegram",
              skype: "bg-skype/10 text-skype",
            }[type]
          )}
        >
          <Icon className="size-6" />
        </div>

        <div>
          <div className="font-medium text-base">
            {
              {
                whatsapp: "WhatsApp",
                office: "Bureau",
                telegram: "Telegram",
                skype: "Skype",
              }[type]
            }
          </div>

          <div className="text-sm">
            {
              {
                whatsapp: "+971 50 829 1203",
                office: "+971 50 829 1203",
                telegram: "+971 50 829 1203",
                skype: "interimprorh129",
              }[type]
            }
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Button color={type === "office" ? "primary" : type} className="w-full !p-0">
          {
            {
              whatsapp: "Chat with us",
              office: "Call now",
              telegram: "Chat with us",
              skype: "Video call",
            }[type]
          }
        </Button>
      </div>
    </div>
  );
}
