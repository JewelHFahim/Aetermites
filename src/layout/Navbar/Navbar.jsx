import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.png";
import SearchField from "../../utils/SerachField";
import { BiShoppingBag } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { ThemeContext } from "../../context/AppContext";
import ToggleBtn from "../../utils/ToggoleBtn/ToggoleBtn";
import { useContext } from "react";
import MobileSearch from "./MobileSearch";

const Navbar = () => {
  const { isDarkmode } = useContext(ThemeContext);

  const hoverEffect = "hover:text-primary hover:font-[500]";

  const menuItems = (
    <>
      <li className={hoverEffect}>
        <Link to="/">Home</Link>
      </li>
      <li className={hoverEffect}>
        <Link to="/">Shop</Link>
      </li>
      <li className={hoverEffect}>
        <Link to="/">Blog</Link>
      </li>
      <li className={hoverEffect}>
        <Link to="/">About Us</Link>
      </li>
    </>
  );

  return (
    <div
      className={`${
        isDarkmode ? "bg-secondary" : "bg-white"
      } pt-[40px] lg:pt-[50px]`}
    >
      <div className={`navbar px-[22px] lg:px-[5vw] relative`}>

        <div className="navbar-start">
          <a href="/" className="text-center">
            {isDarkmode ? (
              <img
                src={logoDark}
                alt=""
                className="w-[120px] h-[20px] lg:w-[220px] lg:h-[30px]"
              />
            ) : (
              <img
                src={logo}
                alt=""
                className="w-[120px] h-[20px] lg:w-[220px] lg:h-[30px]"
              />
            )}

            <p className={`mt-[5px] lg:mt-[0] text-[9px] lg:text-[17px] font-[300] font-inter ${ isDarkmode ? "text-[#545454]" : "text-[#C8C8C8]"}`}>
              Radiate Beauty, Naturally
            </p>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className={`menu-horizontal p-1 gap-x-[80px] text-[17px] font-inter font-[500] ${isDarkmode ? "text-white" : "text-black"}`}>
            {menuItems}
          </ul>
        </div>

        <div className=" navbar-end hidden lg:flex">
          <SearchField />

          <button className="text-[30px] text-[#E39A59] mx-[50px] hover:scale-[1.08] duration-300">
            <BiShoppingBag />
          </button>

          <div className={`flex gap-[10px] items-center text-[17px] font-inter ${isDarkmode ? "text-white" : "text-black"} font-[500]`}>
            <a>Login</a>
            <div className="h-[16px] w-[2px] bg-primary"></div>
            <a>Sign Up</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden flex  items-center gap-4">
          <button className="text-primary text-[25px] ">
            <BiShoppingBag />
          </button>

          <button className={`text-[25px] ${isDarkmode ? "text-offWhite" : ""}`}>
            <MobileSearch/>
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <div className={`text-[25px] ${isDarkmode ? "text-offWhite" : ""}`}>
                <HiMenu />
              </div>
            </label>

            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content w-28 z-[99] rounded-box ${ isDarkmode ? "text-offWhite bg-black" : "text-black"}`}
            >
              {menuItems}
            </ul>
          </div>
        </div>

        <div className="hidden lg:block form-control absolute top-[-20px] right-[120px]">
          <ToggleBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
