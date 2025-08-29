import { useDispatch, useSelector } from "react-redux";
import FormSelect from "./FormSelect";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/slice";

const CartItemList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div>
      {cartItems.map((item) => {
        const { cartID, image, company, title, amount, productColor, price } =
          item;
        return (
          <div className="grid grid-cols-9 p-3" key={cartID}>
            <div className="col-span-2">
              <img
                className="size-24 md:w-32 md:h-32 rounded-md"
                src={image}
                alt={title}
              />
            </div>
            <div className="col-span-2">
              <h3 className="capitalize font-bold md:leading-9 text-xs md:text-md tracking-wide">
                {title}
              </h3>
              <p className="md:leading-loose text-xs md:text-md text-slate-500">
                {company}
              </p>
              <p className="flex items-center mt-2">
                <span className="text-xs">Color</span>
                <button
                  className="size-4 btn-circle ml-3"
                  style={{ background: productColor }}
                ></button>
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center">
              <p className="text-center text-xs md:text-md">Amount</p>
              <select
                className="select select-secondary select-sm w-16"
                name="amount"
                value={amount}
                onChange={(e) =>
                  dispatch(editItem({ cartID, amount: e.target.value }))
                }
              >
                {generateAmountOptions(amount + 3)}
              </select>
              <button
                onClick={() => dispatch(removeItem({ cartID }))}
                className="text-error font-bold text-center w-16 mt-2 btn btn-sm"
              >
                remove
              </button>
            </div>
            <div className="col-span-3 text-end mt-5 text-secondary font-bold">
              {formatPrice(price * amount)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartItemList;
