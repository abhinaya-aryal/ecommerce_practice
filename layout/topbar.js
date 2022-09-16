import TopBarData from "../data/topbardata";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div
        className={`bg-gray w-full flex space-x-2.8 justify-end py-0.4 px-9.6 z-50`}
      >
        {TopBarData.map((item) => {
          return (
            <>
              <Link href={item.path} passHref>
                <li
                  className={`list-none text-1.2 cursor-pointer hover:text-secondary hover:underline transition-all duration-150`}
                >
                  {item.name}
                </li>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Topbar;
