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
    { id: 2, name: "Pizza" },
    { id: 3, name: "Burgers" },
    { id: 4, name: "Cool Drink" },
    { id: 5, name: "hot Drink" },
    { id: 6, name: "Desserts" },
  ];
  const handleClick = (btn) => {
    setFilterByBtn(
      foods.filter((food) => food?.category?.toLowerCase() === btn)
    );
    setFoodName(foods.find((food) => food?.category?.toLowerCase() === btn));
    setActive(btn);
  };
  return (
    <>
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
      {/* <PopularDishes filterByBtn={filterByBtn} productName={foodName} /> */}
    </>
  );
}

export default DishesMenu;
