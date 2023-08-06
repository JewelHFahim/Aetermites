import { useContext } from "react";
import LatestBtn from "../../utils/Buttons/LatestBtn";
import PopularBtn from "../../utils/Buttons/PopularBtn";
import LatestPopularBtn from "../../utils/LatestPopularBtn/LatestPopularBtn";
import FeaturedSlider from "../Slider/FeaturedSlider/FeaturedSlider";
import MobileSlider from "../Slider/FeaturedSlider/MobileSlider.jsx/MobileSlider";
import { ThemeContext } from "../../context/AppContext";

const FeaturedProduct = () => {

  const { isDarkmode } = useContext(ThemeContext)


  return (
    <div className=" mt-[30px] lg:mt-[50px] lg:py-[50px] ">
      <div className=" lg:flex items-center font-roboto">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-start px-[49px] lg:px-0">
            <div className="text-center lg:text-left">
              <h1 className="text-primary text-[31px] lg:text-[73px] font-[700] uppercase leading-[25px] lg:leading-[90px] ">
                Featured
              </h1>
              <h1 className={` text-[33px] mt-[10px] lg:mt-0 lg:text-[63px] uppercase leading-[25px] lg:leading-[60px] ${isDarkmode ? "text-offWhite" : "text-secondary"}`}>
                Products
              </h1>
            </div>

            <p className={` text-[11px] lg:text-[15px] mt-[10px] lg:mt-[50px] lg:w-[421px] text-center lg:text-left ${isDarkmode ? "text-offWhite" : "text-[#000000ba]"}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className="hidden lg:block">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </span>
            </p>

            <div className="hidden lg:block mt-[40px]">
              <button className={`w-[276px] h-[62px] bg-primary rounded-[61px] text-[23px] font-roboto font-[500]  ${isDarkmode ? "" : "text-white"}`}>
                View All Products
              </button>
            </div>
          </div>
        </div>

        <div className=" lg:w-3/5">
          <div className="hidden lg:flex justify-center lg:justify-start gap-[24px]">
            <LatestBtn />
            <PopularBtn />
          </div>

          <div className="lg:hidden flex justify-center mt-[31px]">
            <LatestPopularBtn />
          </div>

          <div className="mt-6 lg:mt-[-45px] ">

            <div className="hidden lg:block">
              <FeaturedSlider />
            </div>

            <div className="lg:hidden">
              <MobileSlider />
            </div>

          </div>

          <div className="lg:hidden mt-[20px] flex justify-center">
            <button className="w-[120px] h-[26px] bg-primary rounded-[61px] text-[11px] font-roboto font-[500] text-white" style={{boxShadow: "3px 3px 4px 0px rgba(227, 154, 89, 0.23)" }}>
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
