type CompanyDetailsType = {
  name: string;
  address: string;
  vatNumber: string;
  regNumber: string;
  iban?: string;
  swift?: string;
};

export type UserType = {
  name: string;
  email: string;
  password: string;
  companyDetails?: CompanyDetailsType;
};

export type CreateUserType = Omit<UserType, "companyDetails"> & {
  confirmPassword: string;
};

export type CreateUserResponseType = {
  user_id: string;
};
