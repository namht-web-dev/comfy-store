import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 bg-slate-700">
      <div className="align-element flex justify-center sm:justify-end gap-8">
        <div>
          <Link to="/login" className="link link-hover">
            Sign in
          </Link>
          <span> / </span>
          <Link className="link link-hover">Guest</Link>
        </div>
        <Link to="/register" className="link link-hover">
          Create an account
        </Link>
      </div>
    </header>
  );
};
export default Header;
