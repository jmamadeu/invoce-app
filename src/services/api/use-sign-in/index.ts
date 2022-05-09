import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { api } from "@/services/api";

const signIn = async (userData: API.Auth.SignInParams) => {
  const signInResponse = await api.post<API.Auth.UserSignInResponse>(
    "/login",
    userData
  );

  return signInResponse.data;
};

export const useSignIn = () => {
  return useMutation<
    API.Auth.UserSignInResponse,
    AxiosError<API.Auth.SignInResponseError>,
    API.Auth.SignInParams,
    () => void
  >(signIn);
};
