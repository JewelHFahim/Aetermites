import { FiSearch } from "react-icons/fi";


const SearchField = () => {

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=""
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className=" w-[272px] h-[39px] pl-[25px] text-gray-500 text-[17px] border placeholder:italic rounded-[53px] outline-none bg-[#EAEAEA] focus:bg-white"
        />
        <FiSearch className="absolute top-0 right-4 bottom-0 w-6 h-6 my-auto text-gray-400 " />
      </div>
    </form>
  );
};

export default SearchField;
