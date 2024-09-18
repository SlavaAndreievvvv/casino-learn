export const ROUTES = {
  main: "/",
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  games: {
    slots: "games/slots",
    hummers: "games/hummers",
    roulette: "games/roulette",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const generateUrl = (url: string, _params?: any) => {
  return url;
};
