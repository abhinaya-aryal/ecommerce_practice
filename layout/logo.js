// # logo in searchbar only

import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"} passHref>
        <span className={`text-2.8 cursor-pointer font-semibold`}>
          hamro
          <span className={`text-secondary`}>Pasal</span>
        </span>
      </Link>
    </>
  );
};
export default Logo;
