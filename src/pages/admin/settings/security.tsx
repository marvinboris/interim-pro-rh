import { Button, Input } from "@/components";
import { Copy } from "iconsax-react";
import { Work } from "react-iconly";

export default function SecuritySettings() {
  return (
    <div className="bg-white rounded-3xl border border-neutral-200 px-10 pt-9 pb-20">
      <header className="border-b border-neutral-200 pb-4 flex items-center gap-6">
        <div className="text-neutral-200">
          <Work size={48} />
        </div>

        <div>
          <div className="text-2xl font-bold">Security settings</div>
          <div className="text-sm font-medium">Change password</div>
        </div>
      </header>

      <form className="mt-12 grid grid-cols-2 gap-5">
        <Input name="oldPassword" type="password" label="Old password" />
        <Input name="newPassword" type="password" label="New password" />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
        />
        <Input
          name="otp"
          label="OTP code"
          append={<Copy className="text-primary size-6" />}
        />

        <div className="mt-14">
          <Button size="xl" className="w-full">
            Save settings
          </Button>
        </div>
      </form>
    </div>
  );
}
