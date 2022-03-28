import { ComponentPropsWithRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type FormInputProperties = ComponentPropsWithRef<"input"> & {
  label?: string;
  type: string;
  register?: UseFormRegisterReturn;
  error?: string;
};
