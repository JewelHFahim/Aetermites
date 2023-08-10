import { useState, useEffect } from "react";

const LatestPopularBtn = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const darkIcon = (
    <button className=" w-[90px] h-[30px] rounded-[39px] text-white font-roboto text-[11px] font-[700] border border-primary">
      Popular
    </button>
  );

  const lightIcon = (
    <button className=" w-[90px]  h-[30px] rounded-[39px] bg-primary font-roboto text-white  text-[11px] font-[700]">
      Latest
    </button>
  );

  useEffect(() => {
    const savedDarkmode = localStorage.getItem("isDarkmode");
    if (savedDarkmode !== null) {
      setIsDarkmode(savedDarkmode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkmode", isDarkmode.toString());
  }, [isDarkmode]);

  function toggleTheme() {
    setIsDarkmode(!isDarkmode);
  }

  return (
    <div>
      <button
        className={`w-[154px] h-[30px] rounded-full border border-[#E39A59] flex items-center transition duration-300 focus:outline-none shadow relative`}
        onClick={toggleTheme}
      >
        <p className="absolute left-4 font-[500] text-[12px] text-primary">Latest</p>

        <div
          id="switch-toggle"
          className={`w-[90px] h-[30px] relative rounded-full transition duration-500 transform z-[99] bg-[#E39A59] ${
            isDarkmode
              ? " translate-x-[67px]"
              : "-translate-x-0"
          } p-1 flex justify-center items-center`}
        >
          {isDarkmode ? darkIcon : lightIcon}
        </div>

        <p className="absolute right-2 text-primary text-[12px] ">Popular</p>

      </button>
    </div>
  );
};

export default LatestPopularBtn;
