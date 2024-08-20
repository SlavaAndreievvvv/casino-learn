// interface IHummersPageProps {}

import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/router/utils";

const HummersPage = () => {
  return (
    <div>
      <Link to={ROUTES.main}>back to home</Link>
      <div>Hummers Page!</div>
    </div>
  );
};

export default HummersPage;
