import { FormInputProperties } from "./types";

export const FormInput = ({
  label,
  type,
  placeholder,
  register,
  error,
  ...rest
}: FormInputProperties) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={rest.name} className="text-gray-200 text-xs font-normal">
      {label}
    </label>
    <input
      className={`bg-gray-25 py-3 pl-3 rounded-md placeholder:text-gray-50 placeholder:text-sm text-gray-200 text-sm ${
        error && "border-danger-100 border-[1px]"
      }`}
      type={type}
      id={rest.name}
      placeholder={placeholder}
      {...rest}
      {...register}
    />
    {error && (
      <span className="text-danger-100 text-xs font-light">{error}</span>
    )}
  </div>
);
