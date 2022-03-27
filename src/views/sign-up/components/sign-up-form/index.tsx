import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { signUpFormSchemaValidation } from "../utils";
import { CreateUserType } from "@/models/user/types";
import { FormInput } from "@/components/ui";

import { useSignUp } from "@/hooks/use-sign-up";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserType>({
    resolver: yupResolver(signUpFormSchemaValidation)
  });

  const { mutateAsync: createUser, isLoading } = useSignUp();

  const onSubmit: SubmitHandler<CreateUserType> = async (
    signUpUserData
  ): Promise<void> => {
    try {
      const signUpResponse = await createUser(signUpUserData);
      console.log(signUpResponse);
    } catch (err: any) {
      toast.error(err?.response?.data);
    }
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
            disabled={isLoading}
            type="submit"
            title="sign up to use the app features"
            className="bg-purple-100 disabled:cursor-not-allowed hover:bg-purple-200 text-white text-base py-3 rounded-md w-full"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
