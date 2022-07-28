import Head from "next/head";
import Image from "next/image";
import Featured from "../Components/Featured";
import PizzaCard from "../Components/PizzaCard";
import PizzaList from "../Components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant In India</title>
        <meta name="description" content="Best Pizza Shop In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
