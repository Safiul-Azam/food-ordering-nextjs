import Image from "next/image";
import category1 from "../../images/menus/category-1.png";
import category2 from "../../images/menus/category-2.png";
import category3 from "../../images/menus/category-3.png";
import category4 from "../../images/menus/category-4.png";
import category5 from "../../images/menus/category-5.png";
import category6 from "../../images/menus/category-6.png";
import category7 from "../../images/menus/category-7.png";
import category8 from "../../images/menus/category-8.png";
function Menus() {
  const menus = [
    { id: 1, img: category1, title: "COMBO" },
    { id: 2, img: category2, title: "KIDS MENUS" },
    { id: 3, img: category3, title: "CHICKEN" },
    { id: 4, img: category4, title: "PIZZA" },
    { id: 5, img: category5, title: "BURGER" },
    { id: 6, img: category7, title: "BOX MEALS" },
    { id: 7, img: category6, title: "SAUCES" },
    { id: 8, img: category8, title: "DRINKS" },
  ];
  return (
    <div className="bg-white relative shadow pb-12">
      <div className="container mx-auto px-10 text-center ">
        <button className="btn btn-secondary font-bold px-10 relative -top-5">Menu</button>
        <div className="flex justify-between items-center">
          {menus.map((menu) => {
            return (
              <div key={menu.id} className="group">
                <div className="w-32 h-24">
                  <Image
                    className=""
                    height={0}
                    src={menu.img}
                    alt=""
                  />
                </div>
                <p className="text-center text-xs font-extrabold group-hover:text-secondary hover:duration-300 hover:ease-in-out ease-in-out duration-300">{menu.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menus;
