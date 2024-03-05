import Cookies from "js-cookie";

export const userCookieName = "usersCookies";

export const getUsers = (): User[] => {
  const cookieData = Cookies.get(userCookieName);
  return cookieData ? JSON.parse(cookieData) : [];
};

export const saveUsers = (users: User[]): void => {
  Cookies.set(userCookieName, JSON.stringify(users));
};
