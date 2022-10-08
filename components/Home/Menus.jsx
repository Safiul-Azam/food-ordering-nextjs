import Image from "next/image";
import category1 from "../../images/menus/category-1.png";
import category2 from "../../images/menus/category-2.png";
import category3 from "../../images/menus/category-3.png";
import category4 from "../../images/menus/category-4.png";
import category5 from "../../images/menus/category-5.png";
import category6 from "../../images/menus/category-6.png";
import category7 from "../../images/menus/category-7.png";
function Menus() {
  const menus = [
    { id: 1, img: category1, title: "Burger" },
    { id: 2, img: category2, title: "Burger" },
    { id: 3, img: category3, title: "Burger" },
    { id: 4, img: category4, title: "Burger" },
    { id: 5, img: category5, title: "Burger" },
    { id: 6, img: category6, title: "Burger" },
    { id: 7, img: category7, title: "Burger" },
  ];
  return (
    <div className="bg-white relative shadow-lg pb-6">
      <div className="container mx-auto px-10 text-center ">
        <h2 className="btn btn-secondary px-10 relative -top-5">Menu</h2>
        <div className="flex justify-between items-center">
          {menus.map((menu) => {
            return (
              <div key={menu.id} className="">
                <div className="w-32 h-24">
                  <Image
                    className=""
                    height={0}
                    src={menu.img}
                    alt=""
                  />
                </div>
                <p className="text-center font-bold">{menu.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menus;
