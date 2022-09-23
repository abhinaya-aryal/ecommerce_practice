// % imported from "/layout/index.js"

import CategoryMain from "./categorymain";

import Logo from "./logo";
import SearchInput from "./searchinput";

const SearchBar = () => {
  return (
    <>
      <div
        className={`px-12.8 h-6.4 flex justify-between items-center w-full z-50 bg-white`}
      >
        <Logo />
        <SearchInput />
        <CategoryMain />
      </div>
    </>
  );
};
export default SearchBar;
