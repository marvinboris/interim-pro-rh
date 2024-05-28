import { Input, TextArea } from "@/components";

export function Step1() {
  return (
    <>
      <Input type="email" name="email" label="Email address" />
      <Input name="createdIn" label="Year of establishment" />
      <div className="row-span-3">
        <TextArea name="brief" label="Company brief" />
      </div>
      <Input name="name" label="Company name" />
      <Input name="phone" type="tel" label="Phone No." addon="+237" />
      <Input name="contactPerson" label="Contact person" />
      <Input name="location" label="Headquarters location" />
    </>
  );
}
