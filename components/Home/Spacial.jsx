import Image from "next/image";
import img2 from "../../images/spacial/2.png";
import offer from "../../images/spacial/offer.png";
function Spacial() {
  return (
    <div className="my-24 w-full px-32">
      <div className="grid grid-cols-2 grid-flow-col container gap-x-5 mx-auto">
        <div
          className="row-span-2 bg-[#CE2829] p-10 pb-0 rounded-2xl"
          style={{
            backgroundImage: `url(https://i.ibb.co/0nmby7N/1.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="space-y-6 w-3/4">
            <h2 className="text-6xl font-bold text-white">Special Deliciaus</h2>
            <p className="text-lg text-white font-bold">Maxican Pizza Testes Better</p>
            
          </div>
          <div className="text-right flex justify-between items-start">
          <button className="btn text-pink-600 rounded-full bg-white mt-6">
              ORDER NOW
            </button>
            <Image width={250} height={250} className="" src={offer} alt="" />
          </div>
        </div>
        <div className="bg-[#292929] p-8 flex justify-between items-center col-span-1 mb-5">
          <div>
            <h2 className="text-4xl text-white">Enjoy Our Delicious Item</h2>
            <button className="text-pink-600 rounded-full btn bg-white">
              ORDER NOW
            </button>
          </div>
          <Image src={img2} alt="" />
        </div>
        <div className="bg-[#292929] p-8 flex justify-between items-center col-span-1">
          <div>
            <h2 className="text-4xl text-white">Enjoy Our Delicious Item</h2>
            <button className="text-pink-600 rounded-full btn bg-white">
              ORDER NOW
            </button>
          </div>
          <Image src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Spacial;
