import { Copyright } from "iconsax-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-12 pt-7 pb-9">
      <div className="flex items-center gap-3">
        <div>
          <Copyright className="size-6" />
        </div>

        <div>
          Copyright {new Date().getFullYear()} | All Rights Reserved{" "}
          <span className="font-bold text-primary">Interim PRO RH</span>
        </div>
      </div>
    </footer>
  );
}
