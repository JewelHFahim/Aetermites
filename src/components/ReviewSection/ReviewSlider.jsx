import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import img1 from "../../assets/Asset 10.png";
import "./ReviewSlider.css"

const ReviewSlider = () => {
  return (
    <div className="">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        lopp={true}
        // spaceBetween={50}
        slidesPerView={1}
        className="RecentActivity"
      >
        {[1, 2, 3].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="pb-[30px] px-[200px]">

              <div className="font-roboto text-center">
                <p className="text-[23px] text-[#575555] tracking-[6.6px]">
                  OUR HAPPY CUSTOMER
                </p>
                <h1 className="text-[73px] text-[#000] font-[700] leading-[80px]">
                  REVIEW
                </h1>
                <p className="text-[#343434] text-[23px] italic mt-[80px]">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </div>

              <div className="text-center flex flex-col justify-center items-center mt-[37px]">
                <img src={img1} alt="" className="w-[118px] h-[118px]" />
                <div>
                  <h3 className="text-black text-opacity-[83%] text-[23px] font-[600] font-roboto">
                    Sara Ivana Rose
                  </h3>
                  <p className="text-[19px] text-[#3F3F3F] italic font-roboto">
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
