import img1 from '../../images/about-photo/image1-h4.jpg'
import img2 from '../../images/about-photo/image2-h4.jpg'
import img3 from '../../images/about-photo/image3-h4.jpg'
function BurgerIdeas() {

  return (
    <div
      className="container mx-auto flex justify-between py-20"
      style={{
        backgroundImage: "url(https://i.ibb.co/fpN6zyk/vector2-about.png)",
        backgroundPosition: "center",
        backgroundSize: "300px",
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className='w-full'>
        <h4 className="text-secondary text-xl font-bold">Welcome!</h4>
        <h2 className="text-5xl text-black font-extrabold">Best burger ideas & traditions from the whole world</h2>
        <p className="text-sm text-gray-500">Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!</p>
        <button className="btn btn-secondary px-10 font-bold">ORDER NOW</button>
      </div>
      <div className='grid grid-cols-3 w-full'>
        <img className='' src='https://i.ibb.co/Z86cJWL/image1-h4.jpg' alt="" />
        <img className='' src='https://i.ibb.co/L9n7M1z/image3-h4.jpg' alt="" />
        <img className='' src='https://i.ibb.co/9TvFf2X/image2-h4.jpg' alt="" />
      </div>
    </div>
  );
}

export default BurgerIdeas;
