import { cn } from "@/utils";
import { ExportCurve, Icon, SearchNormal1 } from "iconsax-react";
import React from "react";

type TableProps = {
  title: string;
  data?: unknown[];
  show: string;
  setShow: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  icon?: Icon;
  exportable?: boolean;
  action?: React.ReactNode;
  fields: {
    label: string;
    key: string;
    centered?: boolean;
    maxWidth?: string | number;
  }[];
};

export function Table({
  title,
  data,
  fields,
  show,
  setSearch,
  icon: Icon,
  exportable,
  action,
  search,
  setShow,
}: TableProps) {
  return (
    <div className="bg-white rounded-[30px] pt-6 md:pt-8 px-6 md:px-12 pb-7 md:pb-14 space-y-4 md:space-y-6 shadow">
      <header className="md:flex items-center">
        <div className="flex items-center gap-2.5">
          {Icon ? <Icon /> : null}

          <div className="text-[25px] font-bold">{title}</div>
        </div>

        <div className="mx-auto inline-flex items-center p-3.5 bg-stone-50 border border-neutral-200 rounded-[10px]">
          <div className="text-opacity-70 font-medium text-sm">Afficher</div>

          <div className="ml-2.5">
            <div className="h-4 w-0.5 bg-slate-600 rounded-full" />
          </div>

          <select
            name="show"
            id="show"
            value={show}
            onChange={(e) => setShow(e.target.value)}
            className="bg-transparent ml-1 text-center outline-none text-opacity-80 font-bold border-0 p-0"
          >
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="flex items-center gap-2 md:gap-5 pt-2 md:pt-0">
          <div className="ml-auto bg-stone-50 border border-neutral-200 rounded-[10px] inline-flex items-center gap-2 px-3.5 h-11">
            <div className="w-3.5">
              <SearchNormal1 className="w-full" />
            </div>

            <input
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none border-0 flex-1 text-sm placeholder:text-opacity-40"
            />
          </div>

          {exportable ? (
            <button
              type="button"
              className="h-11 bg-amber-600 px-5 inline-flex items-center gap-2 text-white rounded-[10px]"
            >
              <span className="text-sm font-bold">Export table</span>
              <ExportCurve className="w-5 h-5 opacity-50" />
            </button>
          ) : null}

          {action}
        </div>
      </header>

      <div className="w-full">
        <table className="w-full text-sm">
          <thead className="relative z-0">
            <div className="absolute bg-gray-100 rounded-lg -z-10 inset-0" />
            <tr>
              {fields.map((field) => (
                <th
                  key={field.key}
                  className={cn(
                    field.centered ? "text-center" : "text-left",
                    "px-8 py-3"
                  )}
                >
                  <div className="inline-flex items-center gap-2">
                    <span>{field.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td
                    key={index + "-" + field.key}
                    className={cn(
                      field.centered ? "text-center" : "text-left",
                      "px-8 py-2"
                    )}
                    style={field.maxWidth ? { maxWidth: field.maxWidth } : {}}
                  >
                    <div className="">
                      {
                        (
                          item as {
                            [key: string]: React.ReactNode;
                          }
                        )[field.key]
                      }
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
