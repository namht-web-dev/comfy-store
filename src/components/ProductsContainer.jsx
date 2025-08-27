import { useState } from "react";
import { Grid, List } from "../assets/icons";
import Filters from "./Filters";
import PaginationContainer from "./PaginationContainer";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";

const layouts = {
  grid: "grid",
  list: "list",
};

const ProductsContainer = () => {
  const [layout, setLayout] = useState(layouts.grid);
  const { meta } = useLoaderData();
  const activeLayoutStyle = () => {
    return "bg-neutral-900";
  };

  return (
    <>
      <Filters />
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl text-primary">
          {meta.pagination.total}
          {meta.pagination.total > 1 ? " products" : " product"}
        </p>
        <div className="flex gap-3">
          <Grid
            onClick={() => setLayout(layouts.grid)}
            className={layouts.grid === layout && activeLayoutStyle()}
          />
          <List
            onClick={() => setLayout(layouts.list)}
            className={layouts.list === layout && activeLayoutStyle()}
          />
        </div>
      </div>
      {layouts.grid === layout ? <ProductsGrid /> : <ProductsList />}

      <PaginationContainer />
    </>
  );
};
export default ProductsContainer;
