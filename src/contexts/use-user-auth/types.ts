import { CreateUserType, UserType } from "@/models/user/types";

export type UserAuthContextType = {
  user?: UserType;
  signUp: (user: CreateUserType) => void;
};

export type UserAuthProviderType = {
  children: JSX.Element;
};
