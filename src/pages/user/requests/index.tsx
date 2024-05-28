import { Loading, Section, Table } from "@/components";
import { cn } from "@/utils";
import { useRequests } from "@/hooks";
import React from "react";
import { CloseCircle, Edit, Eye, TickCircle } from "iconsax-react";
import { Download } from "react-iconly";

export function PageUserRequests() {
  const { loading, data: requests } = useRequests();

  const [show, setShow] = React.useState("05");
  const [search, setSearch] = React.useState("");

  if (loading) return <Loading />;
  return (
    <Section className="pt-8 pb-14">
      <Table
        data={requests?.map((r, i) => ({
          ...r,
          sl: i + 1,
          status: (
            <div
              className={cn(
                "inline-flex items-center h-6 pl-1 pr-3 rounded-md gap-1 text-xs font-semibold",
                [
                  "bg-primary/10 text-primary",
                  "bg-dislike/10 text-dislike",
                  "bg-like/10 text-like",
                ][r.status]
              )}
            >
              {
                [
                  <Spinner className="animate-spin" />,
                  <CloseCircle className="size-3" />,
                  <TickCircle className="size-3" />,
                ][r.status]
              }
              {["Pending", "Not selected", "Selected"][r.status]}
            </div>
          ),
          action: (
            <div className="flex gap-2.5 *:size-6 *:rounded-md *:text-white *:flex *:justify-center *:items-center">
              <button className="bg-purple">
                <Eye className="size-3" />
              </button>
              <button className="bg-telegram">
                <Edit className="size-3" />
              </button>
              <button className="bg-like">
                <Download size={12} />
              </button>
            </div>
          ),
        }))}
        fields={[
          { key: "sl", label: "SL" },
          { key: "created", label: "Date" },
          { key: "company", label: "Société" },
          { key: "location", label: "Localisation" },
          { key: "contract", label: "Contract" },
          { key: "status", label: "Status" },
          { key: "action", label: "" },
        ]}
        search={search}
        setSearch={setSearch}
        show={show}
        setShow={setShow}
        title="Liste de demandes"
        icon={DocumentVerified}
      />
    </Section>
  );
}

function DocumentVerified() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2683 41.7258H17.16C12.6761 41.7258 9.0415 38.0915 9.0415 33.6075V14.3685C9.0415 9.88456 12.6761 6.25 17.16 6.25H31.1468C35.6308 6.25 39.2652 9.88456 39.2652 14.3685V21.001"
        stroke="#DADADA"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.33 34.8386L33.2467 36.759L37.1975 32.8063M27.4392 30.055C27.4392 28.8777 28.3929 27.9221 29.5719 27.9204H30.5425C31.105 27.9204 31.6452 27.6988 32.0456 27.3019L32.7238 26.6221C33.5527 25.7857 34.905 25.7838 35.7396 26.6127L35.7415 26.6146L35.7488 26.6221L36.4288 27.3C36.8273 27.6969 37.3675 27.9204 37.9319 27.9204H38.9044C40.0817 27.9204 41.0371 28.8759 41.0371 30.055V31.0238C41.0371 31.5863 41.2606 32.1284 41.6575 32.5269L42.3354 33.2069C43.1719 34.0375 43.1775 35.3882 42.3467 36.2244L42.3373 36.2319L41.6575 36.9119C41.2606 37.3123 41.039 37.8507 41.039 38.4132V39.3873C41.0371 40.5646 40.0817 41.5184 38.9044 41.5165H37.9302C37.3656 41.5165 36.8254 41.74 36.4269 42.1369L35.7469 42.8167C34.9181 43.6532 33.5694 43.6588 32.7313 42.8298L32.7294 42.8261L32.7219 42.8186L32.0419 42.1404C31.6433 41.7438 31.1031 41.5202 30.5406 41.5202H29.5719C28.3948 41.5202 27.4392 40.5646 27.4392 39.3873V38.4113C27.4392 37.8488 27.2156 37.3104 26.8188 36.91L26.1408 36.23C25.3044 35.4029 25.2969 34.0525 26.1258 33.2161L26.1296 33.2123L26.139 33.205L26.8169 32.525C27.2138 32.1265 27.4373 31.5863 27.4373 31.0219L27.4392 30.055Z"
        stroke="#DADADA"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.5095 18.0339H17.4175M20.7197 26.7777H17.4155"
        stroke="#DADADA"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function Spinner(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_99_3801)">
        <path
          d="M5.44385 1.5C5.44385 0.67125 6.1151 0 6.94385 0C7.7726 0 8.44385 0.67125 8.44385 1.5C8.44385 2.32875 7.7726 3 6.94385 3C6.1151 3 5.44385 2.32875 5.44385 1.5ZM8.6261 2.81775C8.6261 1.989 9.29735 1.31775 10.1261 1.31775C10.9548 1.31775 11.6261 1.989 11.6261 2.81775C11.6261 3.6465 10.9548 4.31775 10.1261 4.31775C9.29735 4.31775 8.6261 3.6465 8.6261 2.81775ZM10.6938 6C10.6938 5.586 11.0298 5.25 11.4438 5.25C11.8578 5.25 12.1938 5.586 12.1938 6C12.1938 6.414 11.8578 6.75 11.4438 6.75C11.0298 6.75 10.6938 6.414 10.6938 6ZM9.3761 9.18225C9.3761 8.76825 9.7121 8.43225 10.1261 8.43225C10.5401 8.43225 10.8761 8.76825 10.8761 9.18225C10.8761 9.59625 10.5401 9.93225 10.1261 9.93225C9.7121 9.93225 9.3761 9.59625 9.3761 9.18225ZM6.19385 10.5C6.19385 10.086 6.52985 9.75 6.94385 9.75C7.35785 9.75 7.69385 10.086 7.69385 10.5C7.69385 10.914 7.35785 11.25 6.94385 11.25C6.52985 11.25 6.19385 10.914 6.19385 10.5ZM3.0116 9.18225C3.0116 8.76825 3.3476 8.43225 3.7616 8.43225C4.1756 8.43225 4.5116 8.76825 4.5116 9.18225C4.5116 9.59625 4.1756 9.93225 3.7616 9.93225C3.3476 9.93225 3.0116 9.59625 3.0116 9.18225ZM2.6366 2.81775C2.6366 2.19675 3.1406 1.69275 3.7616 1.69275C4.3826 1.69275 4.8866 2.19675 4.8866 2.81775C4.8866 3.43875 4.3826 3.94275 3.7616 3.94275C3.1406 3.94275 2.6366 3.43875 2.6366 2.81775ZM1.6001 6C1.6001 5.53425 1.9781 5.15625 2.44385 5.15625C2.9096 5.15625 3.2876 5.53425 3.2876 6C3.2876 6.46575 2.9096 6.84375 2.44385 6.84375C1.9781 6.84375 1.6001 6.46575 1.6001 6Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_99_3801">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0.943848)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
