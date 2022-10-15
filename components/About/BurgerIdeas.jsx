import img1 from '../../images/about-photo/image1-h4.jpg'
import img2 from '../../images/about-photo/image2-h4.jpg'
import img3 from '../../images/about-photo/image3-h4.jpg'
function BurgerIdeas() {

  return (
    <div
      className="container mx-auto flex justify-between py-20 space-x-16 items-center"
      style={{
        backgroundImage: "url(https://i.ibb.co/fpN6zyk/vector2-about.png)",
        backgroundPosition: "bottom",
        backgroundSize: "200px",
        backgroundRepeat:'no-repeat',
        backgroundAttachment: "fixed",
        
      }}
    >
      <div className='space-y-6 w-full'>
        <h4 className="text-secondary text-2xl font-bold">Welcome!</h4>
        <h2 className="text-5xl text-[#1E1D23] font-extrabold">Best burger ideas & traditions from the whole world</h2>
        <p className="text-gray-500">Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!</p>
        <p className="text-gray-500">Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
        <button className="btn btn-secondary px-10 font-bold">CONTACT NOW</button>
      </div>
      <div className='grid grid-rows-3 grid-cols-2 w-full gap-5'>
        <img className='row-span-2 rounded-md hover:-translate-y-2 hover:duration-300 hover:ease-in-out ease-in-out duration-300' src='https://i.ibb.co/Z86cJWL/image1-h4.jpg' alt="" />
        <img className='row-span-1 rounded-md hover:-translate-y-2 hover:duration-300 hover:ease-in-out ease-in-out duration-300' src='https://i.ibb.co/9TvFf2X/image2-h4.jpg' alt="" />
        <img className='row-span-2 rounded-md hover:-translate-y-2 hover:duration-300 hover:ease-in-out ease-in-out duration-300' src='https://i.ibb.co/L9n7M1z/image3-h4.jpg' alt="" />
      </div>
    </div>
  );
}

export default BurgerIdeas;
