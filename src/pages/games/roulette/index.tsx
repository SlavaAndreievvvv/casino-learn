// interface IRoulettePageProps {}

import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/router/utils";

const RoulettePage = () => {
  return (
    <div>
      <Link to={ROUTES.main}>back to home</Link>
      <div>Roulette Page!</div>
    </div>
  );
};

export default RoulettePage;
