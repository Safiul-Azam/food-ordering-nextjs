import Image from "next/image";
import banner3 from "../images/banner/banner-8.png";
import Navbar from "./Navbar";

function Banner() {
  //     https://i.ibb.co/9H0vG3R/banner.png
  // https://i.ibb.co/80hbF9q/banner-2.png
  // https://i.ibb.co/QX2xqSx/banner-3.png
  // https://i.ibb.co/8BV9rK2/banner-4.png
  // https://i.ibb.co/dbTWgc5/banner-pizza.png
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage:
            "radial-gradient(#CC2829, #CC2829),url(https://i.ibb.co/80hbF9q/banner-2.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute -top-20 left-1/3">
          <Image width={400} height={400} src={banner3} alt="" />
        </div> */}
        <div className="w-1/2 mx-auto space-y-4 text-center">
          <p className="text-xl text-secondary font-medium py-5">
            Do not miss it!
          </p>
          <h2 className="text-5xl font-bold text-white">PIZZA TASTES BETTER</h2>
          <h2 className="text-5xl font-bold text-white">THAN SKINNY FEELS.</h2>
          <button className="btn btn-secondary rounded-full px-10">GET IN NOW</button>
        </div>
        <div className="w-3/4 mx-auto">
          <Image src={banner3} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
