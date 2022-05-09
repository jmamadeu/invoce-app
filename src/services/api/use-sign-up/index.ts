import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { api } from "@/services/api";

const createUser = async (userData: API.Auth.CreateUserParams) => {
  const createUserResponse = await api.post<API.Auth.CreateUserResponse>(
    "/register",
    userData
  );

  return createUserResponse.data;
};

export const useSignUp = () => {
  return useMutation<
    API.Auth.CreateUserResponse,
    AxiosError<API.Auth.CreateUserResponseError>,
    API.Auth.CreateUserParams,
    () => void
  >(createUser);
};
