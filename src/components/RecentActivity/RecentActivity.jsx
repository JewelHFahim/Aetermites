import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./RecentActivity.css";
import img1 from "../../assets/Asset 8.png";

const RecentActivity = () => {

  return (
    <div className="mt-[80px] mx-[124px] px-[40px]">
      <div>
        <h1 className="text-center text-[#000] text-[73px] font-[700] font-roboto uppercase">
          Our Recent Activity
        </h1>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        className="RecentActivity px-[50px]"
      >
        {[1, 2, 3, 4, 5].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="absolute bottom-0 z-[2] w-full h-[200px] bg-[#00000078] rounded-[29px] opacity-0 hover:opacity-[1] transform duration-300 font-roboto px-[27px] py-[25px]">
              <h1 className="text-[33px]  text-white font-[500] ">
                Amazing benefits of Serum
              </h1>
              <p className="text-[13px] text-[#ffffffba] ">January 23, 2023</p>
              <p className="text-[15px] text-[#ffffffa1]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
              </p>
            </div>

            <div className="w-[454px] h-[488px] relative border">
              <img
                src={img1}
                alt=""
                className="w-[454px] h-[488px] object-cover rounded-[25px] z-[1]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentActivity;
