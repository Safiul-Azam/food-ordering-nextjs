import Image from "next/image";
import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";

function PopularDishes() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="py-20">
      <h2 className="text-center">Popular dishes</h2>

      <div className="container mx-auto grid grid-cols-4 gap-8">
        {foods.map((food) => {
          return (
            <div key={food.id} className="rounded-3xl border">
              <figure className="flex justify-center">
                <img width={200} height={200} src={`${food.img}`} alt="" />
              </figure>
              <div className="p-5">
                <h2 className="text-lg font-bold text-black py-2">{food.title}</h2>
                <p className="text-sm text-gray-500">{`${food.shortDescription.slice(
                  0,
                  69
                )}`}</p>
                <div className="flex justify-between items-center mt-6 pb-3">
                  <p className="text-secondary text-lg font-extrabold">
                    ${food.price}
                  </p>
                  <div className="bg-secondary p-2 rounded-xl">
                    <BsBasket2Fill />
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
