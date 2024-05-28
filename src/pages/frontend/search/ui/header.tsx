import { Button, CustomSelect, Loading, Section } from "@/components";
import { fetch } from "@/services";
import { cn } from "@/utils";
import { Job } from "@types";
import { usePageSearchContext } from "../context";
import { Category, CloseCircle, Location } from "iconsax-react";
import React from "react";

export default function Header() {
  const { data, setData } = usePageSearchContext();

  const [country, setCountry] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [region, setRegion] = React.useState("");
  const [specialty, setSpecialty] = React.useState("");

  const allFilters = [
    "Date posted",
    "Job type",
    "City",
    "Job language",
  ] as const;
  const [activeFilter, setActiveFilter] =
    React.useState<(typeof allFilters)[number]>();

  const onClearFilter = () => {
    setCountry("");
    setRegion("");
    setSpecialty("");
  };

  const onSearch = () => {
    const handle = async () => {
      setLoading(true);

      const jobs = await fetch<Job[]>({
        resource: "job",
        params: { country, region, specialty },
      });
      if (jobs) setData(jobs);

      setLoading(false);
    };

    handle();
  };

  React.useEffect(onSearch, []);

  if (loading) return <Loading />;
  return (
    <header className="pt-8 pb-11 bg-stone-50/50">
      <Section className="space-y-6">
        <h1 className="text-2xl font-bold">Job search</h1>

        <div className="border border-neutral-200 bg-white rounded-xl p-3 gap-3 flex">
          <div className="grid grid-cols-3 gap-3 w-3/5 divide-x-4 divide-neutral-200 *:*:*:*:*:!border-0 *:pl-3">
            <div>
              <CustomSelect
                options={[]}
                name="specialty"
                value={specialty}
                onChange={setSpecialty}
                placeholder="Select specialty"
                addon={<Category className="size-6 text-primary mr-3" />}
              />
            </div>

            <div>
              <CustomSelect
                options={[]}
                name="country"
                value={country}
                onChange={setCountry}
                placeholder="Country"
                addon={<Location className="size-6 text-primary mr-3" />}
              />
            </div>

            <div>
              <CustomSelect
                options={[]}
                name="region"
                value={region}
                onChange={setRegion}
                placeholder="Region"
                addon={<Location className="size-6 text-primary mr-3" />}
              />
            </div>
          </div>

          <div className="ml-auto flex gap-3">
            <Button
              color="link"
              onClick={onClearFilter}
              className="!text-danger font-bold"
            >
              <CloseCircle className="size-4" />
              <span className="underline">{"Clear filter"}</span>
            </Button>

            <Button onClick={onSearch}>Search</Button>
          </div>
        </div>

        <div className="flex gap-3">
          {allFilters.map((filter) => (
            <div
              key={"filter-" + filter}
              className={cn(
                "border h-11 min-w-32 flex items-center px-4 rounded-lg text-sm cursor-pointer",
                activeFilter === filter
                  ? "border-primary/20 text-primary bg-primary/5 font-semibold"
                  : "border-neutral-200 bg-stone-50 font-medium"
              )}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? undefined : filter)
              }
            >
              {filter}
            </div>
          ))}

          <div className="ml-auto text-lg">
            Search results :{" "}
            <span className="text-primary font-medium underline">
              {data.length} jobs found
            </span>
          </div>
        </div>
      </Section>
    </header>
  );
}
