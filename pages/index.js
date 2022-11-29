import Head from "next/head";
import Banner from "../components/Home/Banner";
import BestBurger from "../components/Home/BestBurger";
import ClientSay from "../components/Home/ClientSay";
import TastyFood from "../components/Home/TastyFood";
import JoinUs from "../components/Home/JoinUs";
import Menus from "../components/Home/Menus";
import Special from "../components/Home/Special";
import TopRecipes from "../components/Home/TopRecipes";
import styles from "../styles/Home.module.css";
import DishesMenu from '../components/Home/DishesMenu'
import axios from "axios";

export default function Home({foods,reviews}) {
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
      <TastyFood />
      <TopRecipes foods={foods}/>
      <ClientSay/>
      <BestBurger />
      <JoinUs />
    </div>
  );
}

export async function getServerSideProps(ctx){
  const foodsRes = await axios.get('http://localhost:3000/api/foods')
  // const reviewsRes = await axios.get('http://localhost:3000/api/reviews')

  return {
    props:{
      foods:foodsRes.data,
      // reviews:reviewsRes.data
    }
  }
}
