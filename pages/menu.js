import axios from "axios";
import Banner from "../components/Menu/Banner";
import DishesMenu from "../components/Menu/DishesMenu";
import Facilities from "../components/Menu/Facilities";
import NewTaste from "../components/Menu/NewTaste";

function menu({ foods }) {
  return (
    <div>
      <Banner />
      <DishesMenu foods={foods} />
      <NewTaste />
      <Facilities />
    </div>
  );
}
export async function getServerSideProps(ctx) {
  try {
    const foodsRes = await axios.get("http://localhost:3000/api/foods");

    return {
      props: {
        foods: foodsRes.data,
      },
    };
  } catch (error) {
    console.error(error.response.data);
  }
}
export default menu;
