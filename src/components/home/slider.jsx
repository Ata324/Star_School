"use client";
import { Carousel } from "react-bootstrap";
import "./slider.scss";
import data from "@/helpers/data/slider.json";
import Image from "next/image";

const Slider = () => {
  return (
    <Carousel fade className="main-slider">
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            src={`/images/slider/${item.image}`}
            width={1800}
            height={800}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
