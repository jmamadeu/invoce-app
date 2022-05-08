import { toast } from "react-toastify";
import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import { destroyCookie } from "nookies";
import { UserAuthContextType } from "./types";
import {
  CreateUserType,
  SignInFormInputsType,
  SignInType,
  SingInResponseType,
  UserDataToPersistType,
  UserType
} from "@/models/user/types";

import { useSignUp } from "@/services/api/use-sign-up";
import { useSignIn } from "@/services/api/use-sign-in";

import { getClientUserCookie, setClientCookie } from "@/utils/cookies";
import { api } from "@/services/api";
import { useGetMe } from "@/services/api/use-get-me";

export const UserAuthContext = createContext<UserAuthContextType>(
  {} as UserAuthContextType
);

const persistUserLoginInfoToCookies = (user: UserDataToPersistType): void => {
  setClientCookie("@invoice_app:user_login", user);
};

export const getPersistedUserDataFromCookies = () => {
  return getClientUserCookie(
    "@invoice_app:user_login"
  ) as UserDataToPersistType;
};

const setTokenToAPI = (token: string) => {
  api.defaults.headers.common = {
    "x-access-token": token
  };
};

export const UserAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const { replace: replaceRoute, route, push: navigateToRoute } = useRouter();

  const { mutateAsync: login } = useSignIn();
  const { mutateAsync: createUser } = useSignUp();
  const { mutateAsync: getMe } = useGetMe();

  const setUserFromCookies = () => {
    const userFromCookies = getPersistedUserDataFromCookies();

    setTokenToAPI(userFromCookies.token);

    if (userFromCookies.token) {
      setUser(userFromCookies);
    }
  };

  const getUserTokenInfo = async (data: SignInType) => {
    const userTokenInfoResponse = await login(data);

    return userTokenInfoResponse;
  };

  const persistUserToContextAndCookies = (user: SingInResponseType): void => {
    setUser(() => {
      const userToPersist: UserType = {
        id: user.user_id,
        email: user.email,
        name: user.name
      };

      persistUserLoginInfoToCookies({
        ...userToPersist,
        token: user.token
      });

      return userToPersist;
    });
  };

  const persistUserCompanyDetails = useCallback((data: UserType) => {
    const userFromCookies = getPersistedUserDataFromCookies();

    persistUserLoginInfoToCookies({ ...data, token: userFromCookies.token });

    setUser(data);
  }, []);

  const signUp = async (userData: CreateUserType): Promise<void> => {
    try {
      await createUser(userData);

      const userDetails = await getUserTokenInfo({
        email: userData.email,
        password: userData.password
      });

      persistUserToContextAndCookies(userDetails);

      setTokenToAPI(userDetails.token);

      replaceRoute("/setup-my-company");
    } catch (err: any) {
      toast.error(err?.response?.data);
    }
  };

  const signOut = useCallback(() => {
    destroyCookie(null, "@invoice_app:user_login");
    setUser(null);

    navigateToRoute("/sign-in");
  }, []);

  const signIn = useCallback(async (userToLogin: SignInFormInputsType) => {
    try {
      const userDetails = await getUserTokenInfo(userToLogin);

      setTokenToAPI(userDetails.token);

      const me = await getMe();

      persistUserLoginInfoToCookies({
        ...me,
        token: userDetails.token
      });

      setUser(me);

      navigateToRoute("/");
    } catch (err: any) {
      toast.error(`an error occured, ${err?.response?.data ?? ""}`);
    }
  }, []);

  useEffect(() => {
    setUserFromCookies();
  }, [route]);

  return (
    <UserAuthContext.Provider
      value={{ user, signUp, signOut, signIn, persistUserCompanyDetails }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const userAuthContext = useContext(UserAuthContext);

  return userAuthContext;
};
