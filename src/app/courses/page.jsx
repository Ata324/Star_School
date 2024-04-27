
import PageHeader from "@/components/common/pageHeader";
import Spacer from "@/components/common/spacer";
import Courses from "@/components/courses/courses";
import React from "react";

const CoursesPage = () => {
	return (
		<>
		
			<PageHeader>Courses</PageHeader>
			<Spacer height="70px" />
			<Courses />
			<Spacer />
		</>
	);
};

export default CoursesPage;
