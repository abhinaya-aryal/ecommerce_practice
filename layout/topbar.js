// $ imported form "/layout/index.js"

import Link from "next/link";
import TopBarData from "../data/topbardata";

const Topbar = () => {
  return (
    <>
      <div
        className={`bg-gray w-full flex space-x-3.2 justify-end py-0.4 px-12.8`}
      >
        {TopBarData.map((item) => {
          return (
            <Link href={item.path} key={item.id}>
              <a
                className={`list-none text-1.2 cursor-pointer hover:text-secondary hover:underline transition-all duration-150 ${
                  item.id === 1 ? "text-secondary" : ""
                }`}
              >
                {item.name}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Topbar;
