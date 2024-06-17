import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";
// import { useEffect, useRef } from "react";

// let viewValue = 3;
function Swipers() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let num;

  if (viewportWidth >= 700) {
    num = 3;
  } else num = 1;

  // var x = window.matchMedia("(max-width: 37em)");

  // let num = x.matches === true ? 1 : 3;

  return (
    <section>
      <Swiper
        slidesPerView={num}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="flex items-center justify-center"
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
    </section>
  );
}

export default Swipers;
