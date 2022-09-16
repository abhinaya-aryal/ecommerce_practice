import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <div className="flex items-center space-x-2.8">
        <div className="flex items-center h-3.2">
          <input
            type="text"
            name="search"
            id="search"
            className={`text-1.4 px-0.4 h-full w-36 bg-gray outline-none`}
            placeholder="Search in hamropasal"
            autoFocus={true}
          />
          <FaSearch
            className={`text-3.6 p-0.4 h-full bg-secondary text-white cursor-pointer`}
          />
        </div>
        <BsCart className={`text-2.4`} />
      </div>
    </>
  );
};

export default SearchInput;
