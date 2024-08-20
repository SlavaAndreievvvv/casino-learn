import { Outlet } from "react-router-dom";

// interface IGamesLayoutProps {}

const GamesLayout = () => {
  return (
    <div>
      <div>header games</div>
      <Outlet />
    </div>
  );
};

export default GamesLayout;
