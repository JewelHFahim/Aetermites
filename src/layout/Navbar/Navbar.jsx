import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import SearchField from "../../utils/SerachField";

const Navbar = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "Shop", path: "javascript:void(0)" },
    { title: "Blog", path: "javascript:void(0)" },
    { title: "About Us", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <div>
      <nav ref={navRef} className="bg-white w-full top-0 z-20 border mt-[50px]">

        <div className="items-center px-4 max-w-screen mx-[86px ] md:px-8 lg:flex">

          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <a href="javascript:void(0)" className="text-center">
              <img src={logo} width={220} height={30} alt="Float UI logo" />
              <p className="text-[17px] text-[#545454] font-[300] font-inter">
                Radiate Beauty, Naturally
              </p>
            </a>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
            }`}
          >
            <div>
              <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                <div>
                  <SearchField />
                </div>

                <li className="mt-4 lg:mt-0">
                  <a
                    href="javascript:void(0)"
                    className=""
                  >
                    Login
                  </a>
                </li>

                <li className="mt-8 lg:mt-0">
                  <a
                    href="javascript:void(0)"
                    className=""
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>

            {/* menus */}
            <div className="flex-1">
              <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-[79px] lg:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-[#000] hover:text-[#E39A59] text-[17px] font-inter"
                    >
                      <a href={item.path}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;