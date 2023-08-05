import img1 from "../../assets/Asset 6.png";
import img2 from "../../assets/Asset 11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./NewProduct.css";
import Button from "../../utils/Button";

const NewProduct = () => {
  const datas = [
    {
      color: "#F64949",
    },
    {
      color: "#A11616",
    },
    {
      color: "#18B030",
    },
    {
      color: "#2353FF",
    },
    {
      color: "#2353FF",
    },
  ];


  return (
    <div className="mt-[40px] lg:mt-[114px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="NewProductSlider"
      >
        {[1, 2, 3].map((item, i) => (
          <SwiperSlide key={i}>
            <div className=" flex flex-col lg:flex-row justify-between items-center lg:px-[280px] sliderImage mb-[20px]">

              <div className="pt-[57px] lg:pt-[100px]">

                <h2 className="text-[73px] lg:text-[150px] text-white leading-[90px] lg:leading-[130px] Richardson ">
                  New product
                </h2>

                <h1
                  className="text-[59px] leading-[80px] lg:text-[151px] text-white font-roboto font-[900] lg:leading-[130px] mt-[8px]"
                  style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  LIPSTICK
                </h1>

                <div className="flex flex-col lg:flex-row items-center gap-2 mt-[75px] lg:mt-[20px]">
                  <p className="text-[29px] text-white font-[700] font-roboto">
                    Color:
                  </p>
                  <div className="flex items-center gap-2">
                    {datas.map((item, i) => (
                      <div
                        key={i}
                        className={`w-[35px] h-[35px] rounded-full border border-white`}
                        style={{ backgroundColor: item.color }}
                      ></div>
                    ))}
                  </div>
                </div>


              </div>

              <div className="mb-[-12px] lg:mt-[440px] lg:mr-[160px] z-99]">
                <Button className="bg-white text-primary drop-shadow shadow-md shadow-primary" 
                style={{ boxShadow: "4px 4px 11px 0px rgba(55, 55, 55, 0.18)" }}> Order Now </Button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProduct;
