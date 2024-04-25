import Welcome from "@/components/about/welcome";
import SectionTitle from "@/components/common/section-title";
import Spacer from "@/components/common/spacer";
import Slider from "@/components/home/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Spacer />
      <Welcome/>
      <Spacer/>
      <SectionTitle text="Upcoming Events"/>
    </>
  );
}
