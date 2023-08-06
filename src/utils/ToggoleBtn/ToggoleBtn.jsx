import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/AppContext";

const ToggleBtn = () => {
  // Test
  const { isDarkmode, setIsDarkmode } = useContext(ThemeContext);

  useEffect(() => {
    const storedStatus = JSON.parse(localStorage.getItem("status")) || false;

    setIsDarkmode(storedStatus);
  }, [setIsDarkmode]);

  function toggleTheme() {
    setIsDarkmode(!isDarkmode);

    localStorage.setItem("status", JSON.stringify(!isDarkmode));
  }

  return (
    <div>
      <button
        className={`lg:w-[91px] lg:h-[27px] rounded-full flex items-center transition duration-300 border border-white border-opacity-[10%] focus:outline-none shadow ${
          isDarkmode ? "bg-white" : "bg-black"
        } relative`}
        onClick={toggleTheme}
      >
        <p className="text-[11px] text-black font-[700] absolute left-2">
          White
        </p>

        <div
          id="switch-toggle"
          className={`w-[41px] text-[11px] font-bold h-[27px] relative border border-white rounded-full transition duration-500 transform z-[99] ${
            isDarkmode
              ? "bg-primary text-black lg:translate-x-[50px]"
              : " bg-primary lg:-translate-x-[1px]"
          } p-1 text-white flex justify-center items-center`}
        >
          {isDarkmode ? "B" : "W"}
        </div>
        <p className="text-[11px] text-white font-[700] absolute right-2">
          Black
        </p>
      </button>
    </div>
  );
};

export default ToggleBtn;
