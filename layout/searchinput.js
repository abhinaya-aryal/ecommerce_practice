// ! searchbar input box and cart

import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Link from "next/link";

const SearchInput = () => {
  return (
    <>
      <div className="flex items-center space-x-2.8">
        <div className="flex items-center h-3.6">
          <input
            type="text"
            name="search"
            id="search"
            className={`text-1.6 px-0.4 h-full w-36 bg-gray outline-none`}
            placeholder="Search in hamropasal"
            autoFocus={true}
          />
          <FaSearch
            className={` w-4 p-0.4 h-full bg-secondary text-white cursor-pointer`}
          />
        </div>
        <Link href={"/my-cart"} passHref>
          <BsCart className={`text-2.4 cursor-pointer`} />
        </Link>
      </div>
    </>
  );
};

export default SearchInput;
