import { Button } from "@/components";
import { News } from "@types";
import { Dislike, Like1 } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Block({ body, title, link }: News) {
  return (
    <Link to={link} className="block">
      <div className="flex items-center border-b border-neutral-200 pb-3">
        <div className="font-bold text-[30px]">{title}</div>

        <div className="flex gap-5 items-center">
          <Button color="like">
            <Like1 className="size-5" />
            Like
          </Button>
          <div className="w-1 h-5 rounded-full bg-neutral-200" />
          <Button color="dislike">
            <Dislike className="size-5" />
            Dislike
          </Button>
        </div>
      </div>

      <div className="font-light text-lg mt-5">{body}</div>
    </Link>
  );
}
