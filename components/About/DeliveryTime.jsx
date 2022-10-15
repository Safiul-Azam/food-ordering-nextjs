import { BsPlay } from "react-icons/bs";

function DeliveryTime() {
  return (
    <div
      className="text-center static"
      style={{
        background: `url(https://i.ibb.co/crYhjtG/bg3-h3-3.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="py-28 px-16 w-1/2 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <h4 className="text-lg text-secondary mb-4 tracking-[5px]">
            We guarantee
          </h4>
          <h2 className="text-5xl font-extrabold mb-4">30 Minutes Delivery!</h2>
          <p className="text-gray-400 mb-6 px-5">
            If you’re having a meeting, working late at night and need an extra
            push. Let us know and we will be there
          </p>
          <button className="btn btn-secondary px-10 font-bold">
            MAKE AN ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryTime;
