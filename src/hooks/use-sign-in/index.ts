import { useMutation } from "react-query";
import { AxiosError } from "axios";
import {
  SignInResponseErrorType,
  SignInType,
  SingInResponseType
} from "@/models/user/types";
import { api } from "@/services/api";

const signIn = async (userData: SignInType) => {
  const signInResponse = await api.post<SingInResponseType>("/login", userData);

  return signInResponse.data;
};

export const useSignIn = () => {
  return useMutation<
    SingInResponseType,
    AxiosError<SignInResponseErrorType>,
    SignInType,
    () => void
  >(signIn);
};
