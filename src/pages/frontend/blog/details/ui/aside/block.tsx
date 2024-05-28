import { News } from "@types";
import { Link } from "react-router-dom";

export default function Block({ body, link, photo, title }: News) {
  return (
    <Link to={link} className="flex gap-3.5">
      <img
        className="size-[74px] rounded-[10px] object-cover"
        src={photo}
        alt={title}
      />

      <div className="space-y-2">
        <div className="font-medium text-sm text-zinc-700 line-clamp-2">{title}</div>

        <div className="text-xs text-zinc-500 line-clamp-2">{body}</div>
      </div>
    </Link>
  );
}
