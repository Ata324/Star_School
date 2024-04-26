
import data from "@/helpers/data/courses.json"
import { Col, Container, Row } from "react-bootstrap"
import CoursesCard from "./coures-card"


const Courses = ({featured}) => {
    let filteredData=data;

   if(featured){
    filteredData.filter((item)=>item.featured);
   }

  return (
    <Container>
        <Row className="g-4" xs={1} sm={2} md={3} lg={4}>
           {filteredData.map((item) => (
             <Col  key={item.id}>
               <CoursesCard {...item} />
             </Col>
           ))}
        </Row>

    </Container>
  )
}

export default Courses