import {
  CreateUserType,
  SignInFormInputsType,
  UserType
} from "@/models/user/types";

export type UserAuthContextType = {
  user: UserType | null;
  signUp: (user: CreateUserType) => Promise<void>;
  signOut: () => void;
  signIn: (credentials: SignInFormInputsType) => Promise<void>;
};
