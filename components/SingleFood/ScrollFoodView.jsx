import Image from "next/image";
function ScrollFoodView({ food }) {
  return (
    <div className="w-full p-2 bg-[#F7F2E2] fixed bottom-0 mx-auto z-10 drop-shadow-xl ">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <Image className='border-black p-2' width={60} height={60} src={food.img} alt="" />
          <div>
            <p className="text-black">
              You&apos;re viewing: <b>{food.title}</b>
            </p>
          <h3 className="text-lg font-bold text-secondary">${food.price}</h3>
          </div>
        </div>
        <div>
          <button className="btn-secondary btn text-black font-bold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScrollFoodView;
