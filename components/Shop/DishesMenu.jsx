import { useState } from "react";
import ShowingFoods from "./ShowingFoods";
// import PopularDishes from "./PopularDishes";

function DishesMenu({ foods }) {
  const [filterByBtn, setFilterByBtn] = useState([]);
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
    if (btn === "all") {
      setFilterByBtn(foods);
    }
    // setFoodName(foods.find((food) => food?.category?.toLowerCase() === btn));
    setActive(btn);
  };
  return (
    <div className="container mx-auto grid grid-cols-4 gap-5">
      <div className="col-span-3">
        <ShowingFoods filterByBtn={filterByBtn} foods={foods} />
      </div>
      <div>
        <div className="border w-full p-2 rounded-2xl">
          <h3 className="text-black text-2xl font-bold my-3">Categories</h3>
          <div className="rounded-xl bg-[#FBF7E8] p-3">
            {btnByFoodName.map((btn) => (
              <div
                className={`w-full space-y-4 ${
                  active === btn.name ? "text-secondary" : ""
                }`}
                key={btn.id}
              >
                <a
                  className="text-sm capitalize"
                  onClick={() => handleClick(btn.name)}
                >
                  {btn.name}
                </a>
                <hr className="border-dashed" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishesMenu;
