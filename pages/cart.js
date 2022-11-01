import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <table className="table w-full">
          <thead className="">
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
        </table>
      </div>
      <div className="text-red-500">
        <div className="text-red-500">
          <h2 className="text-red-500">CART TOTAL</h2>
          <div className="text-red-500">
            <p className="text-red-500">Subtotal:</p>$79.60
          </div>
          <div className="text-red-500">
            <p className="text-red-500">Discount:</p>$0.00
          </div>
          <div className="text-red-500">
            <p className="text-red-500">Total:</p>$79.60
          </div>
          <button className="text-red-500">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
