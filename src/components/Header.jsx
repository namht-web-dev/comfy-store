import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userState);
  console.log(user);
  return (
    <header className="py-3 bg-base-100">
      <div className="align-element flex justify-center sm:justify-end gap-8">
        <div>
          {user ? (
            `Hello ${user.username}!`
          ) : (
            <>
              <Link to="/login" className="link link-hover">
                Sign in
              </Link>
              <span> / </span>
              <Link className="link link-hover">Guest</Link>
            </>
          )}
        </div>
        {user ? (
          <Link to="/login" className="btn btn-outline btn-accent">
            Logout
          </Link>
        ) : (
          <Link to="/register" className="link link-hover">
            Create an account
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
