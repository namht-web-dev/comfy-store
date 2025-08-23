import { Link } from "react-router-dom";
import { Cart } from "../assets/icons/cart";
import { Bar } from "../assets/icons/bar";
import NavLinks from "./NavLinks";

const Navbar = () => {
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
                    8
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <Link to="/checkout" className="btn btn-primary btn-block">
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
