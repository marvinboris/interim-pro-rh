import { Polygon1 } from "./ui/polygons";
import {
  Button,
  CustomSelect,
  Input,
  Section,
  SectionTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";

export function PageAuthRegister() {
  return (
    <div className="py-32 relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3/5">
        <Polygon1 />
      </div>

      <Section className="flex items-center gap-12">
        <SectionTitle className="flex-1">
          Employer <br />
          <span>Sign up.</span> Create <br /> your account
        </SectionTitle>

        <form className="flex-1 grid grid-cols-2 gap-x-4 gap-y-8">
          <Input
            name="name"
            label="Company name"
            placeholder="Interim Pro RH"
          />
          <CustomSelect name="activity" label="Company activity" options={[]} />
          <Input
            name="email"
            type="email"
            label="Company e-mail"
            placeholder="int@email.com"
          />
          <Input
            name="phone"
            type="tel"
            label="Phone No."
            placeholder="54 100 0003"
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="*****************"
          />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirm password"
            placeholder="*****************"
          />

          <div className="mt-8">
            <Button size="xl" className="w-full">
              Continue
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </form>
      </Section>
    </div>
  );
}
