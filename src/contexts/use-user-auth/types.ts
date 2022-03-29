import { CreateUserType, UserType } from "@/models/user/types";

export type UserAuthContextType = {
  user: UserType | null;
  signUp: (user: CreateUserType) => void;
  signOut: () => void;
};
