import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SearchField from "../../utils/SerachField";
import { BiShoppingBag } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Navbar2 = () => {
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
    <div className="navbar mt-[40px] lg:mt-[50px] px-[22px] lg:px-[86px] relative">
      
      <div className="navbar-start">
        <a href="/" className="text-center">
          <img
            src={logo}
            alt=""
            className="w-[100px] h-[14px] lg:w-[220px] lg:h-[30px]"
          />
          <p className="mt-[5px] lg:mt-[0] text-[9px] lg:text-[17px] text-[#545454] font-[300] font-inter">
            Radiate Beauty, Naturally
          </p>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal p-1 gap-x-[80px] text-[17px] font-inter text-[#000] font-[500]">
          {menuItems}
        </ul>
      </div>

      <div className=" navbar-end hidden lg:flex">

        <SearchField />

        <button className="text-[30px] text-[#E39A59] mx-[50px] hover:scale-[1.08] duration-300">
          <BiShoppingBag />
        </button>

        <div className="flex gap-[10px] items-center text-[17px] font-inter text-[#000] font-[500]">
          <a>Login</a>
          <div className="h-[16px] w-[2px] bg-primary"></div>
          <a>Sign Up</a>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden flex items-center gap-4">

        <button className="text-primary text-[20px] ">
          <BiShoppingBag />
        </button>

        <button>
          <FiSearch />
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <div className="text-[20px]">
              <HiMenu />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content w-28 z-[99] shadow bg-base-100 rounded-box"
          >
            {menuItems}
          </ul>
        </div>
      </div>

      <div className="hidden lg:block form-control w-52 absolute top-[-20px] right-[60px]">
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault01"
        />
      </div>
      
    </div>
  );
};

export default Navbar2;
