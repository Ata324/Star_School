import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const AssistantManagerPage = ({searchParams}) => {

  const {page}=searchParams;
  return (
    <>
      <PageHeader>New Admin</PageHeader>
      <Spacer height={70} />
      <AssistanManagerList page={page}/>
      <Spacer />
    </>
  );
};

export default AssistantManagerPage;
