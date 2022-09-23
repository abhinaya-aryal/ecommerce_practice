// # imported from "/components/pages/index.js"

import Image from "next/future/image";
import { useEffect, useState } from "react";
import HomeImageData from "../../data/homeimagedata";
import Link from "next/link";

const Images = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (state === HomeImageData.length - 1) {
        setState(0);
      } else {
        setState((prevState) => {
          return prevState + 1;
        });
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [state, setState]);

  return (
    <>
      <div className="h-36 w-full relative cursor-pointer">
        <Link href={HomeImageData[state]?.path}>
          <a>
            <div className="h-full w-full relative">
              <Image
                src={HomeImageData[state]?.src}
                alt="image"
                sizes={"50vw"}
                fill
                placeholder={"blur"}
                priority
              />
            </div>
          </a>
        </Link>
        <div
          className="absolute bottom-0.4 py-0.4 left-0 h-max w-full  flex justify-center items-center space-x-0.4"
          onMouseOver={(event) => {
            if (
              event.target.attributes["data-index"]?.value &&
              state !== event.target.attributes["data-index"].value
            ) {
              setState(
                Number(event.target.attributes["data-index"].value) ?? 0
              );
            }
          }}
        >
          {HomeImageData.map((__, index) => {
            return (
              <div
                key={index}
                data-index={String(index)}
                className={`w-1 h-1 shadow-lg bg-white rounded-full transition-all duration-500 hover:bg-gray ${
                  state === index ? "bg-gray  scale-125" : "bg-white"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Images;
