import Welcome from "@/components/about/welcome";
import SectionTitle from "@/components/common/section-title";
import Spacer from "@/components/common/spacer";
import FeaturedCourses from "@/components/courses/featured-courses";
import Slider from "@/components/home/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Spacer />
      <Welcome/>
      <Spacer/>
      <FeaturedCourses/>
      <Spacer/>
      <SectionTitle text="Upcoming Events"/>
    </>
  );
}
