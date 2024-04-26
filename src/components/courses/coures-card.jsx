"use client";
import { Card } from "react-bootstrap";
import "./courses-card.scss";
import { FiDollarSign, FiTrendingUp, FiUser } from "react-icons/fi";

const CoursesCard = (props) => {
  const { image, title, user, rating, price } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Img
          className="img-fluid rounded "
          src={`/images/courses/${image}`}
          width={400}
          height={300}
          alt={title}
        />
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <span>
          <FiUser /> {user}
        </span>
        <span>
          <FiTrendingUp /> {rating}
        </span>
        <span>
          <FiDollarSign /> {price}
        </span>
      </Card.Footer>
    </Card>
  );
};

export default CoursesCard;
