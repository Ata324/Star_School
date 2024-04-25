import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../../../public/images/about/welcome.jpg";
import Image from "next/image";
import { config } from "@/helpers/congif";

const Welcome = () => {
  return (
    <Container>
      <Row className="align-items-center g-5">
        <Col md={6}>
          <Image src={aboutImage} alt={config.project.slogan} className="img-fluid"/>
        </Col>
        <Col md={6}>
          <h2 className="text-primary">
            Welcome to the most preferred IT School
          </h2>
          <p>
            Through a combination of lectures, readings, discussions, students
            will gain a solid foundation in educational psychology.
          </p>

          <ul className="list-inline-item">
            <li>
              Cutting-edge curriculum for the latest IT trends and technologies.
            </li>
            <li>
              Expert instructors passionate about sharing their knowledge.
            </li>
            <li>
              Hands-on training and real-world projects for practical
              experience.
            </li>
            <li>
              Earn industry-recognized certifications for enhanced
              employability.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
