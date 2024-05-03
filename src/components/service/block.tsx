import { News } from "@types";
import { Calendar, Message } from "iconsax-react";
import { Link } from "react-router-dom";

export function ServiceBlock({
  title,
  body,
  photo,
  date,
  comments,
  link,
}: News) {
  return (
    <Link to={link} className="block relative">
      <div className="absolute top-0 inset-x-5 rounded-3xl overflow-clip h-60">
        <img
          src={photo}
          alt={title}
          className="absolute inset-0 object-cover"
        />
      </div>

      <div className="shadow-xl rounded-3xl px-5 pb-7 pt-32 mt-32 bg-white">
        <div className="font-bold line-clamp-2 text-lg">{title}</div>

        <p className="mt-4 line-clamp-2">{body}</p>

        <div className="mt-4 flex gap-4 font-medium">
          <div className="bg-stone-50 flex items-center p-2.5 gap-2.5">
            <Calendar className="size-3.5" />
            <span>{date}</span>
          </div>

          <div className="bg-stone-50 flex items-center p-2.5 gap-2.5">
            <Message className="size-3.5" />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
