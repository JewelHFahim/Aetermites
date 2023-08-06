import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FeaturedSinglePage from "../FeaturedSinglePage";
import img1 from "../../../../assets/Asset 5.png";

export default function MobileSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        centeredSlides={true}
        pagination={false}
        modules={[Pagination]}
        className=""
      >
        <SwiperSlide>
          <FeaturedSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedSinglePage />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedSinglePage />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
