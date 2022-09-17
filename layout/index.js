// ! the complete root layout of an app

import Footer from "./footer";
import SearchBar from "./searchbar";
import Topbar from "./topbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="sticky top-0">
        <Topbar />
        <SearchBar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
