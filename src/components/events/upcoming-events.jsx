"use client";
import "./upcoming-events.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SectionTitle from "../common/section-title";
import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import event from "@/helpers/data/events.json";
import UpComingCard from "./upcomingCard";
const UpcomingEvents = () => {
  let filteredData = event.filter((item) => new Date(item.date) >= new Date());

  return (
    <div className="upcoming">
      <Container>
        <div className="upcomingTitle">
          <span>
            <FaChevronLeft className="prev" />
          </span>
          <SectionTitle text="Upcoming Events" />
          <span>
            <FaChevronRight className="next" />
          </span>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {filteredData.map((item) => (
            <SwiperSlide key={item.id}>
              <UpComingCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
