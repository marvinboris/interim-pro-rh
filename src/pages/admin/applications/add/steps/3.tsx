import { TextArea } from "@/components";
import { AddSquare, InfoCircle, TickCircle } from "iconsax-react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export function Step3() {
  const textArea = React.useRef<HTMLDivElement>(null);

  const [qualifications, setQualifications] = React.useState<string[]>([]);

  return (
    <>
      <div className="col-span-2">
        <div ref={textArea}>
          <TextArea name="qualification" label="Qualifications" />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const component = textArea.current?.querySelector("textarea");
              const qualification = component?.value;
              if (qualification) {
                setQualifications((prev) => prev.concat(qualification));
                if (component) component.value = "";
              }
            }}
            className="h-11 bg-primary/10 text-primary px-4 rounded-lg flex items-center gap-2.5 text-sm font-bold"
          >
            <AddSquare variant="Bold" className="size-5" />
            <span>Add to list</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <InfoCircle className="size-5 text-orange-300" />
            <div>Add one by one then press this button</div>
          </div>
        </div>
      </div>

      <div className="border border-neutral-200 rounded-xl p-4 mt-5 overflow-auto">
        {qualifications.map((qualification) => (
          <div key={"qualification-" + uuidv4()} className="flex gap-2.5">
            <TickCircle variant="Bulk" className="size-5 text-primary" />
            <div className="text-xs">{qualification}</div>
          </div>
        ))}
      </div>
    </>
  );
}
