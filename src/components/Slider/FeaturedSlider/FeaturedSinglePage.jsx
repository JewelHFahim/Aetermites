import { useContext } from "react";
import img1 from "../../../assets/Asset 5.png";
import { ThemeContext } from "../../../context/AppContext";

const FeaturedSinglePage = () => {

  const { isDarkmode} = useContext(ThemeContext)

  return (
    
      <div className="font-roboto w-[100%] lg:w-[442px]">

        <img src={img1} alt="" className="w-[100%] h-[244px] lg:w-[442px] lg:h-[552px] rounded-[29px]" />

        <h2 className={`text-[19px] lg:text-[29px] font-[500px] ${ isDarkmode ? "text-offWhite" : "text-[#000]"} `}>
          Silk Facial oil
        </h2>

        <p className={` text-[11px] lg:text-[13px] pt-[8px] pb-[12px] ${ isDarkmode ? "text-offWhite" : "text-[#000000ba]"}`}>
          It is a long established fact that a reader will be distracted by the
          <span className=" hidden lg:block">readable content of a page when looking at its layout.</span>
        </p>

        <div className="text-[19px] lg:text-[23px] flex gap-[7px]">
          <p className={` ${isDarkmode ? "text-offWhite" : "text-[#000]"}`}>Price:</p>
          <p className="text-[#AB5306] font-[700]">$67.25</p>
        </div>
      </div>
    
  );
};

export default FeaturedSinglePage;
