import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./RecentActivity.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";

const RecentActivity = () => {
  const { isDarkmode } = useContext(ThemeContext);

  return (
    <div className=" mt-[40px] lg:mt-[80px] lg:mx-[124px] lg:px-[40px]">
      <h1
        className={`hidden lg:block text-center lg:text-[73px] font-[700] font-roboto uppercase ${isDarkmode ? "text-white" : "text-black"}`}
      >
        Our Recent Activity
      </h1>

      <h1 className={`lg:hidden text-center text-[37px] font-[700] font-roboto uppercase leading-[40px] ${ isDarkmode ? "text-offWhite" : "text-[#000] "}`}>
        Our <br /> <span className="text-[29px]">Recent Activity</span>
      </h1>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={70}
        slidesPerView={3}
        className="RecentActivity mt-[26px] lg:mt-[69px] lg:px-[50px] "
      >
        {[1, 2, 3, 4, 5].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="RecentActivitySliderImg flex items-end">
              <div className=" z-[2] w-full h-full lg:h-[230px] bg-[#00000078] lg:rounded-[29px] opacity-0 hover:opacity-[1] transform duration-300 font-roboto px-[10px] py-[12px] lg:px-[27px] lg:py-[25px]">
                <h1 className="text-[15px] lg:text-[30px]  text-white font-[500] ">
                  Amazing benefits of Serum
                </h1>

                <p className=" text-[10px] lg:text-[13px] text-[#ffffffba] ">
                  January 23, 2023
                </p>

                <p className="text-[11px] lg:text-[15px] text-[#ffffffa1]">
                  There are many variations of passages of Lorem Ipsum
                  <span className="hidden lg:block">
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentActivity;
