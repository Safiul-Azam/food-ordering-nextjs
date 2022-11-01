import { useEffect, useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import logo from "../../images/icon/logo.png";
import Image from "next/image";
import ScrollNavbar from "./ScrollNavbar";
import Link from "next/link";
import { useSelector } from "react-redux";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const menu = (
    <ul className="flex space-x-10 text-sm">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/shop">
          <a>Shop</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Page</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      {scroll ? (
        <ScrollNavbar />
      ) : (
        <div className="mt-3 shadow-lg bg-base-100 z-50 pb-5">
          <div className="navbar container mx-auto flex justify-between">
            <div className="space-x-6">
              <Link href="/">
                <h4 className="text-primary font-extrabold text-3xl flex items-center cursor-pointer hover:primary">
                  <Image src={logo} alt="" />
                  Safi <span className="text-secondary">Food!</span>
                </h4>
              </Link>
              {menu}
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <MdOutlineDeliveryDining className="text-6xl text-primary" />
                <div>
                  <p className="text-xs text-gray-400">Call and Order in</p>
                  <h2 className="text-2xl text-secondary font-bold">
                    +1 718-904-4450
                  </h2>
                </div>
              </div>
              <div className="border rounded-full p-3">
                <BsSearch className="text-xl cursor-pointer" />
              </div>
              <div className="border p-3 flex justify-center items-center rounded-full">
                <div className="indicator">
                  <BsFillSuitHeartFill className="text-xl cursor-pointer" />
                  <span className="badge badge-sm indicator-item badge-secondary">
                    6
                  </span>
                </div>
              </div>
              <Link href='/cart'>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="cursor-pointer border p-3 flex justify-center items-center rounded-full"
                  >
                    <div className="indicator">
                      <GiShoppingCart className="text-2xl" />
                      <span className="badge badge-sm indicator-item badge-secondary">
                        {quantity}
                      </span>
                    </div>
                  </label>
                  {/* <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div> */}
                </div>
              </Link>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-12 border rounded-full">
                    <img
                      src="https://i.ibb.co/BNKwgKz/User-Profile.png"
                      alt=""
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
