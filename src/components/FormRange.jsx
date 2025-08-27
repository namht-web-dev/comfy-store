import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, defaultValue }) => {
  const step = 10000;
  const maxPrice = 1000000;
  const [selectedPrice, setSelectedPrice] = useState(defaultValue || maxPrice);
  const price = formatPrice(selectedPrice);
  return (
    <div>
      <h4 className="py-2 capitalize">{label}</h4>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        step={step}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className="range range-primary"
      />
      <p className="text-sm pt-4">{price}</p>
    </div>
  );
};
export default FormRange;
