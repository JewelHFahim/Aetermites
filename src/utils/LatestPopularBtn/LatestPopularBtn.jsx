import { useState, useEffect } from "react";

const LatestPopularBtn = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const darkIcon = (
    <button className=" w-[90px] h-[30px] rounded-[39px] text-primary font-roboto text-[11px] font-[700] border border-primary">
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
        className={`w-[154px] h-[30px] rounded-full border border-[#E39A59] flex items-center transition duration-300 focus:outline-none shadow`}
        onClick={toggleTheme}
      >
        <div
          id="switch-toggle"
          className={`w-[90px] h-[30px] relative rounded-full transition duration-500 transform ${
            isDarkmode
              ? "bg-transparent translate-x-[67px]"
              : "bg-[#E39A59] -translate-x-0"
          } p-1 text-white flex justify-center items-center`}
        >
          {isDarkmode ? darkIcon : lightIcon}
        </div>
      </button>
    </div>
  );
};

export default LatestPopularBtn;
