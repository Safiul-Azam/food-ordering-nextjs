import React, { useEffect, useState } from "react";

function DishesMenu() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const [filterByBtn, setFilterByBtn] = useState([]);
  const [productName, setProductName] = useState("");
  const [active, setActive] = useState("all");

  const btnByProductName = [
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
    setProductName(foods.find((food) => food?.category?.toLowerCase() === btn));
    setActive(btn);
  };
  return (
    <>
      <div className="flex justify-center space-x-10 mb-10">
        {btnByProductName.map((btn) => (
          <div
            className={`border flex justify-center hover:border-secondary w-28 p-2 rounded-3xl font-bold hover:duration-300 hover:ease-in-out ease-in-out duration-300 ${
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
    </>
  );
}

export default DishesMenu;
