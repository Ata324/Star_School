import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const AdminList = () => {
  const arr = [
    { id: 2, name: "can", surname: "kan", username:"bal" },
    { id: 3, name: "van", surname: "dam", username:"bal"},
    { id: 4, name: "lan", surname: "bak", username:"bal"},
  ];

  return (
    <Container>
      <Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
        New
      </Link>

      <DataTable title="Admin List" dataSource={arr} dataKey="id">
        <Column dataField="name">First name</Column>
        <Column dataField="surname">Last name</Column>
        <Column dataField="username">Username</Column>
      </DataTable>
    </Container>
  );
};

export default AdminList;
