import { Link } from "react-router-dom";
import { ROUTES } from "../app/router/utils";
import { useAppSelector } from "../app/store/hooks";
import { selectUserNickName } from "../entities/user/slices/userSlice";

// interface IMainPageProps {}

const MainPage = () => {
  const nickname = useAppSelector(selectUserNickName);


  return (
    <div className="flex gap-4">
      <div>{nickname}</div>
      <Link to={ROUTES.games.slots}>Slots</Link>
      <Link to={ROUTES.games.hummers}>Hummers</Link>
      <Link to={ROUTES.games.roulette}>Roulette</Link>
    </div>
  );
};

export default MainPage;
