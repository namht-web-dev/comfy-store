import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const id = params.id;
  const { data } = await customFetch.get(`/products/${id}`);
  return { product: data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { title, price, company, colors, image, description } =
    product.attributes;
  const priceFormat = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Product</Link>
          </li>
        </ul>
      </div>
      <div className="grid place-items-center">
        <div className="grid md:grid-cols-2 gap-12">
          <img
            className="w-96 h-96 object-cover rounded-2xl shadow-xl mx-auto"
            src={image}
            alt={title}
          />
          <div className="tracking-wider leading-8 mx-auto w-96 md:w-full">
            <h4 className="capitalize text-4xl font-bold">{title}</h4>
            <p className="mt-2 font-bold">{company}</p>
            <div className="mt-4">
              <p>{priceFormat}</p>
              <p>{description}</p>
            </div>
            <div className="mt-4 flex gap-2">
              {colors.map((color) => {
                return (
                  <button
                    onClick={() => setProductColor(color)}
                    key={color}
                    className={`btn btn-circle btn-xs ${
                      productColor === color && "border border-neutral-300"
                    }`}
                    style={{ background: color }}
                  ></button>
                );
              })}
            </div>
            <div className="form-control w-full max-w-xs mt-4">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-md"
                name="amount"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
              >
                {generateAmountOptions(3)}
              </select>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md uppercase"
                onClick={() => console.log("add item to bag")}
              >
                add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
