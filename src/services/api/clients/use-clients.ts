import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { api } from "@/services/api";

const createNewClient = async (client: Omit<UserModule.Type, "id">) => {
  const createUserResponse = await api.post<API.Auth.CreateClientResponse>(
    "/clients",
    client
  );

  return createUserResponse.data;
};

export const useCreateClient = () => {
  return useMutation<
    API.Auth.CreateClientResponse,
    AxiosError<string>,
    Omit<UserModule.Type, "id">,
    () => void
  >(createNewClient);
};
