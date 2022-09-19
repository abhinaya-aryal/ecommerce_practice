// ! imported from "/pages/_app.js"

import Footer from "./footer";
import SearchBar from "./searchbar";
import Topbar from "./topbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Topbar />
        <SearchBar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
