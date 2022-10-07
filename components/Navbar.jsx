import { FcLikePlaceholder } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
function Navbar() {
  const menu = (
    <>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>ROOM & SUITES</li>
      <li>RESTAURANT</li>
      <li>SPA</li>
      <li>CONTACT</li>
    </>
  );
  return (
    <div className="mt-3 shadow-lg">
      <div className="navbar container mx-auto flex justify-between">
        <div className="space-x-6">
          <a className="text-primary font-extrabold text-2xl">Safi Food!</a>
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
          <div className="border rounded-full p-3">
            <FcLikePlaceholder className="text-xl" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <GiShoppingCart className="text-2xl"/>
                <span className="badge badge-sm indicator-item badge-secondary">8</span>
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
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
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

export default Navbar;
