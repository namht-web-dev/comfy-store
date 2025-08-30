import { Link } from "react-router-dom";
import { Bar, Cart, Sun, Moon } from "../assets/icons";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const { theme } = useSelector((state) => state.userState);

  const { numItemsInCart, cartTotal } = useSelector((state) => state.cartState);
  return (
    <nav className="bg-base-300 shadow-sm">
      <div className="navbar align-element">
        <Link
          to="/"
          className="btn btn-ghost text-3xl py-6 font-bold bg-primary"
        >
          C
        </Link>
        <div className="navbar-start ml-3">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-3xl py-6 lg:hidden"
            >
              <Bar />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end mr-2">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              className="theme-controller"
              checked={theme === "winter"}
            />
            <Sun />
            <Moon />
          </label>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <Cart />
                  <span className="badge badge-sm indicator-item bg-primary">
                    {numItemsInCart}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {numItemsInCart} Items
                  </span>
                  <span className="text-info">
                    Subtotal: {formatPrice(cartTotal)}
                  </span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
