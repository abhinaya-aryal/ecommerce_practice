const FlashSale = ({ data }) => {
  console.table(data);
  return (
    <>
      <div className="mt-2">
        <div className={` text-2.4 mb-0.6`}>Flash Sale</div>
        <div className="h-max w-full py-1 flex flex-row justify-between items-center text-secondary px-1.6 text-1.6 bg-white">
          <div>On Sale Now</div>
          <div
            className={`border border-secondary px-0.6 cursor-pointer py-0.6`}
          >
            SHOP MORE
          </div>
        </div>

        <div className="h-36 w-full bg-white text-1.6 mt-0.2"></div>
      </div>
    </>
  );
};

export default FlashSale;
