import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../Components/Featured";
import PizzaCard from "../Components/PizzaCard";
import PizzaList from "../Components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant In India</title>
        <meta name="description" content="Best Pizza Shop In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data.data,
    },
  };
};
