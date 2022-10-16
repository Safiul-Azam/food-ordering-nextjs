import axios from "axios";
import Banner from "../components/Menu/Banner";
import DishesMenu from "../components/Menu/DishesMenu";

function menu({foods}) {
  return (
    <div>
      <Banner />
      <DishesMenu  foods={foods}/>
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
export default menu;
