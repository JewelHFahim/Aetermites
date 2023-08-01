import { BsSearch } from "react-icons/bs";

const SearchField = () => {

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-md px-4 mx-auto"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-4 pr-12 text-gray-500 border rounded-[53px] outline-none bg-[#EAEAEA] focus:bg-white"
        />
        <BsSearch className="absolute top-0 right-3 bottom-0 w-6 h-6 my-auto text-gray-400 " />
      </div>
    </form>
  );
};

export default SearchField;
