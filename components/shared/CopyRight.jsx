import Image from "next/image";
import Link from "next/link";
import logo from "../../images/icon/logo.png";

const CopyRight = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center bg-[#CE2829]">
      <div className="text-white text-sm tracking-wide py-8 text-center">
        <h4 className="text-lg text-white text-center">
          &copy; Copyright {year} by{" "}
          <span className="text-secondary">Safi Food!</span>
        </h4>
      </div>
    </div>
  );
};

export default CopyRight;
