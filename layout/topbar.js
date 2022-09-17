// $ thin navbar at the top of an app

import TopBarData from "../data/topbardata";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div
        className={`bg-gray w-full flex space-x-3.2 justify-end py-0.4 px-9.6 z-50`}
      >
        {TopBarData.map((item) => {
          return (
            <Link href={item.path} key={item.id} passHref>
              <li
                className={`list-none text-1.2 cursor-pointer hover:text-secondary hover:underline transition-all duration-150 ${
                  item.id === 1 ? "text-secondary" : ""
                }`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Topbar;
