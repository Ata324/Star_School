import PageHeader from "@/components/common/pageHeader";
import Spacer from "@/components/common/spacer";
import Events from "@/components/events/events";
import React from "react";

const EventsPage = () => {
  return (
    <>
      <PageHeader>Events</PageHeader>
      <Spacer height="70px"/>
      <Events />
      <Spacer />
    </>
  );
};

export default EventsPage;
