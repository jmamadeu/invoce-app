import * as yup from "yup";

export const setupMyCompanyFormSchemaValidation = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    vatNumber: yup.string().required("Address is required"),
    regNumber: yup.string().required("Address is required"),
    iban: yup.string(),
    swift: yup.string()
  })
  .required();
