"use client";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { FiClock, FiMapPin } from "react-icons/fi";
import "./upcomingCard.scss";

const UpComingCard = (props) => {
  const { image, title, time, location } = props;
  return (
    <Card className="upcomingCard">
      <Card.Body >
        <Image
          src={`/images/events/${image}`}
          width={300}
          height={400}
          alt={title}
          className="img-fluid rounded"
        />
        <Card.Subtitle>
          <span>
            <FiClock /> {time}
          </span>
          <span>
            <FiMapPin /> {location}
          </span>
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UpComingCard;
