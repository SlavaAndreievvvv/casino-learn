import { Outlet } from "react-router-dom";

// interface IMainLayoutProps {}

const MainLayout = () => {
  return (
    <div>
      <div>header</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
