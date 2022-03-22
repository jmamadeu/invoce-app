import { createContext, useContext, useState } from "react";

import { UserAuthContextType, UserAuthProviderType } from "./types";
import {
  CreateUserResponseType,
  CreateUserType,
  UserType
} from "@/models/user/types";
import { api } from "@/services/api";

export const UserAuthContext = createContext<UserAuthContextType>(
  {} as UserAuthContextType
);

export const UserAuthProvider = ({ children }: UserAuthProviderType) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);

  const signUp = async (userData: CreateUserType) => {
    try {
      const createUserResponse = await api.post<CreateUserResponseType>(
        "/register",
        userData
      );
      console.log(createUserResponse.data.user_id);

      // setUser(createUserResponse.data);
    } catch (err: any) {
      alert(err.response.data);
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
