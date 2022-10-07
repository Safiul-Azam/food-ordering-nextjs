import Image from "next/image";
import banner3 from "../images/banner/banner-3.png";
import Navbar from './Navbar'

function Banner() {
  //     https://i.ibb.co/9H0vG3R/banner.png
  // https://i.ibb.co/80hbF9q/banner-2.png
  // https://i.ibb.co/QX2xqSx/banner-3.png
  // https://i.ibb.co/8BV9rK2/banner-4.png
  // https://i.ibb.co/dbTWgc5/banner-pizza.png
  return (
    <>
    <Navbar/>
      <div
        className="h-screen relative z-0"
        style={{
          backgroundImage:
            "radial-gradient(at center center,#FFFFFF00 0%,#000000 100%),url(https://i.ibb.co/80hbF9q/banner-2.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute -top-20 left-1/3">
          <Image width={400} height={400} src={banner3} alt="" />
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
