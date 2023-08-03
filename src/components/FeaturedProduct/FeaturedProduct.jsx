import FeaturedSlider from "../Slider/FeaturedSlider/FeaturedSlider";

const FeaturedProduct = () => {
  return (
    <div className="mt-[50px] py-[50px]">
      <div className="flex items-center font-roboto">

        <div className=" w-full flex justify-center items-center">
          <div className="flex flex-col justify-start">
            <div className="">
              <h1 className="text-primary text-[73px] font-[700] uppercase leading-[90px] ">
                Featured
              </h1>
              <h1 className="text-[#434343] text-[63px] uppercase leading-[60px]">
                Products
              </h1>
            </div>

            <p className="text-[#000000ba] text-[15px] mt-[50px] w-[421px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="mt-[40px]">
              <button className="w-[276px] h-[62px] bg-primary rounded-[61px] text-[23px] font-roboto font-[500] text-white">
                View All Products
              </button>
            </div>
          </div>
        </div>

        <div className="w-3/5">
          <div className="flex justify-start gap-[24px]">
            <button className="w-[194px] h-[44px] rounded-[39px] bg-primary font-roboto text-white text-[23px] font-[700]">
              Latest
            </button>

            <button className="w-[194px] h-[44px] rounded-[39px] text-primary font-roboto text-[23px] font-[700] border border-primary">
              Popular
            </button>
          </div>

          <div className="mt-[-45px]">
            <FeaturedSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
