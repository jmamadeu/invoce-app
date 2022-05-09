import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { api } from "@/services/api";

const saveMyCompanyDetails = async (
  company: API.Auth.SaveMyCompanyDetailsParams
) => {
  const companyDetailsResponse =
    await api.put<API.Auth.CreateUserCompanyDetailsResponse>("/me/company", {
      data: company
    });

  return companyDetailsResponse.data;
};

export const useSaveCompanyDetails = () => {
  return useMutation<
    API.Auth.CreateUserCompanyDetailsResponse,
    AxiosError<string>,
    API.Auth.SaveMyCompanyDetailsParams
  >(saveMyCompanyDetails);
};
