import img1 from "../../../assets/Asset 5.png";

const FeaturedSinglePage = () => {
  return (
    <div>
      <div className="font-roboto w-[342px]">
        <img src={img1} alt="" className="w-[442px] h-[552px] rounded-[29px]" />
        <h2 className="text-[29px] font-[500px] text-[#000]">
          Silk Facial oil
        </h2>

        <p className="text-[#000000ba] text-[13px] pt-[8px] pb-[12px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="text-[23px] flex gap-[7px]">
          <p className=" text-[#000]">Price:</p>
          <p className="text-[#AB5306] font-[700]">$67.25</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSinglePage;
