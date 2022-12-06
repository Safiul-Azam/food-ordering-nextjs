import Banner from "../components/About/Banner";
import BurgerIdeas from "../components/About/BurgerIdeas";
import ClientSay from "../components/About/ClientSay";
import DeliveryTime from "../components/About/DeliveryTime";
import PromotionalVideo from "../components/About/PromotionalVideo";
import Quality from "../components/About/Quality";
import TalentedChefs from "../components/About/TalentedChefs";

function about({ reviews }) {
  return (
    <div>
      <Banner />
      <BurgerIdeas />
      <PromotionalVideo />
      <Quality />
      <ClientSay reviews={reviews} />
      <TalentedChefs />
      <DeliveryTime />
    </div>
  );
}
export async function getServerSideProps(ctx) {

  try {
    const res = await fetch("http://localhost:3000/api/reviews");
    const data = await res.json();
  
    return {
      props: {
        reviews: data,
      },
    };
  } catch (error) {
    console.error(error.response.data);
  }
}
export default about;
