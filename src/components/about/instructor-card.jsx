"use client";
import Image from "next/image";
import { Card } from "react-bootstrap";
import "./instructor-card.scss";

const InstructorCard = (props) => {
  const { firstName, lastName, title, image } = props;
  const displayName = `${firstName} ${lastName}`;
 
  return (
    <Card>
      <Image
        src={`/images/instructors/${image}`}
        width={400}
        height={400}
        alt={title}
        className="rounded img-fluid"
      />

      <Card.Title>
        <h4>{displayName}</h4>
        <h6>{title}</h6>
      </Card.Title>
    </Card>
  );
};

export default InstructorCard;
