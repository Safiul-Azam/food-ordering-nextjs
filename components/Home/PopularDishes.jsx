import Image from "next/image";
import { useEffect, useState } from "react";

function PopularDishes() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h2 className="text-center">Popular dishes</h2>

      <div className="container mx-auto grid grid-cols-4 gap-8">
        {foods.map((food) => {
          return (
            <div key={food.id} className="card border ">
              <figure>
                <img width={200} height={200} src={`${food.img}`} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
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
