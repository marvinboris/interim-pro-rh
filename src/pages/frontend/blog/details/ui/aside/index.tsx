import { Input, Loading } from "@/components";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Tiktok from "./icons/tiktok";
import Twitter from "./icons/twitter";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Block from "./block";
import { useNews } from "@/hooks";

export default function Aside() {
  const { loading, data: news } = useNews();

  if (loading) return <Loading />;
  return (
    <aside className="space-y-10 w-96">
      <div className="rounded-2xl bg-primary/5 p-5">
        <div className="text-2xl font-bold">Follow us on :</div>
        <p className="text-sm text-neutral-500">
          Need to know more about us ?{" "}
        </p>

        <div className="mt-7 flex gap-3.5 *:flex *:size-11 *:*:size-5 *:items-center *:justify-center *:bg-white *:rounded-full text-primary">
          <div>
            <Facebook />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Tiktok />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5">
        <Input type="search" />

        <div className="mt-6 flex items-center gap-6">
          <div className="text-2xl font-bold">Recent post</div>

          <div className="flex gap-2 ml-auto *:size-8 *:flex *:items-center *:justify-center *:rounded-full">
            <button className="bg-stone-50">
              <ArrowLeft className="size-3.5" />
            </button>

            <button className="bg-primary text-white">
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-7 space-y-8">
          {news
            ?.filter((_, index) => index < 4)
            .map((news, index) => (
              <Block key={"news-" + news.id + "-" + index} {...news} />
            ))}
        </div>
      </div>
    </aside>
  );
}
