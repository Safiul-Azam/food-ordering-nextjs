import Image from "next/image";
import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
// import DishesMenu from "./DishesMenu";

function PopularDishes({ filterByBtn, foods }) {
  return (
    <>
      <div className="container mx-auto grid grid-cols-4 gap-8 mb-10">
        {filterByBtn?.length > 0
          ? filterByBtn.map((food) => {
              return (
                <div key={food.id} className="rounded-3xl border">
                  <div className="m-2 mb-0 px-3 pt-3 pb-7 rounded-3xl hover:bg-[#F7F2E2] hover:duration-500 hover:ease-in-out ease-in-out duration-500 ">
                    <div className="flex justify-between">
                      <h3
                        className={`${
                          food.role.length &&
                          "font-bold text-sm bg-gray-800 rounded-xl px-3 text-white"
                        }`}
                      >
                        {food?.role}
                      </h3>
                      <FaHeart className="text-gray-300 text-xl hover:text-red-500" />
                    </div>
                    <figure className="flex justify-center">
                      <Image
                        width={200}
                        height={200}
                        src={`${food.img}`}
                        alt=""
                      />
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
            })
          : foods.map((food) => {
              return (
                <div key={food.id} className="rounded-3xl border">
                  <div className="m-2 mb-0 px-3 pt-3 pb-7 rounded-3xl hover:bg-[#F7F2E2] hover:duration-500 hover:ease-in-out ease-in-out duration-500 ">
                    <div className="flex justify-between">
                      <h3
                        className={`${
                          food.role.length &&
                          "font-bold text-sm bg-gray-800 rounded-xl px-3 text-white"
                        }`}
                      >
                        {food?.role}
                      </h3>
                      <FaHeart className="text-gray-300 text-xl hover:text-red-500" />
                    </div>
                    <figure className="flex justify-center">
                      <Image
                        width={200}
                        height={200}
                        src={`${food.img}`}
                        alt=""
                      />
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
      <div className="text-center pb-16">
        <button className="btn btn-secondary px-10">All Foods</button>
      </div>
    </>
  );
}

export default PopularDishes;
