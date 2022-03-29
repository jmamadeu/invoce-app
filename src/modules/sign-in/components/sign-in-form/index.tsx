import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormSchemaValidation } from "./utils";
import { FormInput } from "@/components/ui";
import { SignInFormInputsType } from "@/models/user/types";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormInputsType>({
    resolver: yupResolver(signInFormSchemaValidation)
  });

  const onSubmit: SubmitHandler<SignInFormInputsType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col">
      <FormInput
        type="email"
        label="Insert you email"
        register={register("email")}
        error={errors.email?.message}
      />

      <FormInput
        type="password"
        label="Insert you password"
        register={register("password")}
        error={errors.password?.message}
      />

      <div className="mt-6">
        <button
          type="submit"
          title="sign in the invoice app to see our features"
          className="bg-purple-100 text-white text-base py-3 rounded-md w-full"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};
