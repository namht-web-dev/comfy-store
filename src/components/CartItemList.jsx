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
              <img className="w-32 h-32 rounded-md" src={image} alt={title} />
            </div>
            <div className="col-span-2">
              <h3 className="capitalize font-bold leading-9 tracking-wide">
                {title}
              </h3>
              <p className="leading-loose">{company}</p>
              <p className="flex items-center mt-2">
                <span>Color</span>
                <button
                  className="btn-xs btn-circle ml-3"
                  style={{ background: productColor }}
                ></button>
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-center">Amount</p>
              <select
                className="select select-secondary select-sm"
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
                className="text-error font-bold text-center w-full mt-2 btn btn-sm"
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
