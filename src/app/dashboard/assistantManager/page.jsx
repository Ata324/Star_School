import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantList from "@/components/dashboard/assistant-manager/assistant-list";
import { getAllAssistantsByPage } from "@/services/assistant-service";
import React from "react";

const AssistantManagerPage = async ({searchParams}) => {
  const {page}=searchParams;

const res=await getAllAssistantsByPage(page);
const data= await res.json();
if(!data)  throw new Error(data.message);


  return (
    <>
      <PageHeader>New Admin</PageHeader>
      <Spacer height={70} />
      <AssistantList data={data}/>
      <Spacer />
    </>
  );
};

export default AssistantManagerPage;
