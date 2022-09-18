// $ imported from "/layout/category.js"

import { FaChevronLeft } from "react-icons/fa";
import CategoryData from "../data/categorydata";
import { useState } from "react";
import Link from "next/link";

const CategoryBlock = () => {
  const [state, setState] = useState({
    isHovered: false,
    index: null,
  });

  return (
    <>
      <div
        className={`absolute top-full right-0 text-1.6 hidden hover:block peer-hover:block`}
        onMouseLeave={() => {
          setState({ isHovered: false, index: null });
        }}
      >
        <div className="relative">
          <div
            className={`w-24 bg-white border border-gray h-max shadow-lg`}
            onMouseOver={(event) => {
              if (event.target.attributes["data-index"]?.value) {
                setState({
                  index: Number(event.target.attributes["data-index"].value),
                  isHovered: true,
                });
              }
            }}
          >
            {CategoryData.map((item, i) => {
              return (
                <div
                  data-index={String(i)}
                  className={`flex  items-center pl-0 py-0.4 pr-1 hover:bg-gray hover:text-secondary cursor-pointer ${
                    state.isHovered && state.index === i
                      ? "bg-gray text-secondary justify-between"
                      : "justify-end"
                  }`}
                  key={item.id}
                >
                  <FaChevronLeft
                    className={`${
                      state.isHovered && state.index === i ? "block" : "hidden"
                    }`}
                  />
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
          {state.isHovered && (
            <div
              className={`absolute top-0 right-full w-full h-full bg-white border border-gray shadow-lg ${
                state.isHovered ? "block" : "hidden"
              }`}
            >
              {CategoryData[state.index].categories.map((each, i) => {
                return (
                  <Link key={i} href={each.path}>
                    <div className="text-right pl-0 py-0.4 pr-1 hover:bg-gray hover:text-secondary cursor-pointer">
                      {each.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryBlock;
