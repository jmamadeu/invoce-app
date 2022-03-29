import { useMutation } from "react-query";
import { AxiosError } from "axios";
import {
  CreateUserResponseErrorType,
  CreateUserResponseType,
  CreateUserType
} from "@/models/user/types";
import { api } from "@/services/api";

const createUser = async (userData: CreateUserType) => {
  const createUserResponse = await api.post<CreateUserResponseType>(
    "/register",
    userData
  );

  return createUserResponse.data;
};

export const useSignUp = () => {
  return useMutation<
    CreateUserResponseType,
    AxiosError<CreateUserResponseErrorType>,
    CreateUserType,
    () => void
  >(createUser);
};
