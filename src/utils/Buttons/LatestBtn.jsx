import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";

const LatestBtn = () => {

  const {isDarkmode} = useContext(ThemeContext)

  return (
    <>
      <button className={`w-[90px] lg:w-[194px] h-[30px] lg:h-[44px] rounded-[39px] bg-primary font-roboto   text-[11px] lg:text-[23px] font-[700] ${ isDarkmode ? "" : "text-white"} `}>
        Latest
      </button>
    </>
  );
};

export default LatestBtn;
