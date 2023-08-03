
import Button from '../../utils/Button';
import './Discount.css'
const DiscountLeft = () => {
  return (
    <div className=" discount_left w-[946px]  h-[564.75px] grid grid-cols-2  items-center pl-[100px]">
      <div className=" text-white  ">
      <h1 className="text-[53px] font-bold">10% <span className="text-[35px]">Discount</span> </h1>
        <p className=" text-[13px] leading-[19px] my-[21px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button className={"bg-white text-black"}>BUY NOW</Button>
      </div>

      <div>g</div>
    </div>
  );
};

export default DiscountLeft;