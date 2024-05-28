import { CustomSelect, Input } from "@/components";
import { useCompanyTypes } from "@/hooks";

export function Step2() {
  const { options: companyTypesOptions } = useCompanyTypes();

  return (
    <>
      <CustomSelect
        name="activity"
        label="Activities"
        options={companyTypesOptions}
      />
      <CustomSelect
        name="type"
        label="Company type"
        options={companyTypesOptions}
      />
      <div className="row-span-3"></div>
      <Input name="founder" label="Founder" />
      <Input
        name="website"
        type="url"
        label="Website"
        addon={<div className="mx-3">www.</div>}
      />
      <CustomSelect name="employees" label="Number of employees" options={[]} />
      <Input name="license" label="License number" />
    </>
  );
}
