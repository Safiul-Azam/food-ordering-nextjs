import Image from "next/image";
import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function PopularDishes() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="py-20">
      <h2 className="text-center text-4xl text-black font-extrabold mb-12">
        Popular dishes
      </h2>

      <div className="container mx-auto grid grid-cols-4 gap-8">
        {foods.map((food) => {
          return (
            <div key={food.id} className="rounded-3xl border">
              <div className="m-2 mb-0 px-3 pt-3 pb-7 rounded-3xl bg-yellow-50">
                <div className="flex justify-between">
                  <h3 className={`${food.role.length && 'font-bold text-sm bg-gray-800 rounded-xl px-3 text-white'}`}>{food?.role}</h3>
                  <FaHeart className="text-gray-200 text-xl hover:text-gray-800" />
                </div>
                <figure className="flex justify-center">
                  <img width={200} height={200} src={`${food.img}`} alt="" />
                </figure>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-black py-2">
                  {food.title}
                </h2>
                <p className="text-sm text-gray-500">{`${food.shortDescription.slice(
                  0,
                  69
                )}`}</p>
                <div className="flex justify-between items-center mt-6 pb-3">
                  <p className="text-secondary text-lg font-extrabold">
                    ${food.price}
                  </p>
                  <div className="bg-secondary p-3 rounded-xl">
                    <BsBasket2Fill className="hover:text-white text-black" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularDishes;
