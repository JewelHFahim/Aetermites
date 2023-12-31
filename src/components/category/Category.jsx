import { useContext } from "react";
import img1 from "../../assets/Asset 2.png";
import img2 from "../../assets/Asset 3.png";
import img3 from "../../assets/Asset 4.png";
import { ThemeContext } from "../../context/AppContext";

const Category = () => {
  const { isDarkmode } = useContext(ThemeContext);

  const datas = [
    {
      title: "Shower Gel",
      img: img1,
      aos: "fade-right",
      duration: 1000,
    },
    {
      title: "Shower Gel",
      img: img2,
      aos: "zoom-in-up",
      duration: 1500,
    },
    {
      title: "Shower Gel",
      img: img3,
      aos: "fade-left",
      duration: 1000,
    },
  ];

  return (
    <div className="py-[20px] lg:py-[50px] mt-[24px] lg:mt-[50px]">
      <h1
        className={`text-center text-[33px] lg:text-[73px] font-[700] font-roboto uppercase ${
          isDarkmode ? "text-offWhite" : "text-black"
        }`}
      >
        {" "}
        Category{" "}
      </h1>

      <div className="flex justify-center mt-[20px] lg:mt-[70px]">
        <div className="grid grid-cols-3 gap-4 lg:gap-[60px]">
          {datas.map((item, i) => (
            <div
              key={i}
              data-aos-duration={item.duration}
              data-aos-easing="ease-in-out"
              data-aos={item.aos}
              className={`relative w-[84px] h-[84px] lg:w-[396px] lg:h-[392px]`}
            >
              <img
                src={item.img}
                alt=""
                className="w-[84px] h-[84px] lg:w-[396px] lg:h-[392px] "
              />

              <h2 className=" text-[16px] lg:text-[70px] font-dancingScript absolute bottom-[10px] lg:bottom-4 lg:left-[40px] text-white">
                {item.title}
              </h2>

              <div className="absolute top-[-8px] left-[-8px] lg:top-[-20px] lg:left-[-20px] w-[80px] h-[80px] lg:w-[380px] lg:h-[380px] border-2 lg:border-4 border-[#E39A59]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
