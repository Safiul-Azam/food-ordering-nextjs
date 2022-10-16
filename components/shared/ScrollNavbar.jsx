import { BsFillSuitHeartFill, BsSearch } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import logo from "../../images/icon/logo.png";
import Image from "next/image";
import Link from "next/link";
function ScrollNavbar() {
  const menu = (
    <ul className="flex space-x-10 text-sm">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
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
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="w-full bg-base-100 fixed mx-auto z-10 shadow-sm">
      <div className="navbar container mx-auto flex justify-between">
        <div className="space-x-6">
          <a className="text-primary font-extrabold text-3xl flex items-center">
            <Image src={logo} alt="" />
            Safi <span className="text-secondary">Food!</span>
          </a>
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
            <BsSearch className="text-xl" />
          </div>
          <div className="border p-3 flex justify-center items-center rounded-full">
                <div className="indicator">
                  <BsFillSuitHeartFill className="text-xl cursor-pointer" />
                  <span className="badge badge-sm indicator-item badge-secondary">
                    2
                  </span>
                </div>
              </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <GiShoppingCart className="text-2xl" />
                <span className="badge badge-sm indicator-item badge-secondary">
                  8
                </span>
              </div>
            </label>
            <div
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
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 border rounded-full">
                <img src="https://i.ibb.co/BNKwgKz/User-Profile.png" alt="" />
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
  );
}

export default ScrollNavbar;
