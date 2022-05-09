declare namespace API {
  namespace Auth {
    type CreateUserResponse = {
      user_id: string;
    };

    type CreateUserParams = Omit<UserModule.Type, "companyDetails"> & {
      confirmPassword: string;
      password: string;
    };

    type UserSignInResponse = {
      user_id: string;
      email: string;
      name: string;
      token: string;
    };

    type CreateUserCompanyDetailsResponse = {
      success: true;
      user: UserModule.Type;
    };

    type SignInParams = {
      email: string;
      password: string;
    };

    type CreateClientResponse = {
      success: boolean;
      client: ClientType;
    };

    type CreateUserResponseError = string;

    type SaveMyCompanyDetailsParams = Omit<UserModule.CompanyDetails, "id">;

    type SignInResponseError = string;

    type CreateUserResponseError = string;
  }
}
