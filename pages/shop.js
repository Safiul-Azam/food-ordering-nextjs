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
  const res = await fetch("http://localhost:3000/api/foods");
  const data = await res.json();
  return {
    props: {
      foods: data,
    },
  };
}
export default shop;
