import axios from "axios";
import Banner from "../components/Menu/Banner";
import DishesMenu from "../components/Menu/DishesMenu";
import Facilities from "../components/Menu/Facilities";

function menu({foods}) {
  return (
    <div>
      <Banner />
      <DishesMenu  foods={foods}/>
      <Facilities/>
    </div>
  );
}
export async function getServerSideProps(ctx){
    const foodsRes = await axios.get('http://localhost:3000/api/foods')
  
    return {
      props:{
        foods:foodsRes.data,
      }
    }
  }
export default menu;
