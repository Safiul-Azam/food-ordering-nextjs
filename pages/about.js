import Banner from "../components/About/Banner";
import BurgerIdeas from "../components/About/BurgerIdeas";
import ClientSay from "../components/About/ClientSay";
import PromotionalVideo from "../components/About/PromotionalVideo";
import Quality from "../components/About/Quality";

function about({ reviews }) {
  return (
    <div>
      <Banner />
      <BurgerIdeas />
      <PromotionalVideo />
      <Quality />
      <ClientSay reviews={reviews} />
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const res = await fetch("http://localhost:3000/api/reviews");
  const data = await res.json();

  return {
    props: {
      reviews: data,
    },
  };
}
export default about;
