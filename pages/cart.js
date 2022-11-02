import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const food = cart.foods.map((food) => food);
  return (
    <div className="grid grid-cols-3 pb-16">
      <div className="col-span-2">
        {cart.foods.length <= 0 ? <Link className="" href='/shop'><h3 className="text-secondary hover:underline cursor-pointer text-center mt-20">Please go to our shop page</h3></Link> :<table className="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>Food</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="">
            {cart?.foods.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td className="capitalize">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={food?.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{food.title}</td>
                <td>${food.price}</td>
                <td>{food.quantity}</td>
                <td>
                  <FaTrashAlt className="text-red-500 cursor-pointer" />
                </td>
                <td>
                  <div className="flex items-center">
                    Details
                    <BiRightArrowAlt className="mt-1" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
      <div className=" py-16 px-10 border space-y-2">
        <h2 className="text-xl text-center mb-10">Your Cart</h2>
        
        <div>
          {cart?.foods?.length === 0 ? <h3 className="text-center text-red-300 my-8">No food has been Selected yet!</h3> :cart?.foods.map((food) => (
            <div key={food._id} className="flex justify-between">
              <h2 className="text-sm text-primary">{food.title}</h2>
              <h2>
                ${parseInt(food.price)} x {food.quantity} = 
                 ${parseInt(food.price) * food.quantity}
              </h2>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="">Subtotal:</p>${parseInt(cart.total)}
        </div>
        <div className="flex justify-between">
          <p className="">Discount:</p>$00
        </div>
        <div className="flex justify-between">
          <b className="mb-12">Total(incl.VAT):</b>${parseInt(cart.total)}
        </div>
        <button className="btn-secondary btn text-black font-bold w-full">
          Check out now
        </button>
      </div>
    </div>
  );
};

export default Cart;
