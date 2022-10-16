import Image from "next/image";
import { BsArrowRight, BsBasket2Fill } from "react-icons/bs";

function MenuItems({ foods, filterByBtn }) {
  return (
    <>
      <div className="container mx-auto pb-20">
        <div className="grid grid-cols-2 gap-10">
          {filterByBtn?.length > 0
            ? filterByBtn.map((food) => {
                return (
                  <div key={food._id} className="border rounded-3xl p-2">
                    <div className="flex justify-between items-center rounded-2xl bg-[#F7F2E2] p-5">
                      <Image width={200} height={200} src={food.img} alt="" />
                      <div className="w-1/2 space-y-2">
                        <h3 className="text-xl font-bold text-black">
                          {food.title}
                        </h3>
                        <p className="text-gray-500">
                          {food.shortDescription.slice(0, 69)}
                        </p>
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
              })
            : foods?.slice(0, 8).map((food) => {
                return (
                  <div key={food._id} className="border rounded-3xl p-2">
                    <div className="flex justify-between items-center rounded-2xl bg-[#F7F2E2] p-5">
                      <Image width={200} height={200} src={food.img} alt="" />
                      <div className="w-1/2 space-y-2">
                        <h3 className="text-xl font-bold text-black">
                          {food.title}
                        </h3>
                        <p className="text-gray-500">
                          {food.shortDescription.slice(0, 69)}
                        </p>
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
    </>
  );
}

export default MenuItems;
