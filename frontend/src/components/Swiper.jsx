import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

function Swipers() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./image1.png " alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image2.png " alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image3.png " alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image1.png " alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image2.png " alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image3.png " alt="image1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swipers;
