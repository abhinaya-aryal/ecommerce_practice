import { AiFillCaretDown } from "react-icons/ai";

const Category = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer hover:text-secondary">
        <div className="w-max text-1.4 pr-0.1">CATEGORIES</div>
        <AiFillCaretDown className={` text-1.6`} />
      </div>
    </>
  );
};

export default Category;
