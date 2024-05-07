import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const ProgramList = () => {
  return (
    <Container>
      <Link href="#">New</Link>
    
        <DataTable>
            <Column></Column>
        </DataTable>


    </Container>
  );
};

export default ProgramList;
