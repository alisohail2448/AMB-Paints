import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../assets/s11.jpg";
import s3 from "../assets/s3.jpg";
import s2 from "../assets/s21.jpg";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <>
      <section className="">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s1} alt="" />
        </SwiperSlide>
      </Swiper>

      </section>
    </>
  );
};

export default Slider;
