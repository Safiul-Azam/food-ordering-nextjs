import { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import ShowingFoods from "./ShowingFoods";
import { GiCoffeeCup, GiFullPizza, GiWrappedSweet } from "react-icons/gi";
import { BsReplyAll } from "react-icons/bs";

function DishesMenu({ foods }) {
  const [filterByBtn, setFilterByBtn] = useState([]);
  const [active, setActive] = useState("all");

  const btnByFoodName = [
    { id: 1, name: "all", icon: <BsReplyAll className="text-2xl" /> },
    { id: 2, name: "pizza", icon: <GiFullPizza className="text-2xl" /> },
    { id: 3, name: "burger", icon: <FaHamburger className="text-2xl" /> },
    { id: 4, name: "cold drink", icon: <BiDrink className="text-2xl" /> },
    { id: 5, name: "hot drink", icon: <GiCoffeeCup className="text-2xl" /> },
    { id: 6, name: "dessert", icon: <GiWrappedSweet className="text-2xl" /> },
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
    <div className="container mx-auto grid grid-cols-4 gap-5 py-16">
      <div className="col-span-3">
        <ShowingFoods filterByBtn={filterByBtn} foods={foods} />
      </div>
      <div>
        <div className="border w-full p-2 rounded-2xl">
          <h3 className="text-black text-2xl font-bold my-3">Categories</h3>
          <div className="rounded-2xl bg-[#FBF7E8] p-3 pb-0">
            {btnByFoodName.map((btn) => (
              <div className="w-full space-y-4 " key={btn.id}>
                <div
                  className={`flex items-center space-x-4 hover:text-secondary ${
                    active === btn.name ? "text-secondary" : "text-[#999999]"
                  }`}
                  key={btn.id}
                >
                  {btn.icon}
                  <p
                    className="text-lg capitalize cursor-pointer"
                    onClick={() => handleClick(btn.name)}
                  >
                    
                    {btn.name}
                  </p>
                </div>
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
