import img1 from "../../../assets/Asset 5.png";

const FeaturedSinglePage = () => {
  return (
    
      <div className="font-roboto w-[198px] lg:w-[442px]">
        <img src={img1} alt="" className="w-[198px] h-[244px] lg:w-[442px] lg:h-[552px] rounded-[29px]" />

        <h2 className="text-[19px] lg:text-[29px] font-[500px] text-[#000]">
          Silk Facial oil
        </h2>

        <p className="text-[#000000ba] text-[11px] lg:text-[13px] pt-[8px] pb-[12px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="text-[19px] lg:text-[23px] flex gap-[7px]">
          <p className=" text-[#000]">Price:</p>
          <p className="text-[#AB5306] font-[700]">$67.25</p>
        </div>
      </div>
    
  );
};

export default FeaturedSinglePage;
