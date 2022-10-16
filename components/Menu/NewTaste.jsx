function NewTaste() {
  return (
    <div className="flex">
      <div
        className="text-center static text-white w-full"
        style={{
          background: `linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url(https://i.ibb.co/XDKd3r4/banner-menu-1.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="py-36 px-4">
          <div className="flex justify-center items-center flex-col">
            <div className="p-1 border-[#E5E5E5] group mb-10">
              <h2 className="text-5xl font-bold mb-4">Explore the new taste</h2>
              <p className="text-lg mb-6">
                Enjoy our luscious dishes wherever you want
              </p>
              <button className="btn btn-secondary px-10 font-bold">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-white w-full bg-[rgba(247,244,239,0.76)]"
        style={{
          background:
            "linear-gradient(rgba(247,244,239,0.4),rgba(247,244,239,0.4)),url(https://i.ibb.co/j3PrQs8/menu-banner-2-h4.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-2/3 mx-auto px-4">
          <div className="">
            <div className="flex justify-between items-center">
              <h2 className="text-black text-lg font-bold">Pizza Hut</h2>
              <h2 className="text-secondary text-lg font-bold">$4.95</h2>
            </div>
            <hr className="border-dashed border-[#666]" />
            <p className="text-[#666]">Shrimp, Squid, Pineapple</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default NewTaste;
