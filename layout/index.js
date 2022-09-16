import SearchBar from "./searchbar";
import Topbar from "./topbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <SearchBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
