import Head from "next/head";
import Image from "next/future/image";
import img from "../public/main.jpg";

const Home = () => {
  return (
    <>
      <Head>
        <title>HamroPasal Home</title>
      </Head>
      <Image
        src={img}
        alt="image"
        sizes={"50vw"}
        className={`h-36 w-full`}
        placeholder="blur"
      />
    </>
  );
};

export default Home;
