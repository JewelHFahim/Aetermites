import img1 from "../../assets/Asset 6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./NewProduct.css";

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
    <div className="mt-[114px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="NewProductSlider"
      >
        {[1, 2, 3].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[540px]">
              <img src={img1} alt="" />
              <div className="absolute top-[150px] left-[250px]">
                <h2 className=" text-[150px] text-white leading-[130px] Richardson">
                  New product
                </h2>
                <h1
                  className="text-[151px] text-white font-roboto font-[900] leading-[130px] mt-[8px]"
                  style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  LIPSTICK
                </h1>

                <div className="flex items-center gap-2 mt-[20px]">
                  <p className="text-[29px] text-white font-[700] font-roboto">
                    Color:{" "}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProduct;
