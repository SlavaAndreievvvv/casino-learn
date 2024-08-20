import { Link } from "react-router-dom";
import { ROUTES } from "../app/router/utils";

// interface IMainPageProps {}

const MainPage = () => {
  return (
    <div className="flex gap-4">
      <Link to={ROUTES.games.slots}>Slots</Link>
      <Link to={ROUTES.games.hummers}>Hummers</Link>
      <Link to={ROUTES.games.roulette}>Roulette</Link>
    </div>
  );
};

export default MainPage;
