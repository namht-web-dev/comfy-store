import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <section className="mt-10 grid gap-4 sm:gap-12">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const priceFormat = formatPrice(price);
        return (
          <Link
            className="flex justify-between rounded-md shadow-2xl hover:shadow-xl duration-300 group"
            to={`products/${product.id}`}
            key={product.id}
          >
            <div className="flex">
              <figure className="p-2">
                <img
                  className="w-24 h-24 sm:h-48 sm:w-48 object-cover group-hover:scale-105 duration-300"
                  src={image}
                  alt={title}
                />
              </figure>
              <div className="p-5 tracking-wide leading-8">
                <h1 className="font-bold sm:text-2xl capitalize">{title}</h1>
                <p className="text-secondary">{company}</p>
              </div>
            </div>
            <p className="p-5 sm:text-xl text-secondary">{priceFormat}</p>
          </Link>
        );
      })}
    </section>
  );
};
export default ProductsList;
