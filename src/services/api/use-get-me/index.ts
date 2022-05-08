import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { UserType } from "@/models/user/types";
import { api } from "@/services/api";

const getMe = async () => {
  const meResponse = await api.get<UserType>("/me");

  return meResponse.data;
};

export const useGetMe = () => {
  return useMutation<UserType, AxiosError<string>, void>(getMe);
};
