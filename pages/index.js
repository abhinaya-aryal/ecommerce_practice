import Head from "next/head";
import HomePage from "../components/homepage";

const Home = () => {
  return (
    <>
      <Head>
        <title>HamroPasal Home</title>
      </Head>
      <HomePage />
      <div className="h-screen"></div>
    </>
  );
};

export default Home;
