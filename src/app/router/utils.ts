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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const generateUrl = (url: string, params?: any) => {
  return url;
};
