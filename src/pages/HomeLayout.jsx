import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="align-element">
        <Outlet />
      </section>
    </div>
  );
};
export default HomeLayout;
