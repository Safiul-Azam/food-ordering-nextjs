function Quality() {
  const qualities = [
    {
      id: 1,
      title: "Chicken",
      desc: "Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.",
      img: "https://i.ibb.co/TR03rmd/about-imager-5.png",
    },
    {
      id: 2,
      title: "Burger",
      desc: "Some of the world’s best cheese is made close to home! All our deliciously melty Mozzarella is made with 100% Canadian milk. We’re proud to support Canadian dairy farmers.",
      img: "https://i.ibb.co/5vhx18k/about-imager-6.png",
    },
    {
      id: 3,
      title: "Pizza Douch",
      desc: "Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat..",
      img: "https://i.ibb.co/GQ6vfmb/about-imager-7.png",
    },
  ];
  return (
    <div className="container mx-auto ">
      {qualities.map((quality) => {
        return (
          <div className={`flex justify-between items-center my-20 space-x-10`} key={quality.id}>
            <div className="w-3/4">
              <h4 className="text-lg text-secondary mb-3">Our Quality</h4>
              <h2 className="text-4xl text-[#1E1D23] font-extrabold">{quality.title}</h2>
              <p className="text-gray-500 leading-7 my-10">{quality.desc}</p>
              <button className="btn btn-secondary px-10 font-bold">
                ORDER NOW
              </button>
            </div>
            <div className="w-3/4">
              <img src={quality.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Quality;
