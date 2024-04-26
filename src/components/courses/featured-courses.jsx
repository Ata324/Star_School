import SectionTitle from "../common/section-title"
import Courses from "./courses"
import "./featuredCourses.scss"

const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
        <SectionTitle text="Featured Courses"/>
        <Courses featured={true}/>
    </div>
  )
}

export default FeaturedCourses