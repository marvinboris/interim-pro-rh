import { Calendar2, Clock, ProfileCircle, Share } from "iconsax-react";

export default function Banner() {
  return (
    <div className="rounded-[20px] h-80 relative overflow-clip z-0 after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-t after:from-black/70 after:to-transparent p-11 text-white flex items-end">
      <img
        src="/images/56b64671b604c88829d2fc814ee73dfb.png"
        alt="post banner"
        className="absolute inset-0 size-full object-cover -z-20"
      />

      <div className="flex-1 space-y-2.5">
        <h1 className="font-bold text-[40px]">{`"Exploring Cameroon's Rich Cultural Tapestry: A Journey Through Tradition and Diversity"`}</h1>

        <div className="flex gap-2.5 *:h-8 *:rounded-lg *:border *:border-white *:flex *:items-center *:gap-2 font-medium *:pl-2.5 *:pr-4 *:bg-zinc-800/80 text-xs">
          <div>
            <ProfileCircle className="size-3.5 opacity-50" />
            <span>by admin</span>
          </div>

          <div>
            <Calendar2 className="size-3.5 opacity-50" />
            <span>16.09.2023</span>
          </div>

          <div>
            <Clock className="size-3.5 opacity-50" />
            <span>8 min</span>
          </div>
        </div>
      </div>

      <div className="ml-14 size-14 bg-white rounded-full flex items-center justify-center text-black">
        <Share className="size-6" />
      </div>
    </div>
  );
}
