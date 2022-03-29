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
  SignInType,
  UserDataToPersistType,
  UserType
} from "@/models/user/types";

import { useSignUp } from "@/hooks/use-sign-up";
import { useSignIn } from "@/hooks/use-sign-in";

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

  useEffect(() => {
    const userFromCookies = getPersistedUserDataFromCookies();

    if (userFromCookies.token) {
      setUser(userFromCookies);
    }
  }, [route]);

  const getUserTokenInfo = async (data: SignInType) => {
    const userTokenInfoResponse = await login(data);

    return userTokenInfoResponse;
  };

  const signUp = async (userData: CreateUserType): Promise<void> => {
    try {
      const signUpResponse = await createUser(userData);

      const userDetails = await getUserTokenInfo({
        email: userData.email,
        password: userData.password
      });

      setUser(() => {
        const userToPersist: UserType = {
          id: signUpResponse.user_id,
          email: userDetails.email,
          name: userDetails.name
        };

        persistUserLoginInfoToCookies({
          ...userToPersist,
          token: userDetails.token
        });

        return userToPersist;
      });

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

  return (
    <UserAuthContext.Provider value={{ user, signUp, signOut }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const userAuthContext = useContext(UserAuthContext);

  return userAuthContext;
};
