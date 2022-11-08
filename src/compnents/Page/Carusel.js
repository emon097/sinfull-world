import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
const Carusel = () => {
  return (
    <div className="">
      <>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper h-1/2"
        >
          <SwiperSlide className="h-full  ">
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/12428994/pexels-photo-12428994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/12428914/pexels-photo-12428914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/689784/pexels-photo-689784.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/53425/polar-bear-arctic-wildlife-snow-53425.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/531288/pexels-photo-531288.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full rounded-xl"
              src="https://images.pexels.com/photos/2168831/pexels-photo-2168831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carusel;
