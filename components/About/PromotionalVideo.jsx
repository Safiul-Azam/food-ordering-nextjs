import { BsPlay } from "react-icons/bs";

function PromotionalVideo() {
  return (
    <div
      className="text-center static text-white"
      style={{
        background: `linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url(https://i.ibb.co/DKB607z/bg-video.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="py-28 px-4">
        <div className="flex justify-center items-center flex-col">
          <div className="border-4 rounded-full p-1 border-[#E5E5E5] group mb-10">
            <button className="border p-6 bg-secondary group-hover:bg-transparent rounded-full group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500">
              <BsPlay className="text-3xl font-extrabold group-hover:text-white text-white group-hover:duration-300 group-hover:ease-in ease-in duration-300" />
            </button>
          </div>
            <h2 className="text-5xl font-bold mb-4">
              Make the thing Anything is Possible
            </h2>
            <p className="text-lg mb-6">
              Enjoy our luscious dishes wherever you want
            </p>
            <button className="btn btn-secondary px-10 font-bold">
              ORDER NOW
            </button>
        </div>
      </div>
    </div>
  );
}

export default PromotionalVideo;
