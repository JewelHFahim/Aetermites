import ReviewSlider from "./ReviewSlider";
import img1 from "../../assets/Asset 9.png";

const Review = () => {
  return (
    <div className="lg:flex items-center my-[50px] lg:my-[114px] bg-[#F4F4F4]">

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
