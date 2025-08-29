import { useSelector } from "react-redux";
import { CartItemList, CartOrders } from "../components";

const Cart = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);
  if (numItemsInCart < 1) {
    return (
      <h1 className="text-center text-3xl text-primary tracking-wide">
        Your bag is currently empty!
      </h1>
    );
  }
  return (
    <div className="grid grid-rows-2 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-8">
        <CartItemList />
      </div>
      <div className="lg:col-span-4 bg-base-300 px-5 py-8 rounded-3xl w-full md:w-96 mx-auto">
        <CartOrders />
      </div>
    </div>
  );
};
export default Cart;
