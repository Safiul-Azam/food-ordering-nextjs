import Image from "next/image";
import burger from "../../images/banner/h2_shape-2.png";
import victor from "../../images/banner/vector6-h3.png";

function BestBurger() {
  return (
    <div className="mb-16 flex justify-between items-center space-x-20 pr-6">
      <div className="w-1/2 text-center">
        <div className=" relative top-28 left-1/3">
          <Image src={victor} alt="" />
        </div>
        <Image src={burger} alt="" />
      </div>
      <div className="w-1/2 space-y-8">
        <h4 className="text-2xl text-secondary">Best Burger</h4>
        <h2 className="text-6xl text-black font-bold">
          From Texas with American Love
        </h2>
        <p className="text-gray-500">
          Although the legendary Double Burger really needs no introduction,
          please allow us… Tucked in between three soft buns are two all-beef
          patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce.
          Hesburger’s own paprika and cucumber mayonnaise add the crowning
          touch. Oh baby!
        </p>
        <button className="btn btn-secondary px-10 font-bold">ORDER NOW</button>
      </div>
    </div>
  );
}

export default BestBurger;
