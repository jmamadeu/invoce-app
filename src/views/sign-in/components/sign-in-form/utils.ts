import * as yup from "yup";

export const signInFormSchemaValidation = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("E-mail is required")
      .email("E-mail format is incorrect"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password too short")
  })
  .required();
