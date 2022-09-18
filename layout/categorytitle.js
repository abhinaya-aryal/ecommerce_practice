// # imported from "/layout/category.js"

import { AiFillCaretDown } from "react-icons/ai";

const CategoryTitle = () => {
  return (
    <div
      className={`peer h-full flex items-center cursor-pointer hover:text-secondary
      }`}
    >
      <div className="w-max text-1.4 pr-0.1">CATEGORIES</div>
      <AiFillCaretDown className={`w-1.6 h-auto`} />
    </div>
  );
};

export default CategoryTitle;
