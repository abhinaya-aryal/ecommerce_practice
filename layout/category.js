// @ category for searchbar

import { AiFillCaretDown } from "react-icons/ai";
import CategoryData from "../data/categorydata";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const Category = () => {
  return (
    <>
      <div className="relative h-4">
        <div className="peer h-full flex items-center cursor-pointer hover:text-secondary">
          <div className="w-max text-1.4 pr-0.1">CATEGORIES</div>
          <AiFillCaretDown className={`w-1.6 h-auto`} />
        </div>
        <div className="absolute z-20 bg-white text-right top-full right-0 w-24 text-1.4 py-1 hidden peer-hover:block  hover:block shadow-lg">
          {CategoryData.map((item) => {
            return (
              <>
                <div className="group flex hover:justify-between justify-end pl-0.4 pr-1.2 py-0.4 hover:bg-gray items-center">
                  <FaChevronLeft
                    className={`text-secondary group-hover:block hidden`}
                  />
                  <div
                    className="list-none cursor-pointer text-1.6"
                    key={item.id}
                  >
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
