import React, { useEffect, useState } from "react";
import { BsArrowRight, BsBasket2Fill } from "react-icons/bs";

function TopRecipes() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="py-20">
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="flex justify-between mb-10">
            <h2 className="text-4xl font-bold text-black">Top Recipes</h2>
            <p className="flex items-center font-bold">See all <BsArrowRight className="text-primary text-xl ml-2"/></p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {foods.slice(0, 6).map((food) => {
              return (
                <div key={food.id} className="border rounded-3xl p-3">
                  <div className="flex justify-between items-center rounded-2xl bg-[#F7F2E2] p-3">
                    <img width={100} height={100} src={food.img} alt="" />
                    <div className="w-1/2">
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
        <div
          className="text-center pt-10"
          style={{
            backgroundImage: "url(https://i.ibb.co/hY972mP/banner-top-4.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h4 className="font-bold text-3xl text-white">Super Delicious</h4>
          <h2 className="font-bold text-6xl text-[#F00000] my-5">CHICKEN</h2>
          <h3 className="font-bold text-xl text-white">CALL US NOW:</h3>
          <h2 className="font-bold text-3xl text-[#F00000]">1-800-555-333</h2>
        </div>
      </div>
    </div>
  );
}

export default TopRecipes;
