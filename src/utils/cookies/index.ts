import { setCookie, parseCookies } from "nookies";

export const setClientCookie = (key: string, data: any) => {
  setCookie(null, key, JSON.stringify(data), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  });
};

export const getClientUserCookie = (key: string) => {
  const cookies = parseCookies();

  return JSON.parse(cookies[key]);
};
