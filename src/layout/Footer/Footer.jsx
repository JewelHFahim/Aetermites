import { useContext, useState } from "react";
import logo from "../../assets/imgs/AETERNITAS_LOGO.svg";
import { ThemeContext } from "../../context/AppContext";

const Footer = () => {
  const [theme] = useState(false);

  const { isDarkmode } = useContext(ThemeContext)

  return (
    <footer className="">

      <div>
        {/* About Store + Categories + Support */}
        <div className="pb-[50px] lg:py-[70px] lg:px-[240px]  bg-[#4F4F4F]">
          <div className=" pt-[48px] flex flex-col justify-between ">
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-[80px] lg:gap-0 pr-[23px] pl-[43px]">
              {/* About Store */}
              <div>
                <h2 className="lg:text-[27px] text-[19px]  font-medium text-[#EAEAEA] mb-[14px]">
                  About Store
                </h2>
                <div className="lg:w-[194px]  w-[111px]  h-[3px] bg-[#777] opacity-60"></div>

                <ul className=" lg:mt-[28px] mt-[13px] flex flex-col gap-[16.5px] font-medium text-[#FFF] opacity-60">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Shop</a>
                  </li>
                  <li>
                    <a href="">Product</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">Festival Offer</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Login</a>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="hidden lg:block ">
                <h2 className="text-[27px] font-medium text-[#EAEAEA] mb-[14px]">
                  Categories
                </h2>
                <div className="w-[194px] h-[3px] bg-[#777] opacity-60"></div>
                <ul className=" mt-[28px] flex flex-col gap-[16.5px] font-medium text-[#FFF] opacity-60">
                  <li>
                    <a href="">Shower Gel</a>
                  </li>
                  <li>
                    <a href="">Eye-Shadow</a>
                  </li>
                  <li>
                    <a href="">Lipstics</a>
                  </li>
                  <li>
                    <a href="">Eye-Liner</a>
                  </li>
                  <li>
                    <a href="">Festival Offer</a>
                  </li>
                  <li>
                    <a href="">Skin Care</a>
                  </li>
                  <li>
                    <a href="">Lotion</a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h2 className="lg:text-[27px] text-[19px] font-medium text-[#EAEAEA] mb-[14px]">
                  Support
                </h2>
                <div className="lg:w-[194px] w-[111px] h-[3px] bg-[#777] opacity-60"></div>
                <ul className=" lg:mt-[28px] mt-[13px] gap-[15.5px] lg:gap-[16.5px] flex flex-col   font-medium text-[#FFF] opacity-60">
                  <li>
                    <a href="">GDPR</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms</a>
                  </li>
                  <li>
                    <a href="">Abuse policy</a>
                  </li>
                  <li>
                    <a href="">Xtel policy</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className=" bg-[#4F4F4F] mt-[20px] lg:mt-0">
                <h2 className="text-[27px] font-medium text-[#EAEAEA] mb-[14px]">
                  Newsletter
                </h2>
                <div className="w-[194px] h-[3px] bg-[#777] opacity-60"></div>
                <p className="text-[13px]  mt-[28px] w-[240.5px] text-[#FFFFFFBB]">
                  Sign up for our newsletter and be the first to receive the
                  news about offers, new arrivals and amazing events.
                </p>

                <form>
                  <div>
                    <div className="  relative bg-white rounded-[3px] text-[11px] w-[240.5px] my-[35px] flex  justify-between">
                      <input
                        className=" w-full pl-[5px]  py-[9.5px]  rounded-[3px] overflow-hidden"
                        type="email"
                        placeholder="Your email address "
                      />
                      <button
                        type="submit"
                        className="bg-[#0E0E0E] text-white  px-[9.5px] rounded-[3px]"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="text-[13px] font-light text-[#FFFFFFBB]">
                    <input type="checkbox" />

                    <sapn> I have read the information regarding </sapn>

                    <p className="w-[240.5px]">
                      the processing of my personal data by INGLOT SP. Z O.O. in
                      the context of the newsletter.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div
        className={` ${ isDarkmode ? " bg-[#4F4F4F]" : "bg-[#070707]"} py-[30px] opacity-60 lg:px-[240px] flex justify-center lg:block`}
      >
        <div className="lg:flex lg:justify-between justify-center items-center">
          <div className=" w-[220px] flex flex-col items-center gap-[5.5px]">
            <img className="w-full" src={logo} alt="Logo" />
            <span className="text-[#D6D6D6] font-light text-[17px]">
              Radiate Beauty, Naturally
            </span>
          </div>

          <div className={` mt-[15px] text-[13px] text-[#D6D6D6] font-light flex flex-col lg:flex-row items-center gap-[9px] ${isDarkmode ? "" : ""}`}>
            <p>
              Copyright <span className="text-[16px]">&#x24B8;</span> 2023
              Sephora USA, Inc.
            </p>
            <p className="mt-[-6px] lg:mt-0"> All rights reserved </p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
