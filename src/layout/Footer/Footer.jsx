import logo from "../../assets/imgs/AETERNITAS_LOGO.svg";
import copy_right_icon from "../../assets/imgs/copy_right_icon.svg";
import FooterColumn from "./FooterColumn";
import Newsletter from "./Newsletter";

const Footer = () => {

  return (
    <div>
      <footer className="">
        <div className="  py-[70px] px-[240px] bg-[#4F4F4F] ">
          <div className=" flex justify-between ">
            <FooterColumn />
            <FooterColumn />
            <FooterColumn />
            <Newsletter />
          </div>
        </div>
        <div className="py-[19.5px] bg-[#070707] opacity-60 px-[240px]">
          <div className="flex justify-between items-center">
            <div className="w-[220px] flex flex-col items-center gap-[5.5px] ">
              <img className="w-full" src={logo} alt="Logo" />
              <span className="text-[#D6D6D6] font-light text-[17px]">
                Radiate Beauty, Naturally
              </span>
            </div>
            <div className=" text-[13px] text-[#D6D6D6] font-light flex gap-[9px]">
              <p>Copyright</p>
              <div className=" w-[20px] h-[20] ">
                <img src={copy_right_icon} alt="copy_right_icon" />
              </div>
              <p>2023 Sephora USA, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
