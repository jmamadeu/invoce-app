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

import { useSignUp } from "@/hooks/api/use-sign-up";
import { useSignIn } from "@/hooks/api/use-sign-in";

import { getClientUserCookie, setClientCookie } from "@/utils/cookies";

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

export const UserAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const { replace: replaceRoute, route, push: navigateToRoute } = useRouter();

  const { mutateAsync: login } = useSignIn();
  const { mutateAsync: createUser } = useSignUp();

  const getUserFromCookies = () => {
    const userFromCookies = getPersistedUserDataFromCookies();

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

  const signUp = async (userData: CreateUserType): Promise<void> => {
    try {
      await createUser(userData);

      const userDetails = await getUserTokenInfo({
        email: userData.email,
        password: userData.password
      });

      persistUserToContextAndCookies(userDetails);

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

  useEffect(() => {
    getUserFromCookies();
  }, [route]);

  const signIn = useCallback(async (userToLogin: SignInFormInputsType) => {
    try {
      const userDetails = await getUserTokenInfo(userToLogin);

      persistUserToContextAndCookies(userDetails);

      navigateToRoute("/");
    } catch (err: any) {
      toast.error(`an error occured, ${err?.response?.data ?? ""}`);
    }
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, signUp, signOut, signIn }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const userAuthContext = useContext(UserAuthContext);

  return userAuthContext;
};
