import type { GetServerSideProps, NextPage } from "next";
import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "@/components/ui";
import { PageWrapper } from "@/components/layouts/page-wrapper";
import { withAuth } from "@/guards/with-ssr-auth";
import { Header } from "@/components/layouts/header";
import { CompanyDetailsType } from "@/models/user/types";
import { setupMyCompanyFormSchemaValidation } from "@/views/setup-my-component/utils";

const SetupMyCompany: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CompanyDetailsType>({
    resolver: yupResolver(setupMyCompanyFormSchemaValidation)
  });

  const onSubmit: SubmitHandler<CompanyDetailsType> = (data) => {
    console.log(data);
  };

  return (
    <PageWrapper className="bg-darkPurple-100" pageTitle="Setup my company">
      <main className="h-screen flex flex-col">
        <Header />
        <div className="container mx-auto flex justify-center items-center mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-10 rounded-xl p-4 py-12 gap"
          >
            <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
              Setup company details
            </h3>
            <div className="flex gap-4 flex-col">
              <FormInput
                type="text"
                placeholder="Toptal"
                label="Insert your company's name"
                register={register("name")}
                error={errors.name?.message}
              />
              <FormInput
                type="text"
                placeholder="San Francisco"
                label="Company's address"
                register={register("address")}
                error={errors.address?.message}
              />

              <div className="flex gap-4 flex-row">
                <FormInput
                  type="text"
                  placeholder="1223"
                  label="Insert your vat number"
                  register={register("vatNumber")}
                  error={errors.vatNumber?.message}
                />
                <FormInput
                  type="text"
                  placeholder="1223"
                  label="Insert your reg number"
                  register={register("regNumber")}
                  error={errors.regNumber?.message}
                />
              </div>
              <div className="flex gap-4 flex-row">
                <FormInput
                  type="text"
                  placeholder="BE32432934893"
                  label="Insert your Iban"
                  register={register("iban")}
                  error={errors.iban?.message}
                />
                <FormInput
                  type="text"
                  placeholder="TOP123"
                  label="Insert your Swift"
                  register={register("swift")}
                  error={errors.swift?.message}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-8">
              <button
                type="submit"
                title="sign in"
                className="bg-purple-100 text-white text-base py-3 rounded-md"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </PageWrapper>
  );
};

export default SetupMyCompany;

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {}
  };
});
