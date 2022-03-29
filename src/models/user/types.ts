export type CompanyDetailsType = {
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
  id: string;
  companyDetails?: CompanyDetailsType;
};

export type CreateUserType = Omit<UserType, "companyDetails"> & {
  confirmPassword: string;
  password: string;
};

export type CreateUserResponseType = {
  user_id: string;
};

export type CreateUserResponseErrorType = string;

export type SingInResponseType = {
  user_id: string;
  email: string;
  name: string;
  token: string;
};

export type SignInType = {
  email: string;
  password: string;
};

export type SignInFormInputsType = SignInType;

export type SignInResponseErrorType = string;

export type UserDataToPersistType = UserType & {
  token: string;
};
