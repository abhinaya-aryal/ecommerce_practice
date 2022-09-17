// % searchbar with logo, search box and categories

import Category from "./category";
import Logo from "./logo";
import SearchInput from "./searchinput";

const SearchBar = () => {
  return (
    <>
      <div
        className={`shadow-lg px-9.6 h-6.4 flex justify-between items-center w-full z-50 bg-white`}
      >
        <Logo />
        <SearchInput />
        <Category />
      </div>
    </>
  );
};
export default SearchBar;
