declare namespace UserModule {
  type Type = {
    name: string;
    email: string;
    id: string;
    companyDetails?: CompanyDetails;
  };

  type CompanyDetails = {
    id: string;
    name: string;
    address: string;
    vatNumber: string;
    regNumber: string;
    iban?: string;
    swift?: string;
  };

  type UserDataToPersist = Type & {
    token: string;
  };

  type Client = Omit<Type, "id">;
}
