import { Button, Loading, Table } from "@/components";
import React from "react";
import { Add, Edit, Eye } from "iconsax-react";
import { Download } from "react-iconly";
import { Link } from "react-router-dom";
import { useJobs } from "@/hooks";

export function PageAdminApplications() {
  const { loading, data: jobs } = useJobs();

  const [search, setSearch] = React.useState("");
  const [show, setShow] = React.useState("05");

  if (loading) return <Loading />;
  return (
    <Table
      action={
        <Link to="/admin/applications/add">
          <Button div color="like" className="font-bold">
            <Add className="size-5" />
            <span>Post a Job</span>
          </Button>
        </Link>
      }
      data={jobs?.map((job) => ({
        ...job,
        _: <input type="checkbox" />,
        id: "#" + job.id,
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
        { key: "_", label: "" },
        { key: "id", label: "ID" },
        { key: "company", label: "Company" },
        { key: "location", label: "Location" },
        { key: "degree", label: "Degree required" },
        { key: "experience", label: "Experience" },
        { key: "availability", label: "Availability" },
        { key: "action", label: "" },
      ]}
      search={search}
      setSearch={setSearch}
      show={show}
      setShow={setShow}
      title="Job listing"
    />
  );
}

export * from "./add";
