import Category from "../components/category";
import Logo from "../components/logo";
import SearchInput from "../components/searchinput";

const SearchBar = () => {
  return (
    <>
      <div
        className={`shadow-lg px-9.6 h-6.4 flex justify-between items-center w-full z-50`}
      >
        <Logo />
        <SearchInput />
        <Category />
      </div>
    </>
  );
};
export default SearchBar;
