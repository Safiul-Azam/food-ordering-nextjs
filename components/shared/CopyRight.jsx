import Image from "next/image";
import Link from "next/link";
import logo from "../../images/icon/logo.png";
import Footer from '../../images/banner/footer_img1.png'

const CopyRight = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center bg-[#CE2829]">
      <div className="text-white text-sm tracking-wide py-6 text-center flex container mx-auto justify-between">
        <p className="text-white text-center">
          &copy; Copyright {year} by{" "}
          <span className="text-secondary">SafiFood!</span> All Rights Reserved.
        </p>
        <Image width={300} height={25} src='https://i.ibb.co/GMHH1W3/footer-img1.png' alt="" />
      </div>
    </div>
  );
};

export default CopyRight;
