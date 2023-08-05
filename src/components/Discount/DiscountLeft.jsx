import Button from "../../utils/Button";
import "./Discount.css";
const DiscountLeft = () => {
  return (
    <div className=" discount_left  lg:h-[564.75px] grid grid-cols-1 lg:grid-cols-12  items-center ">
      <div className=" text-white  pl-[27px] py-[52px] lg:pl-[70px]  col-span-8">
        <h1>
          <span className="text-[33px] lg:text-[83px] font-black"> 10%</span>{" "}
          <span className="text-[23px] lg:text-[53px] font-bold">Discount</span>{" "}
        </h1>
        <p className=" hidden lg:block text-[13px] leading-[19px] my-[21px] text-[#FFFFFFBA]">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been <br />
          the industrys standard dummy text ever since the 1500s, <br /> when an
          unknown printer took a galley of type and <br />
          scrambled it to make a type specimen book.
        </p>
        <p className="lg:hidden mb-[15px] mt-[] text-[13px] leading-[19px] lg:my-[21px] text-[#FFFFFFBA]">
          Lorem Ipsum is simply dummy <br /> text of the printing and
          typesetting <br />
          industry.
        </p>
        <Button className={"bg-white text-black"}>BUY NOW</Button>
      </div>

      <div></div>
    </div>
  );
};

export default DiscountLeft;