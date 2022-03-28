import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

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

const getPersistedUserDataFromCookies = () => {
  return getClientUserCookie(
    "@invoice_app:user_login"
  ) as UserDataToPersistType;
};

export const UserAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType>({} as UserType);

  const { replace: replaceRoute } = useRouter();

  const { mutateAsync: login } = useSignIn();
  const { mutateAsync: createUser } = useSignUp();

  useEffect(() => {
    const userFromCookies = getPersistedUserDataFromCookies();

    if (!userFromCookies) {
      replaceRoute("/sign-in");
    }

    if (!userFromCookies.companyDetails) {
      replaceRoute("/setup-my-company");
    }

    setUser(userFromCookies);
  }, []);

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

  return (
    <UserAuthContext.Provider value={{ user, signUp }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const userAuthContext = useContext(UserAuthContext);

  return userAuthContext;
};
