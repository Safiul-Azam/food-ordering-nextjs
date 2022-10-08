import CopyRight from "./CopyRight";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div
        className=" py-10 text-center bg-black"
        style={{
          backgroundImage: "url(https://i.ibb.co/H40Dknz/shape-dot.png)",
        }}
      >
        <footer className="text-gray-500 justify-evenly space-x-10 p-10 footer">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">ADDRESS</h3>
            <a className="link link-hover">570 8th Ave,</a>
            <a className="link link-hover">New York, NY 10018</a>
            <a className="link link-hover">United States</a>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">BOOK A TABLE</h3>
            <a className="link link-hover">Dogfood och Sliders foodtruck.</a>
            <a className="link link-hover">Under Om oss kan ni läsa</a>
            <a className="text-secondary font-bold">(850) 435-4155</a>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">OPENING HOURS</h3>
            <a className="link link-hover">Monday – Friday: 8am – 4pm</a>
            <a className="link link-hover">Saturday: 9am – 5pm</a>
            <ul className="flex leading-none space-x-4 text-lg mt-4">
              <a
                href="https://www.linkedin.com/in/safiul-azam-b2a44a212/"
                className=" mb-4"
              >
                <FaInstagram className="hover:text-primary text-white hover:duration-500 duration-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/safiul-azam-b2a44a212/"
                className="mb-4"
              >
                <FaTwitter className="hover:text-primary text-white hover:duration-500 duration-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/safiul-azam-b2a44a212/"
                className="mb-4"
              >
                <FiYoutube className="hover:text-primary text-white hover:duration-500 duration-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/safiul-azam-b2a44a212/"
                className="mb-4"
              >
                <FaFacebookF className="hover:text-primary text-white hover:duration-500 duration-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/safiul-azam-b2a44a212/"
                className="mb-4"
              >
                <FaPinterestP className="hover:text-primary text-white hover:duration-500 duration-500" />
              </a>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">NEWSLETTER</h3>
            <a className="link link-hover">
              Subscribe to the weekly newsletter for all
            </a>
            <a className="link link-hover">the latest update</a>
            <div className="flex items-center justify-center mt-6">
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered bg-transparent rounded-l-lg rounded-r-none"
              />
              <button className="btn btn-secondary rounded-r-lg rounded-l-none font-bold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </footer>
      </div>
      <CopyRight />
    </>
  );
}

export default Footer;
