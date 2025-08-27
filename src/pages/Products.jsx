import { ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  url.searchParams;
  const urlSearchparams = new URLSearchParams(url.searchParams);
  const params = Object.fromEntries([...urlSearchparams]);

  const { data } = await customFetch.get("/products", { params });
  const products = data.data;
  const meta = data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <ProductsContainer />
    </>
  );
};
export default Products;
