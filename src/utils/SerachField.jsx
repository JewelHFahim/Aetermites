import { useContext} from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../context/AppContext";

const SearchField = () => {
  const { isDarkmode } = useContext(ThemeContext);


  return (
    <form onSubmit={(e) => e.preventDefault()} className="">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className={`w-[272px] h-[39px] pl-[25px] text-gray-500 text-[17px]  placeholder:italic rounded-[53px] outline-none  focus:bg-white ${
            isDarkmode ? "bg-[#4D4D4D] " : "bg-[#EAEAEA] border"
          }`}
        />
        <FiSearch className="absolute top-0 right-4 bottom-0 w-6 h-6 my-auto text-gray-400 " />
      </div>
    </form>
  );
};

export default SearchField;
