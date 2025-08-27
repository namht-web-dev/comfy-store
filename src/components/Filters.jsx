import { Form, Link, useLoaderData } from "react-router-dom";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { categories, companies } = meta;
  const { search, company, category, order, price, shipping } = params;
  return (
    <section>
      <Form className="grid justify-center mb-5 p-5 rounded-md bg-neutral-800 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        <FormInput
          label="product name"
          name="search"
          type="search"
          size="input-sm"
          defaultValue={search}
        />
        <FormSelect
          label="category"
          list={categories}
          name="category"
          size="select-sm"
          defaultValue={category}
        />
        <FormSelect
          label="company"
          list={companies}
          name="company"
          size="select-sm"
          defaultValue={company}
        />
        <FormSelect
          label="sort by"
          list={["a-z", "z-a", "high", "low"]}
          name="order"
          size="select-sm"
          defaultValue={order}
        />
        <FormRange label="price" name="price" defaultValue={price} />
        <FormCheckbox
          label="free shipping"
          name="shipping"
          checked={shipping}
        />
        <button type="submit" className="btn btn-sm btn-accent mt-3 md:mt-0">
          Submit
        </button>
        <Link to="/products" className="btn btn-sm btn-secondary mt-3 md:mt-0">
          Reset
        </Link>
      </Form>
    </section>
  );
};
export default Filters;
