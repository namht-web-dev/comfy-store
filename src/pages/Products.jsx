import { ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async () => {
  const { data } = await customFetch.get("/products");
  const products = data.data;
  const meta = data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <ProductsContainer />
    </>
  );
};
export default Products;
