function Banner() {
  return (
    <div
    className="py-24"
      style={{
        backgroundImage: "url(https://i.ibb.co/6FXVm0S/about-Banner-1.jpg)",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
        <h2 className="text-5xl font-extrabold text-center">About Us</h2>
        <h3 className="text-center font-semibold text-sm my-3">Home &gt; About us</h3>
    </div>
  );
}

export default Banner;