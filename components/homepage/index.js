// ! imported from "/pages/index.js"
import Images from "./images";
import FlashSale from "./flashsale";
import GifImage from "./gifimage";

const HomePage = ({ data }) => {
  return (
    <>
      <Images />

      <div className="bg-gray px-12.8 h-max w-full">
        <GifImage />
        <FlashSale data={data} />
        <div className="h-screen"></div>
      </div>
    </>
  );
};

export default HomePage;
