import Link from "next/link";
import React from "react";

const AdminList = () => {
  return (
    <Container>
      <Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
        New
      </Link>

      <DataTable title="Admin List">
                <Column title="First Name"/>
                <Column title="Last Name"/>
                <Column title="Username"/>
            </DataTable>
    </Container>
  );
};

export default AdminList;
