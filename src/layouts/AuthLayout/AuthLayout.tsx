import { Outlet } from "react-router-dom";

// interface IAuthLayoutProps {}

const AuthLayout = () => {
  return (
    <div>
      <div>header auth</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
