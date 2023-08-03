import DiscountLeft from "./DiscountLeft";
import DiscountRight from "./DiscountRight";

const Discount = () => {
  return (
    <div className="flex gap-[56px] mt-[113px] border">
      <div>
        <DiscountLeft />
      </div>
     
      <div>
        <DiscountRight />
      </div>
    </div>
  );
};

export default Discount;