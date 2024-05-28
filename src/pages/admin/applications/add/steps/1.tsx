import { Input, CustomSelect } from "@/components";
import { useCompanies, useContracts, useDiplomae, useLanguages } from "@/hooks";

export function Step1() {
  const { options: companyOptions } = useCompanies();
  const { options: contractOptions } = useContracts();
  const { options: diplomaOptions } = useDiplomae();
  const { options: languageOptions } = useLanguages();

  return (
    <>
      <Input name="position" label="Job position" />
      <Input name="join" type="date" label="Expected join date" />
      <CustomSelect name="company" label="Company" options={companyOptions} />
      <CustomSelect
        multiple
        name="languages"
        label="Languages"
        options={languageOptions}
      />
      <CustomSelect
        name="contract"
        label="Contract type"
        options={contractOptions}
      />
      <CustomSelect
        name="diploma"
        label="Diploma required"
        options={diplomaOptions}
      />
      <Input
        name="salaryHigh"
        type="number"
        label="Salary"
        placeholder="High"
        addon={
          <input
            name="salaryLow"
            type="number"
            placeholder="Low"
            className="flex-1 outline-none mx-3"
          />
        }
        append="/m"
      />
      <Input name="location" label="Location / city" />
      <Input name="experience" type="number" label="Experience" />
    </>
  );
}
