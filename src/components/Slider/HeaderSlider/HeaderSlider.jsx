import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeaderSlider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderSinglePage from "./SliderSinglePage";

export default function HeaderSlider() {
  return (
    <div className="mt-[28px] lg:mt-[52px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="HeaderSliderSwiper"
      >
        <SwiperSlide>
          <SliderSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <SliderSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <SliderSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <SliderSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <SliderSinglePage />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
