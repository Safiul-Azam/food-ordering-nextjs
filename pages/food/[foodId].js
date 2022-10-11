import { FaHeart } from "react-icons/fa";

function singleFood() {
  const food = {
    id: 2,
    role: "sale!",
    title: "Apricot Chicken",
    price: 18.33,
    Ingredients:
      "Dr. Praeger’s Black Bean Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato, Swiss Cheese",
    shortDescription:
      "Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl.",
    description:
      "Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
    category: "Pizza",
    SKU: "n/a",
    rating: 4.5,
    img: "https://i.ibb.co/jLMvQFp/apricot.png",
  };
  return (
    <div className="py-20 container mx-auto flex space-x-10 items-center">
      <div className="w-1/2 border p-3 rounded-3xl">
        <img
          className="w-full p-8 rounded-2xl bg-[#F7F4EF]"
          src={food.img}
          alt=""
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl text-black font-extrabold">{food.title}</h2>
        <p className="text-lg text-[#80808C] ">{food.shortDescription}</p>
        <h3 className="text-3xl font-bold text-secondary">${food.price}</h3>
        <hr className="border-gray-200" />
        <div className="flex items-center space-x-2 w-full">
          <button className="btn-secondary btn text-black font-bold">
            ADD TO CART
          </button>
          <div className="p-3 rounded-xl bg-[#F7F4EF]">
            <FaHeart className="text-gray-300 text-xl hover:text-secondary cursor-pointer " />
          </div>
        </div>
        <hr className="border-gray-200" />
        <p>
          SKU: <b>{food.SKU}</b>
        </p>
        <p>
          category: <b>{food.category}</b>
        </p>
        <hr className="border-gray-200" />
        <ul className="text-[#80808C] space-y-3">
          <li>Free global shipping on all orders</li>
          <li>30 days easy returns if you change your mind</li>
          <li>Order before noon for same day dispatch</li>
        </ul>
        <hr className="border-gray-200" />
      </div>
    </div>
  );
}

export default singleFood;
