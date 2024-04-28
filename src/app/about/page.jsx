import Instructor from "@/components/about/instructor";
import Welcome from "@/components/about/welcome";
import PageHeader from "@/components/common/pageHeader";
import Spacer from "@/components/common/spacer";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHeader>About us</PageHeader>
      <Spacer  />
      <Welcome />
      <Spacer />
      <Instructor />
      <Spacer />
    </>
  );
};

export default AboutPage;
