import React, { useEffect, useState } from "react";
import PopularDishes from "./PopularDishes";

function DishesMenu() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const [filterByBtn, setFilterByBtn] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [active, setActive] = useState("all");

  const btnByFoodName = [
    { id: 1, name: "all" },
    { id: 2, name: "pizza" },
    { id: 3, name: "burger" },
    { id: 4, name: "cold drink" },
    { id: 5, name: "hot drink" },
    { id: 6, name: "dessert" },
  ];
  const handleClick = (btn) => {
    setFilterByBtn(foods.filter((food) => food.category.toLowerCase() === btn));
    // setFoodName(foods.find((food) => food?.category?.toLowerCase() === btn));
    setActive(btn);
  };
  return (
    <>
      <div>
        <h2 className="text-center text-4xl text-black font-extrabold mb-12">
          Popular dishes
        </h2>
        <div className="flex justify-center space-x-10 mb-10">
          {btnByFoodName.map((btn) => (
            <div
              className={`border flex justify-center hover:border-secondary w-28 p-2 rounded-3xl font-bold hover:duration-200 hover:ease-in-out ease-in-out duration-200 ${
                active === btn.name ? "bg-secondary" : ""
              }`}
              key={btn.id}
            >
              <button
                className="text-sm capitalize"
                onClick={() => handleClick(btn.name)}
              >
                {btn.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <PopularDishes filterByBtn={filterByBtn} />
    </>
  );
}

export default DishesMenu;
