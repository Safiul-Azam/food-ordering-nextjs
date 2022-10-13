import Head from "next/head";
import Banner from "../components/Home/Banner";
import BestBurger from "../components/Home/BestBurger";
import ClientSay from "../components/Home/ClientSay";
import HotDog from "../components/Home/HotDog";
import JoinUs from "../components/Home/JoinUs";
import Menus from "../components/Home/Menus";
import PopularDishes from "../components/Home/PopularDishes";
import Special from "../components/Home/Special";
import TopRecipes from "../components/Home/TopRecipes";
import styles from "../styles/Home.module.css";
import DishesMenu from '../components/Home/DishesMenu'
import axios from "axios";

export default function Home({foods}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Menus />
      <Special />
      <DishesMenu foods={foods}/>
      <HotDog />
      <TopRecipes />
      <ClientSay/>
      <BestBurger />
      <JoinUs />
    </div>
  );
}

export async function getServerSideProps(ctx){
  const res = await axios.get('http://localhost:3000/api/foods')

  return {
    props:{
      foods:res.data
    }
  }
}
