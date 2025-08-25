import { useLoaderData } from "react-router-dom";
import FormSelect from "./FormSelect";

const Filters = () => {
  const { meta } = useLoaderData();
  const { categories, companies } = meta;
  console.log(meta);
  return (
    <section>
      <FormSelect
        label="company"
        list={companies}
        name="company"
        size="select-sm"
      />
      <FormSelect
        label="category"
        list={categories}
        name="category"
        size="select-sm"
      />
    </section>
  );
};
export default Filters;
