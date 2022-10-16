function Banner() {
  return (
    <div
      className="py-16"
      style={{
        backgroundImage: "url(https://i.ibb.co/6FXVm0S/about-Banner-1.jpg)",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-5xl font-extrabold text-center">Menu Restaurant</h2>
      <h3 className="text-center font-semibold text-gray-600 text-sm my-3">
        Home &gt; Menu Restaurant
      </h3>
    </div>
  );
}

export default Banner;
