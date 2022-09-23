// # imported from "/layout/searchbar.js"

import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"} passHref>
        <a>
          <span className={`text-2.8 cursor-pointer font-semibold`}>
            Lo
            <span className={`text-secondary`}>Go</span>
          </span>
        </a>
      </Link>
    </>
  );
};
export default Logo;
