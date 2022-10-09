import React, { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";

function TopRecipes() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  //   https://i.ibb.co/hY972mP/banner-top-4.jpg
  return (
    <div className="pt-20">
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold">Top Recipes</h2>
            <p>See all</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {foods.slice(0,6).map((food) => {
              return (
                <div
                  key={food.id}
                  className="border rounded-3xl p-3"
                >
                  <div className="flex justify-between items-center bg-yellow-50 p-3">
                    <img width={100} height={100} src={food.img} alt="" />
                    <div>
                      <h3 className="text-xl font-bold">{food.title}</h3>
                      <p className="text-sm">{food.category}</p>
                      <h3 className="text-xl font-bold text-secondary">
                        ${food.price}
                      </h3>
                    </div>
                    <div className="bg-secondary p-3 rounded-xl">
                      <BsBasket2Fill className="hover:text-white text-black" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>asdf</div>
      </div>
    </div>
  );
}

export default TopRecipes;
