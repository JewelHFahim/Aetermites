import DiscountLeft from "./DiscountLeft";
import DiscountRight from "./DiscountRight";

const Discount = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[56px] gap-[15px] mt-[57px] lg:mt-[113px] ">
      <div className="w-full">
        <DiscountLeft />
      </div>
     
      <div className="w-full">
        <DiscountRight />
      </div>
    </div>
  );
};

export default Discount;