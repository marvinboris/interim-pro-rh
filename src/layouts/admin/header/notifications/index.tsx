import { Notification } from "iconsax-react";

export default function Notifications() {
  return (
    <div className="relative">
      <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center ">
        <div className="size-4 absolute top-0 right-0 text-xs translate-x-1/2 rounded-full flex items-center justify-center text-white bg-primary">
          2
        </div>

        <Notification className="size-5" />
      </div>
    </div>
  );
}
