import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel({slidesArr}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          slidesArr.map(
            (ele)=> <SwiperSlide>{ele}</SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
