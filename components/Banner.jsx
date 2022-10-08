import Image from "next/image";
import banner3 from "../images/banner/banner-8.png";
import banner1 from "../images/banner/bg-img-1.png";

function Banner() {
  
  return (
      <div
        className="bg-[#CE2829]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/4WrQkcr/bg-img-1.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 mx-auto space-y-2 text-center pt-12">
          <h4 className="text-2xl text-secondary font-medium py-5">
            Do not miss it!
          </h4>
          <h2 className="text-5xl font-bold text-white">PIZZA TASTES BETTER</h2>
          <h2 className="text-5xl font-bold text-white">THAN SKINNY FEELS.</h2>
          <button className="btn btn-secondary rounded-full px-10">GET IN NOW</button>
        </div>
        <div className="w-3/4 mx-auto relative top-2 z-0">
          <Image  src={banner3} alt="" />
        </div>
      </div>
  );
}

export default Banner;
