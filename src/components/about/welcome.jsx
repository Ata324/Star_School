import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../../../public/images/about/welcome.jpg";
import { config } from "@/helpers/config";

const Welcome = () => {
  return (
    <Container>
      <Row className="g-5 align-items-center ">
        <Col md={6}>
          <Image
            src={aboutImage}
            alt={config.project.slogan}
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2 className="text-primary">
            Welcome to Star Elementary School: The Most Preferred School
          </h2>
          <p>
            At Star Elementary School, we combine lectures, readings, and
            discussions to provide students with a solid foundation in
            educational psychology, preparing you for a successful academic
            journey.
          </p>

          <ul className="list-inline-item">
            <li>
              Cutting-edge Curriculum: Stay ahead with the latest educational
              trends and methodologies.
            </li>
            <li>
              Expert Instructors: Learn from passionate professionals eager to
              share their knowledge.
            </li>
            <li>
			Hands-on Training: Gain practical experience through real-world projects.
            </li>
            <li>
			Recognized Certifications: Enhance your opportunities with certifications that matter.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
