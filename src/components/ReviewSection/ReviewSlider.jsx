import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import img1 from "../../assets/Asset 10.png";
import "./ReviewSlider.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";

const ReviewSlider = () => {

  const {isDarkmode} = useContext(ThemeContext)

  return (
    <div className="">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        lopp={true}
        // spaceBetween={50}
        slidesPerView={1}
        className="ReviewSlider"
      >
        {[1, 2, 3].map((item, i) => (
          <SwiperSlide key={i}>
            <div className={`py-[30px] lg:px-[200px] ReviewSliderImg bg-opacity-[10%] ${isDarkmode ? "text-offWhite" : "text-[#575555]"}`}>

              <div className="font-roboto text-center">
                <p className={`text-[23px] x tracking-[3px] lg:tracking-[6.6px] `}>
                  OUR HAPPY CUSTOMER
                </p>
                <h1 className={`text-[43px] lg:text-[73px] font-[700] lg:leading-[80px] ${isDarkmode ? "text-white" : "text-[#000]"} `}>
                  REVIEW
                </h1>
                <p className={` text-[13px] lg:text-[23px] italic pt-[40px] lg:pt-[80px] px-[40px]`}>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </div>

              <div className="text-center flex flex-col justify-center items-center mt-[37px]">
                <img src={img1} alt="" className=" w-[56px] h-[56px] lg:w-[118px] lg:h-[118px]" />
                <div>
                  <h3 className="text-opacity-[83%] text-[13px] lg:text-[23px] font-[600] font-roboto">
                    Sara Ivana Rose
                  </h3>
                  <p className="text-[11px] lg:text-[19px] italic font-roboto">
                    @Actor
                  </p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
