import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CompanyDetailsType } from "@/models/user/types";
import { api } from "@/services/api";

export type ClientType = {
  id: string;
  email: string;
  name: string;
  companyDetails: CompanyDetailsType;
};

type ClientTypeResponse = {
  success: boolean;
  client: ClientType;
};

const createNewClient = async (client: Omit<ClientType, "id">) => {
  const createUserResponse = await api.post<ClientTypeResponse>(
    "/clients",
    client
  );

  return createUserResponse.data;
};

export const useCreateClient = () => {
  return useMutation<
    ClientTypeResponse,
    AxiosError<string>,
    Omit<ClientType, "id">,
    () => void
  >(createNewClient);
};
