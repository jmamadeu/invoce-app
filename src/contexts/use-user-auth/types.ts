import { CreateUserType, UserType } from "@/models/user/types";

export type UserAuthContextType = {
  user?: UserType;
  signUp: (user: CreateUserType) => void;
};
