import React,{ useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import RelatedFood from "../../components/SingleFood/RelatedFood";
import ScrollFoodView from "../../components/SingleFood/ScrollFoodView";

function singleFood() {
  const [scroll, setScroll] = useState(false);
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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="py-20 container mx-auto flex space-x-10 items-center">
        <div className="w-1/2  border p-3 rounded-3xl">
          <img
            className="w-full p-8 rounded-2xl bg-[#F7F4EF]"
            src={food.img}
            alt=""
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl text-black font-extrabold">{food.title}</h2>
          <p className="text-lg text-[#80808C] ">{food.shortDescription}</p>
          <h3 className="text-3xl font-bold text-secondary">${food.price}</h3>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <FaPlus className=" text-black text-xs" />
              </div>
              <p className="font-bold text-black">8</p>
              <div className="bg-gray-200 p-2 rounded-full">
                <FaMinus className=" text-black text-xs" />
              </div>
            </div>
            <button className="btn-secondary btn text-black font-bold w-3/4">
              ADD TO CART
            </button>
            <div className="p-3 rounded-xl bg-[#F7F4EF]">
              <FaHeart className="text-gray-300 text-xl hover:text-secondary cursor-pointer " />
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="text-sm space-y-3 my-5">
            <p>
              SKU: <b>{food.SKU}</b>
            </p>
            <p>
              category: <b>{food.category}</b>
            </p>
            <p>
              Tags: <b>Burgers, Tacos</b>
            </p>
          </div>
          <hr className="border-gray-200" />
          <ul className="space-y-3 px-10">
            <li className="list-disc text-[#80808C]">Free global shipping on all orders</li>
            <li className="list-disc text-[#80808C]">
              30 days easy returns if you change your mind
            </li>
            <li className="list-disc text-[#80808C]">
              Order before noon for same day dispatch
            </li>
          </ul>
          <hr className="border-gray-200" />
          <div className="flex items-center space-x-10">
            <h3 className="text-lg font-bold">Guaranteed Safe Checkout</h3>
            <img src="https://i.ibb.co/Xz3Nys4/trust-symbols.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-16">
        <div className="text-center pb-12">
          <button className="btn btn-secondary px-10 font-bold">
            Description
          </button>
        </div>
          <div className="w-3/4 mx-auto text-[#80808C]">
            <p className="text-[#80808C]">{food.description}</p>
            <p className="text-[#80808C]">Ingredients: {food.Ingredients}</p>
          </div>
      </div>
      <div className="">
        <h3 className="text-3xl font-extrabold text-center text-black">RELATED PRODUCTS</h3>
        <RelatedFood/>
      </div>
      {scroll && <ScrollFoodView food={food}/>}
    </>
  );
}

export default singleFood;
