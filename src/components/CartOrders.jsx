import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartOrders = () => {
  const { cartTotal, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="px-5 text-sm tracking-wide leading-10">
      <p className="flex justify-between border-b border-base-100">
        <span>Subtotal</span>
        <span>{formatPrice(cartTotal)}</span>
      </p>
      <p className="flex justify-between border-b border-base-100 ">
        <span>Shipping</span>
        <span className="font-semibold">{formatPrice(0)}</span>
      </p>
      <p className="flex justify-between border-b border-base-100">
        <span>Tax</span>
        <span>{formatPrice(tax)}</span>
      </p>
      <p className="flex justify-between text-lg mt-4">
        <span>Order total</span>
        <span>{formatPrice(orderTotal)}</span>
      </p>
    </div>
  );
};
export default CartOrders;
