import Head from "next/head";
import HomePage from "../components/homepage";

const Home = ({ product }) => {
  return (
    <>
      <Head>
        <title>Buy Now | Home</title>
      </Head>

      <HomePage data={product} />
    </>
  );
};

// export async function getStaticProps() {
//   const url = process.env.DB_URL;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": process.env.DB_KEY,
//       "X-RapidAPI-Host": process.env.DB_HOST,
//     },
//   };

//   const response = await fetch(url, options);
//   const { data } = await response.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

export default Home;
