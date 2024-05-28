import { Rate } from "@/components";
import { Testimony } from "@types";
import { Chat } from "react-iconly";

export default function Block({ body, name, photo, rate }: Testimony) {
  return (
    <div className="relative group text-left">
      <div className="absolute top-0 right-7">
        <div className="size-24 bg-neutral-200 group-hover:bg-white border group-hover:border-neutral-200 border-transparent rounded-2xl p-2.5 transition-all duration-100">
          <img
            src={photo}
            alt={name}
            className="size-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8 border border-neutral-200 bg-stone-50 group-hover:bg-white group-hover:shadow-lg rounded-[20px] px-7 pt-4 pb-6 transition-all duration-100">
        <div className="space-y-2">
          <div className="font-bold">{name}</div>
          <div>
            <Rate rate={rate} />
          </div>
        </div>

        <p className="mt-8 text-sm">{body}</p>

        <div className="mt-1 flex justify-end opacity-10">
          <Chat size={24} />
        </div>
      </div>
    </div>
  );
}
