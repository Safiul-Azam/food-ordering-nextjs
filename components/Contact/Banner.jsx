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
      <h2 className="text-5xl font-extrabold text-center">Contact Us</h2>
      <div className="breadcrumbs flex justify-center mt-4">
        <ul>
          <li>
            <p className="text-gray-400">Home</p>
          </li>
          <li>
            <p>Contact Us</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
