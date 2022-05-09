import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { api } from "@/services/api";

const getMe = async () => {
  const meResponse = await api.get<UserModule.Type>("/me");

  return meResponse.data;
};

export const useGetMe = () => {
  return useMutation<UserModule.Type, AxiosError<string>, void>(getMe);
};
