import ReviewSlider from "./ReviewSlider";
import img1 from "../../assets/Asset 9.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";

const Review = () => {

  const { isDarkmode} = useContext(ThemeContext)

  return (
    <div className={`lg:flex items-center my-[50px] lg:my-[114px]  ${isDarkmode ? "bg-[#2D2D2D]" : "bg-[#F4F4F4]"}`}>

      <div className="lg:w-1/3 hidden lg:block">
        <img src={img1} alt="" />
      </div>

      <div className="lg:w-2/3 ">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
