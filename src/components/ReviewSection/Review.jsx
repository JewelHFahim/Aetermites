import ReviewSlider from "./ReviewSlider";
import img1 from "../../assets/Asset 9.png";

const Review = () => {
  return (
    <div className="flex items-center my-[114px] bg-[#F4F4F4]">
      <div className="w-1/3">
        <img src={img1} alt="" />
      </div>

      <div className="w-2/3 ">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
