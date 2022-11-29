import Banner from "../components/Menu/Banner";
import DishesMenu from "../components/Menu/DishesMenu";
import Facilities from "../components/Menu/Facilities";
import NewTaste from "../components/Menu/NewTaste";

function menu({foods}) {
  return (
    <div>
      <Banner />
      <DishesMenu  foods={foods}/>
      <NewTaste/>
      <Facilities/>
    </div>
  );
}
export async function getServerSideProps(ctx){
    const res = await fetch('http://localhost:3000/api/foods')
    const data = await res.json();
  
    return {
      props:{
        foods:data,
      }
    }
  }
export default menu;
