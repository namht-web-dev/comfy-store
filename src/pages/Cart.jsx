import { CartItemList, CartOrders } from "../components";

const Cart = () => {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-12 gap-4 ">
      <div className="lg:col-span-8">
        <CartItemList />
      </div>
      <div className="lg:col-span-4 bg-base-300 p-5 rounded-sm h-72 w-full md:w-96 mx-auto">
        <CartOrders />
      </div>
    </div>
  );
};
export default Cart;
