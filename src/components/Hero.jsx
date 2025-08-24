import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="mx-auto max-w-lg">
        <h1 className="font-bold text-6xl lg:text-left text-center text-primary">
          We are changing
        </h1>
        <p className="text-3xl text-center font-bold py-5 lg:text-left">
          the way people to the shop.
        </p>
        <p className="text-center font-bold py-5 lg:text-left tracking-wider leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni
          porro nostrum commodi eos, id similique asperiores! Itaque atque
          nostrum delectus laboriosam voluptas, veritatis dolor sapiente
          consequuntur nobis aspernatur minus aliquam perspiciatis quidem
          deleniti ab nam, expedita pariatur quas beatae porro! Recusandae
          repellat blanditiis pariatur. Fugit quaerat dicta voluptatibus totam?
        </p>
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link to="products" className="btn btn-primary">
            OUR PRODUCTS
          </Link>
        </div>
      </div>
      <div className="mx-auto h-[34rem]">
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
          {images.map((img) => {
            return (
              <div key={img} id={img} className="carousel-item">
                <img
                  src={img}
                  className="rounded-box object-cover w-80 h-full"
                />
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-center gap-2 py-2  max-w-md">
          {images.map((img, index) => {
            return (
              <a key={img} href={`#${img}`} className="btn btn-xs">
                {index + 1}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Hero;
