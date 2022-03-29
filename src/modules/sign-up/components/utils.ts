import * as yup from "yup";

export const signUpFormSchemaValidation = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("E-mail is required")
      .email("E-mail format is incorrect"),
    name: yup.string().required("Name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password too short"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .min(4, "Password too short")
      .oneOf([null, yup.ref("password")], "Passwords must be the same")
  })
  .required();
