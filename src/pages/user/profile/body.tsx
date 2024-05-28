import { Button, Input, Section } from "@/components";

export default function Body() {
  return (
    <div>
      <Section>
        <form className="w-3/4 grid grid-cols-3 gap-6 py-6">
          <Input name="lastname" placeholder="James" />
          <Input name="firstname" placeholder="Stephy" />
          <Input
            type="password"
            name="password"
            placeholder="***********************"
          />
          <Input
            type="email"
            name="email"
            placeholder="stephyjames@gmail.com"
          />
          <Input type="tel" name="phone" placeholder="+237 6 90 55 48 99" />
          <Input
            type="password"
            name="new_password"
            placeholder="***********************"
          />

          <Button className="mt-7">Sauvegarder</Button>
        </form>
      </Section>
    </div>
  );
}
