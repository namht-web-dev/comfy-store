import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const priceFormat = formatPrice(price);
        return (
          <Link
            to={`products/${product.id}`}
            className="card shadow-xl hover:shadow-lg transition duration-300"
            key={product.id}
          >
            <figure className="">
              <img
                className="w-full h-80 object-cover"
                src={image}
                alt={title}
              />
            </figure>
            <div className="p-5  tracking-wide leading-8">
              <h1 className="font-bold text-2xl capitalize">{title}</h1>
              <p className="text-secondary">{priceFormat}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
export default ProductsGrid;
