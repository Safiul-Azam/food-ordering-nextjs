import Image from "next/image";
import Link from "next/link";
import { BsBasket2Fill } from "react-icons/bs";
import { FaHeart, FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

function ShowingFoods({ filterByBtn, foods }) {

  const handleChange = () => {}
  return (
    <>
      <div className="flex justify-between items-center rounded-lg">
        <p className="text-sm text-[#999999]">
          Showing 1 - {foods.length} of 54 results
        </p>
        <div className="flex items-center space-x-4">
          <IoGridSharp className="text-xs text-black"/>
          <FaThList className="text-xs text-[#999999]"/>
          <select
            onChange={handleChange}
            className="py-4 px-2 bg-[#FBF7E8]"
            id="adult"
          >
            <option>Default Sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>
      <div className=" py-8 container mx-auto grid grid-cols-3 gap-5 mb-10">
        {filterByBtn?.length > 0
          ? filterByBtn.slice(0,6).map((food) => {
              return (
                <div key={food._id} className="rounded-3xl border">
                  <div className="m-2 mb-0 px-3 pt-3 pb-4 rounded-3xl hover:bg-[#F7F2E2] hover:duration-500 hover:ease-in-out ease-in-out duration-500 ">
                    <div className="flex justify-between">
                      <h3
                        className={`${
                          food?.role?.length > 0 &&
                          "font-bold text-sm bg-gray-800 rounded-xl px-3 text-white"
                        }`}
                      >
                        {food?.role}
                      </h3>
                      <FaHeart className="text-gray-300 text-xl hover:text-red-500 cursor-pointer" />
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
                  <div className="p-4">
                    <Link href={`/food/${food._id}`}>
                      <h2 className="text-lg font-bold text-black py-1 hover:text-secondary cursor-pointer hover:duration-300 hover:ease-in-out ease-in-out duration-300">
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
                        <BsBasket2Fill className="hover:text-white text-black cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : foods?.slice(0, 6).map((food) => {
              return (
                <div key={food._id} className="rounded-3xl border">
                  <div className="m-2 mb-0 px-3 pt-3 pb-4 rounded-3xl hover:bg-[#F7F2E2] hover:duration-500 hover:ease-in-out ease-in-out duration-500 ">
                    <div className="flex justify-between">
                      <h3
                        className={`${
                          food?.role?.length > 0 &&
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
                  <div className="p-4">
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
    </>
  );
}

export default ShowingFoods;
