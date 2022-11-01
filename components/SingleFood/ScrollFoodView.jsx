import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../redux/cartSlice";
function ScrollFoodView({ food }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(food.price);
  const [quantity, setQuantity] = useState(1);
  const handleClick = () => {
    dispatch(addFood({ ...food, price,quantity }));
  };
  return (
    <div className="w-full p-2 bg-[#F7F2E2] fixed bottom-0 mx-auto z-10 drop-shadow-xl ">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <Image className='border-black p-2' width={60} height={60} src={food.img} alt="" />
          <div>
            <p className="text-black">
              You&apos;re viewing: <b>{food.title}</b>
            </p>
          <h3 className="text-lg font-bold text-secondary">${food.price}</h3>
          </div>
        </div>
        <div>
          <button onClick={handleClick} className="btn-secondary btn text-black font-bold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}




export default ScrollFoodView;
