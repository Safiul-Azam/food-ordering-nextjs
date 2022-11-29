import axios from "axios";
import Banner from "../components/Shop/Banner";
import DishesMenu from "../components/Shop/DishesMenu";
function shop({ foods }) {
  return (
    <div>
      <Banner />
      <DishesMenu foods={foods} />
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const foodsRes = await axios.get("http://localhost:3000/api/foods");

  return {
    props: {
      foods: foodsRes.data,
    },
  };
}
export default shop;
