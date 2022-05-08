import { useMutation } from "react-query";
import { AxiosError } from "axios";
import {
  CompanyDetailsType,
  UserCompanyDetailsResponse
} from "@/models/user/types";
import { api } from "@/services/api";

const saveMyCompanyDetails = async (company: CompanyDetailsType) => {
  const companyDetailsResponse = await api.put<UserCompanyDetailsResponse>(
    "/me/company",
    {
      data: company
    }
  );

  return companyDetailsResponse.data;
};

export const useSaveCompanyDetails = () => {
  return useMutation<
    UserCompanyDetailsResponse,
    AxiosError<string>,
    CompanyDetailsType
  >(saveMyCompanyDetails);
};
