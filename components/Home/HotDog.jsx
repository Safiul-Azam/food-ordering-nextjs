import Image from "next/image";
import think from "../../images/banner/think.png";

function HotDog() {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: "linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)),url(https://i.ibb.co/HHyTvwG/featured.png)",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-1/3 mx-auto text-center">
        <h4 className="text-secondary mb-4 text-2xl">Tasty how The new</h4>
        <h2 className="text-5xl text-white font-semibold leading-[60px]">Meet Your New Lunchtime Faves</h2>
        <button className="btn btn-accent rounded-full text-white px-12 mt-10">ORDER NOW</button>
      </div>
    </div>
  );
}

export default HotDog;
