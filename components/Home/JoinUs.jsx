function JoinUs() {
  return (
    <div
      className=" py-20 text-center"
      style={{
        backgroundImage: "url(https://i.ibb.co/VmRV5kz/background-footer2.jpg)",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-2xl font-bold my-3">Join For Hot Offers</h2>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter Email"
          className="input input-bordered rounded-l-lg rounded-r-none w-1/3"
        />
        <button className="btn btn-secondary rounded-r-lg rounded-l-none px-10 font-bold">SUBSCRIBE</button>
      </div>
      <p className="text-sm my-3">
        I have read and agree to the Privacy Policy.
      </p>
    </div>
  );
}

export default JoinUs;
