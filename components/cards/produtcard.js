import Image from "next/future/image";
import { useRouter } from "next/router";

const ProductCard = () => {
  const router = useRouter();
  return (
    <>
      <div
        className={`h-full w-full hover:shadow-a hover:scale-95 hover:-translate-y-0.2 transition-all duration-150 cursor-pointer`}
        onClick={() => {
          router.push("/12133222");
        }}
      >
        <div className="h-17.6  relative">
          <Image
            src={`http://placeimg.com/640/480/mobile`}
            alt={`img`}
            fill
            className={`object-cover`}
          ></Image>
        </div>
        <div className=" p-0.8 ">
          <div className={`leading-7 text-1.6`}>
            Est sed ipsum quaejkml mollitia.
          </div>
          <div className="text-secondary my-0.6 text-2">Rs.997</div>
          <div className="flex flex-row text-1.2">
            <div className="line-through">Rs.1500</div>
            <div className={`ml-1`}>-33%</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
