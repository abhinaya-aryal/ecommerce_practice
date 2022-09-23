import Image from "next/future/image";
import gif from "../../public/gif.png";
import Link from "next/link";

const GifImage = () => {
  return (
    <>
      <div className={`h-16 pt-3.2 box-content w-max mx-auto relative`}>
        <Link href={"/090409901109303920999309-4343/dashain-sale/recommend"}>
          <a>
            <Image
              src={gif}
              alt="gif"
              className={`cursor-pointer h-full w-auto mx-auto  object-cover`}
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default GifImage;
