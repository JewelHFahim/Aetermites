import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./FeaturedSlider.css";
import FeaturedSinglePage from "./FeaturedSinglePage";
import { Autoplay, Navigation } from "swiper/modules";

export default function FeaturedSlider() {
  return (
    <>
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // loop={true}
        slidesPerView={3}
        spaceBetween={300}

        
        className="FeaturedSliderSwiper pt-[20px] lg:pt-[75px] border border-red-600"
      >
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <SwiperSlide key={i}>
            <FeaturedSinglePage />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
