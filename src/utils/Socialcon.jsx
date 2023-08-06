import { useContext } from "react";
import facebook from "../assets/f.svg";
import insta from "../assets/i.svg";
import linkedin from "../assets/l.svg";
import twitter from "../assets/t.svg";
import { ThemeContext } from "../context/AppContext";

const Socialcon = () => {
  const { isDarkmode } = useContext(ThemeContext);

  return (
    <div
      className={`flex w-[57px] justify-center items-center gap-[7.5px] h-[177px] rounded-s-[11px] drop-shadow-md ${isDarkmode ? "bg-secondary " : "bg-white"}`}
    >
      <p
        className={`text-[13px] font-roboto ${ isDarkmode ? "text-white" : "text-[#3E3E3E]"}`}
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Our Social Media
      </p>

      <div className="flex flex-col gap-[11px]">
        <button>
          <img src={facebook} alt="" className="w-[19px] h-[19px]" />
        </button>
        <button>
          <img src={insta} alt="" className="w-[19px] h-[19px]" />
        </button>
        <button>
          <img src={linkedin} alt="" className="w-[19px] h-[19px]" />
        </button>
        <button>
          <img src={twitter} alt="" className="w-[19px] h-[19px]" />
        </button>
      </div>
    </div>
  );
};

export default Socialcon;
