import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FeaturedSinglePage from '../FeaturedSinglePage';

export default function MobileSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper w-[55%]"
      >
        <SwiperSlide><FeaturedSinglePage/></SwiperSlide>
        <SwiperSlide><FeaturedSinglePage/></SwiperSlide>
        <SwiperSlide><FeaturedSinglePage/></SwiperSlide>
        <SwiperSlide><FeaturedSinglePage/></SwiperSlide>
        <SwiperSlide><FeaturedSinglePage/></SwiperSlide>
        <SwiperSlide><FeaturedSinglePage/></SwiperSlide>
      
      </Swiper>
    </>
  );
}