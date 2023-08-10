import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../../context/AppContext";

const MobileSearch = () => {
  const { isDarkmode } = useContext(ThemeContext);

  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar((prevShowSearchBar) => !prevShowSearchBar);
  };

  return (
    <div className="relative">
      
      <button
        onClick={toggleSearchBar}
        className={`${isDarkmode ? "text-offWhite" : ""}`}
      >
        <FiSearch className="w-[24px] h-[24px]"/>
      </button>

      {showSearchBar && (
        <div className=" absolute -right-11 mt-1.5 transform duration-500 rounded-lg">
          <input
            className="border rounded-[29px] text-[16px] w-[280px] pl-[10px] py-[4px] outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
      )}
    </div>
  );
};

export default MobileSearch;
