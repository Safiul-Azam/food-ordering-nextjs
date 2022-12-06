import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import RelatedFood from "../../components/SingleFood/RelatedFood";
import ScrollFoodView from "../../components/SingleFood/ScrollFoodView";
import { addFood } from "../../redux/cartSlice";

function SingleFood({ food }) {
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(food.price);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const handleClick = () => {
    dispatch(addFood({ ...food, price, quantity }));
  };
  return (
    <>
      <div className="py-20 container mx-auto flex space-x-10 items-center">
        <div className="w-1/2 border p-2 rounded-3xl">
          <Image
            width={750}
            height={750}
            className="rounded-2xl bg-[#F7F4EF]"
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
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <FaPlus className=" text-black text-xs" />
              </div>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                defaultValue={1}
                type="number"
                className="font-bold text-black w-10 border-secondary border outline-secondary px-1"
              />
              <div className="bg-gray-200 p-2 rounded-full">
                <FaMinus className=" text-black text-xs" />
              </div>
            </div>
            <button
              onClick={handleClick}
              className="btn-secondary btn text-black font-bold w-3/4"
            >
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
            <li className="list-disc text-[#80808C]">
              Free global shipping on all orders
            </li>
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
            <div>
              <Image
                width={250}
                height={25}
                src="https://i.ibb.co/Xz3Nys4/trust-symbols.png"
                alt=""
              />
            </div>
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
        <h3 className="text-3xl font-extrabold text-center text-black">
          RELATED PRODUCTS
        </h3>
        <RelatedFood />
      </div>
      {scroll && <ScrollFoodView food={food} />}
    </>
  );
}
export async function getServerSideProps({ params }) {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/foods/${params.foodId}`
    );
    return {
      props: {
        food: res.data,
      },
    };
  } catch (error) {
    console.error(error.response.data);
  }
}

export default SingleFood;
