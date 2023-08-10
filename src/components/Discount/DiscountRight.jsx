import { Fade } from "react-reveal";
import Button from "../../utils/Button";
import "./Discount.css";
const DiscountRight = () => {
  return (
    <div className=" discount_right  lg:h-[564.75px]  grid grid-cols-1 lg:grid-cols-12  items-center ">
      <div className=" text-white lg:pl-[70px]   pl-[27px] pt-[32px] pb-[41px] col-span-8 ">
        <Fade right>
          <h1>
            <span className="text-[33px] lg:text-[83px] font-black"> 25%</span>
            <span className="text-[23px] lg:text-[53px] font-bold">
              Discount
            </span>
          </h1>
        </Fade>

        <Fade right delay={1500}>
          <p className=" hidden lg:block text-[13px] leading-[19px] my-[21px] text-[#FFFFFFBA]">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been <br />
            the industrys standard dummy text ever since the 1500s, <br /> when
            an unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book.
          </p>
        </Fade>

        <Fade rigt delay={2000}>
          <p className=" lg:hidden mb-[15px] mt-[] text-[13px] leading-[19px] lg:my-[21px] text-[#FFFFFFBA]">
            Lorem Ipsum is simply <br /> dummy text printing <br /> and
            typesetting industry.
          </p>
        </Fade>
        <Fade right delay={2000}>
          <Button className={"bg-white text-[#AA372E]"}>BUY NOW</Button>
        </Fade>
      </div>

      <div></div>
    </div>
  );
};

export default DiscountRight;
