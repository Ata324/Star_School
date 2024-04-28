import { Col, Container, Row } from "react-bootstrap";
import "./instructor.scss";
import instructors from "@/helpers/data/instructors.json";
import InstructorCard from "./instructor-card";
const Instructor = () => {
  return (
    <Container>
      <Row className="g-4">
        <Col className="inst-h2" xl={6}>
          <h2>INSTRUCTORS</h2>
        </Col>

        {instructors.map((item) => (
          <Col sm={6} md={4} xl={3} key={item.id}>
            <InstructorCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Instructor;
