import { Button, Loading, Table } from "@/components";
import { useCompanies } from "@/hooks";
import { Add, Edit, Eye } from "iconsax-react";
import React from "react";
import { Download } from "react-iconly";
import { Link } from "react-router-dom";

export function PageAdminCompanies() {
  const { loading, data: companies } = useCompanies();

  const [search, setSearch] = React.useState("");
  const [show, setShow] = React.useState("05");

  if (loading) return <Loading />;
  return (
    <Table
      action={
        <Link to="/admin/companies/add">
          <Button div color="like" className="font-bold">
            <Add className="size-5" />
            <span>Add company</span>
          </Button>
        </Link>
      }
      data={companies?.map((company) => ({
        ...company,
        _: <input type="checkbox" />,
        id: "#" + company.id,
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
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone No." },
        { key: "createdIn", label: "Created in" },
        { key: "contactPerson", label: "Contact person" },
        { key: "action", label: "" },
      ]}
      search={search}
      setSearch={setSearch}
      show={show}
      setShow={setShow}
      title="Company list"
    />
  );
}

export * from "./add";
