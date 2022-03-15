import { ComponentPropsWithRef } from "react";

type FormInputProperties = ComponentPropsWithRef<"input"> & {
  label?: string;
  name: string;
  type: string;
};

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
  ...rest
}: FormInputProperties) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-gray-200 text-xs font-normal">
      {label}
    </label>
    <input
      className="bg-gray-25 py-3 pl-3 rounded-md placeholder:text-gray-50 placeholder:text-sm text-gray-200 text-sm"
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  </div>
);
