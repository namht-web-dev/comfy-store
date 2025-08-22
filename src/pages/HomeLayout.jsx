import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      Home
      <Outlet />
    </div>
  );
};
export default HomeLayout;
