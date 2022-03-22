import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpFormSchemaValidation } from "../utils";
import { CreateUserType } from "@/models/user/types";
import { FormInput } from "@/components/ui";

import { useUserAuth } from "@/contexts/use-user-auth";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserType>({
    resolver: yupResolver(signUpFormSchemaValidation)
  });

  const { signUp } = useUserAuth();

  const onSubmit: SubmitHandler<CreateUserType> = async (userData) => {
    signUp(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col">
        <FormInput
          type="text"
          placeholder="João Amadeu"
          label="Insert your full name"
          register={register("name")}
          error={errors?.name?.message}
        />
        <FormInput
          type="email"
          placeholder="jmamadeu@toptal.com"
          label="Insert your work e-mail"
          register={register("email")}
          error={errors?.email?.message}
        />

        <FormInput
          type="password"
          placeholder="*******"
          label="Insert your password"
          register={register("password")}
          error={errors?.password?.message}
        />
        <FormInput
          type="password"
          placeholder="*******"
          label="Confirm your password"
          register={register("confirmPassword")}
          error={errors?.confirmPassword?.message}
        />
        <div className="my-8">
          <button
            type="submit"
            title="sign up to use the app features"
            className="bg-purple-100 hover:text-black text-white text-base py-3 rounded-md w-full"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
