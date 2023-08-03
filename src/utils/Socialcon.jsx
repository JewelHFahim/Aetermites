import facebook from "../assets/f.svg";
import insta from "../assets/i.svg";
import linkedin from "../assets/l.svg";
import twitter from "../assets/t.svg";

const Socialcon = () => {
  return (
    <div className="flex w-[57px] justify-center items-center gap-[7.5px] h-[177px] bg-white rounded-s-[11px]">
      <p
        className="text-[13px] text-[#3E3E3E] font-roboto text-"
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
