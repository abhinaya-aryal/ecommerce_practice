// @ category for searchbar

import CategoryData from "../data/categorydata";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import CategoryTitle from "./categotytitle";

const CategoryBlock = () => {
  const [state, setState] = useState({
    isActive: false,
    activeIndex: "",
  });

  return (
    <>
      <div className="relative h-4">
        <CategoryTitle isActive={state.isActive} />
        <div
          className="absolute border border-gray z-20 bg-white top-full right-0 w-24 text-1.4 py-1 hidden peer-hover:block  hover:block"
          onMouseLeave={() => {
            setState({
              isActive: false,
              activeIndex: "",
            });
          }}
        >
          <div className="relative">
            <div>
              {CategoryData.map((items, i) => {
                return (
                  <div
                    onMouseEnter={() => {
                      setState({
                        isActive: true,
                        activeIndex: i,
                      });
                    }}
                    key={items.id}
                    className={`pl-0.4 pr-1.2 py-0.4 flex items-center cursor-pointer ${
                      state.activeIndex === i
                        ? "bg-gray justify-between text-secondary"
                        : "justify-end"
                    }`}
                  >
                    <FaChevronLeft
                      className={` ${
                        state.activeIndex === i ? "block" : "hidden"
                      }`}
                    />
                    <div className="text-1.6">{items.name}</div>
                  </div>
                );
              })}
            </div>

            {state.isActive && (
              <div
                className={`absolute hover:block h-full w-full top-0 text-1.4 border border-gray z-20 right-full bg-white py-1 `}
              >
                {CategoryData[state.activeIndex].categories.map((item) => {
                  return (
                    <Link href={item.path} passHref key={item.name}>
                      <div className="text-1.6 pr-1.2 py-0.4 hover:bg-gray hover:text-secondary text-right cursor-pointer">
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBlock;
