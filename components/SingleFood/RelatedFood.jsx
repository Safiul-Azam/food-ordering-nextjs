import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function RelatedFood() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  console.log(foods);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-8 my-12">
      {foods?.slice(0, 4).map((food) => {
        return (
          <div key={food._id} className="rounded-3xl border">
            <div className="m-2 mb-0 px-3 pt-3 pb-7 rounded-3xl hover:bg-[#F7F2E2] hover:duration-500 hover:ease-in-out ease-in-out duration-500 ">
              <div className="flex justify-between">
                <h3
                  className={`${
                    food?.role?.length &&
                    "font-bold text-sm bg-gray-800 rounded-xl px-3 text-white"
                  }`}
                >
                  {food?.role}
                </h3>
                <FaHeart className="text-gray-300 text-xl hover:text-red-500" />
              </div>
              <figure className="flex justify-center">
                <Image width={200} height={200} src={`${food.img}`} alt="" />
              </figure>
            </div>
            <div className="p-5">
              <Link href={`/food/${food._id}`}>
                <h2 className="text-lg font-bold text-black py-2 hover:text-secondary cursor-pointer hover:duration-300 hover:ease-in-out ease-in-out duration-300">
                  {food.title}
                </h2>
              </Link>
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
  );
}

export default RelatedFood;
