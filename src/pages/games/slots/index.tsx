// interface ISlotsPageProps {}

import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/router/utils";

const SlotsPage = () => {
  return (
    <div>
      <Link to={ROUTES.main}>back to home</Link>
      <div>Slots Page!</div>
    </div>
  );
};

export default SlotsPage;
