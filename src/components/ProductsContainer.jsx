import Filters from "./Filters";
import PaginationContainer from "./PaginationContainer";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  return (
    <>
      <Filters />
      <ProductsGrid />
      <ProductsList />
      <PaginationContainer />
    </>
  );
};
export default ProductsContainer;
