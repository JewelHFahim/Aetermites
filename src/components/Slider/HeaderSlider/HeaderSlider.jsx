import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeaderSlider.css";
import img1 from "../../../assets/Asset 1.png";
import img2 from "../../../assets/Asset 12.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderSinglePage from "./SliderSinglePage";
import { useContext } from "react";
import { ThemeContext } from "../../../context/AppContext";

export default function HeaderSlider() {

  const {isDarkmode} = useContext(ThemeContext)

  const datas = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img1,
    },
    {
      img: img2,
    },
  ];

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
        className={`HeaderSliderSwiper ${ isDarkmode ? "darkmode" : "lightmode" }`}
      >
        {datas.map((data, i) => (
          <SwiperSlide key={i}>
            <SliderSinglePage data={data}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
